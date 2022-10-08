---
title: 잡플래닛 크롤링하기
date: '2021-04-01'
tags: crawling R
---

 어쩌다 인턴 면접을 보게 됐다. 잡플래닛의 예상 면접 질문을 보면서 대비를 하려고 했는데... 양이 너무 많고 정렬 기능이 없다...!! 게다가 한번에 5개까지 밖에 볼 수 없다. 코딩 공부도 할겸 R을 이용해 내용을 크롤링 후, csv로 정리해 보기로 했다.

 크롤링한 내용은 이하와 같다:
 면접날짜, 면접난이도, 면접질문, 면접답변 혹은 면접느낌, 면접결과, 면접경험, 도움이돼요 수


#### 참고한 사이트:
[R gsub() 함수를 이용한 패턴 치환하기!](https://quantumcomputer.tistory.com/99)
[R로 웹 데이터를 가져오는 4가지 방법](https://tidyverse-korea.github.io/r-meetup-x-presser/kaggle/Meetup_3/crawling/getWebR.pdf)
[특강 기업리뷰 분석 1](https://mrkevinna.github.io/%ED%8A%B9%EA%B0%95-%EA%B8%B0%EC%97%85%EB%A6%AC%EB%B7%B0-%EB%B6%84%EC%84%9D-1/)


## 코드
```R
library(httr) #요청
library(rvest) #요청
library(tidyverse) #정리
library(stringr) #string처리

# 로그인 화면의 URI를 복사하여 URI 객체에 지정
URI <- 'https://www.jobplanet.co.kr/users/sign_in'

# 로그인 정보를 이용하여 HTTP를 요청
resp <- POST(url = URI,
             body = list('user[email]' = '계정',
                         'user[password]' = '비밀번호'))

# 응답 상태코드를 확인, 200의 경우 정상
status_code(x = resp)

# 쿠키만 수집해 myCookies 객체에 할당
# 앞으로 HTTP 요청할 때 myCookies를 활용하면 로그인 상태로 HTML을 받을 수 있다
myCookies <- set_cookies(.cookies = unlist(x = cookies(x = resp)))

url_madup = '잡플라넷 기업 면접 페이지'
# 예) https://www.jobplanet.co.kr/companies/000000/interviews
resp = GET(url=url_madup, config = list(cookies = myCookies))
status_code(x=resp)

#기업명
resp %>% read_html() %>% html_node(css='body > div.body_wrap > div.cmp_hd > div.new_top_bnr > div > div.top_bnr_wrap > div > div > div.company_info_sec > div.company_info_box > div.company_name > h1 > a') %>% html_text()

#작성날짜
dates = resp %>% read_html() %>% html_nodes(css = 'div.content_top_ty2 > span.txt1 > span.txt2') %>% html_text()
dates = gsub('[^0-9]','',dates)
dates
# gsub 참고: https://quantumcomputer.tistory.com/99
## 원래경로: #viewInterviewsList > div > div > section:nth-child(1) > div > div.content_top_ty2 > span.txt1 > span.txt2
## 이거지만 원래경로대로 하면 하나밖에 추출 못함

#면접질문
questions = resp %>% read_html() %>% html_nodes(css = 'div.ctbody_col2 > div > dl > dd:nth-child(2) > span') %>% html_text()
questions = gsub(' {2,}','',questions)
questions
## 원래경로: viewInterviewsList > div > div > section:nth-child(9) > div > div.ctbody_col2 > div > dl > dd:nth-child(2) > span

#마지막페이지
##한페이지당 5건 밖에 보이지 않기 때문에
interviewCnt = resp %>% read_html() %>% html_node(css='#viewCompaniesMenu > ul > li.viewInterviews > a > span') %>% html_text()
interviewCnt = as.integer(interviewCnt)
pages=ceiling(interviewCnt / 5)

#함수
##개별요소들을 데이터프레임으로 변환
myfunc = function(resp){
  #회사명
  company = resp %>% read_html() %>% html_node(css='body > div.body_wrap > div.cmp_hd > div.new_top_bnr > div > div.top_bnr_wrap > div > div > div.company_info_sec > div.company_info_box > div.company_name > h1 > a') %>% html_text()

  #면접날짜
  ##면접날짜가 없는 경우가 있어 큰 틀에서 숫자를 추출
  int_date = resp %>% read_html() %>% html_nodes(css = 'div.ctbody_col2 > dl') %>% html_text()
  int_date = gsub('\n|[가-힣]','',int_date)
  int_date = str_trim(int_date)

  #면접난이도
  difficulty = resp %>% read_html() %>% html_nodes(css = 'div.ctbody_col2 > dl > dd.blo_box2 > span') %>% html_text()

  #면접질문
  questions = resp %>% read_html() %>% html_nodes(css = 'div.ctbody_col2 > div > dl > dd:nth-child(2) > span') %>% html_text()
  questions = str_trim(questions)

  #면접답변 혹은 면접느낌
  review = resp %>% read_html() %>% html_nodes(css = 'div.ctbody_col2 > div > dl > dd:nth-child(4)') %>% html_text()
  review = str_trim(review)

  #면접결과
  result = resp %>% read_html() %>% html_nodes(css = 'div.ctbody_col2 > div > div.now_box > div > dl > dd:nth-child(2)') %>% html_text()
  result = str_trim(result)

  #면접경험
  int_exp = resp %>% read_html() %>% html_nodes(css = 'div.ctbody_col2 > div > div.now_box > div > dl > dd:nth-child(4)') %>% html_text()

  #도움이 돼요
  helpful = resp %>% read_html() %>% html_nodes(css = 'div.ctbody_col2 > div > div.btn_group > a.btn_help.helpful.btnval_on > span.notranslate') %>% html_text()

  df_page = data.frame(company, int_date, difficulty, questions, review, result, int_exp, helpful)

  return(df_page)
}
df_page=myfunc(resp)
dim(df_page)

# 반복문
df_interview = data.frame()
url_interview = 'https://www.jobplanet.co.kr/companies/000000/interviews'

for(page in 1:pages){
  cat('[', page, '/', pages, '] 진행중... ',fill=TRUE)
  # 첫페이지 경우 url 그대로 반환
  ## 첫페이지는 url뒤에 페이지 번호가 없다
  ifelse(page==1,
         assign('url_page',url_interview),
         assign('url_page',paste0(url_interview,'?page=',page))
  )

  resp = GET(url=url_page, config = list(cookies = myCookies))
  status_code(x=resp)
  df_page = myfunc(resp)
  df_interview = rbind(df_interview,df_page)
  rm(resp,df_page)
}

#확인작업
dim(df_interview) #총 리뷰수와 비교
duplicated(x=df_interview$questions) %>% sum() #중복여부 확인

#csv로 저장 및 불러오기, 확인
write.csv(df_interview,'C:/Work_R/Others/interview.csv')
data=read.csv('C:/Work_R/Others/interview.csv')
View(data)

```


