---
title: PythonAnywhere 사용한 이메일봇 만들기
tags: python
---

# PythonAnywhere 화재발생현황 저장하고 이메일로 전송

## 개요

 [국가화재정보시스템](https://nfds.go.kr/dashboard/monitor.do)이 제공하는 화재발생현황는 날짜가 바뀌면 전날 데이터를 볼 수 없음. 이에 매일 정해진 시간에 자동으로 데이터를 저장, 전송하는 웹앱을 작성함.

 크롤링 및 메일 전송 코드는 Python으로 작성함. 크롤링한 데이터는 excel로 변환해 xlsx 형태로 저장 후 메일 첨부해 전송. Python 코드상으로 gmail 로그인시 403 Forbidden 문제 발생. google 2단계인증 후 앱 비밀번호 이용. (참고 : https://support.google.com/mail/answer/14257, https://gomest.tistory.com/31)

 호스팅은 PythonAnywhere를 사용. 무료계정이 접근할 수 있는 사이트가 제한돼있어 유료 플랜($5/달)으로 업그레이드. (참고 : https://help.pythonanywhere.com/pages/403ForbiddenError/)



## 목표

매일 23:57에 [국가화재정보시스템](https://nfds.go.kr/dashboard/monitor.do)의 화재발생현황(서울, 경기)을 크롤링, 엑셀로 만든 뒤 특정 사용자에게 이메일로 전송하기



## PythonAnywhere

- Python으로 작성한 Web 프로그램을 배포해주는 무료호스팅 서비스



## 코드

### 메일전송

```python
import smtplib, ssl
from email.header import Header
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication


# SMTP認証情報
account = "sobanghz@gmail.com"
password = "salzgpbgrbrzlrsd"

# 送受信先
to_email = "dw3624@gmail.com, monica0797@naver.com"
from_email = "sobanghz@gmail.com"


# MIMEの作成
msg = MIMEMultipart()

subject = '화재발생현황'
msg["Subject"] = Header(subject, charset='utf-8')
msg["To"] = to_email
msg["From"] = from_email

message = f'{date_ymdhm} 기준 화재발생 현황입니다.'
body = MIMEText(message, _charset='utf-8')
msg.attach(body)

# 파일첨부
file = f'{date_ymdhm}.xlsx'
with open(file, 'rb') as fd:
    part = MIMEApplication(fd.read())
    part.add_header('Content-Disposition','attachment',filename=file)
    msg.attach(part)

server = smtplib.SMTP_SSL("smtp.gmail.com", 465, context=ssl.create_default_context())
server.login(account, password)
server.send_message(msg)
server.quit()
print('mail sent!')
```



### 크롤링

```python
import requests
import pandas as pd
import json


import pytz
from datetime import datetime
KST = pytz.timezone('Asia/Seoul')
date_ymdhm = datetime.now(KST).strftime('%Y-%m-%d_%H시%M분')
print(date_ymdhm)


url = 'https://nfds.go.kr/dashboard/monitorData.do'
proxyDict = {
    'http'  : "add http proxy",
    'https' : "add https proxy"
}

# 서울
payload = {'sidoCode': '11'}
res_su = requests.post(url, data=payload)
result_su = json.loads(res_su.text)

# 경기
payload = {'sidoCode': '41'}
res_gg = requests.post(url, data=payload)
result_gg = json.loads(res_gg.text)

# 서울 + 경기
df_su = pd.DataFrame(result_su['defail'])
df_gg = pd.DataFrame(result_gg['defail'])
df_sg = pd.concat([df_su, df_gg])

# 정렬
df_sg = df_sg[[
    'sidoNm', 'cntrNm', 'overDate',
    'dethNum', 'injuNum', 'expMount',
    'addr', 'progressNm', 'frfalTypeCd',
]]
df_sg.columns = [
    '지역','소방서','일시',
    '사망','부상','재산피해(천원)',
    '주소','진행','결과'
]
df_sg = df_sg.sort_values('일시', ascending=False)

# 엑셀 저장
df_sg.to_excel(f'{date_ymdhm}.xlsx', encoding='utf-8-sig', index=False)
print('excel saved!')
```



### 전체 코드

```python
import requests
import pandas as pd
import json

import smtplib, ssl
from email.header import Header
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication

import pytz
from datetime import datetime
KST = pytz.timezone('Asia/Seoul')
date_ymdhm = datetime.now(KST).strftime('%Y-%m-%d_%H시%M분')
print(date_ymdhm)

# SMTP認証情報
account = "sobanghz@gmail.com"
password = "salzgpbgrbrzlrsd"

# 送受信先
to_email = "dw3624@gmail.com, monica0797@naver.com"
from_email = "sobanghz@gmail.com"


##################### 크롤링코드 ###################################
url = 'https://nfds.go.kr/dashboard/monitorData.do'
proxyDict = {
    'http'  : "add http proxy",
    'https' : "add https proxy"
}

# 서울
payload = {'sidoCode': '11'}
res_su = requests.post(url, data=payload)
result_su = json.loads(res_su.text)

# 경기
payload = {'sidoCode': '41'}
res_gg = requests.post(url, data=payload)
result_gg = json.loads(res_gg.text)

# 서울 + 경기
df_su = pd.DataFrame(result_su['defail'])
df_gg = pd.DataFrame(result_gg['defail'])
df_sg = pd.concat([df_su, df_gg])

# 정렬
df_sg = df_sg[[
    'sidoNm', 'cntrNm', 'overDate',
    'dethNum', 'injuNum', 'expMount',
    'addr', 'progressNm', 'frfalTypeCd',
]]
df_sg.columns = [
    '지역','소방서','일시',
    '사망','부상','재산피해(천원)',
    '주소','진행','결과'
]
df_sg = df_sg.sort_values('일시', ascending=False)

# 엑셀 저장
df_sg.to_excel(f'{date_ymdhm}.xlsx', encoding='utf-8-sig', index=False)
print('excel saved!')

##################################################################

# MIMEの作成
msg = MIMEMultipart()

subject = '화재발생현황'
msg["Subject"] = Header(subject, charset='utf-8')
msg["To"] = to_email
msg["From"] = from_email

message = f'{date_ymdhm} 기준 화재발생 현황입니다.'
body = MIMEText(message, _charset='utf-8')
msg.attach(body)

# 파일첨부
file = f'{date_ymdhm}.xlsx'
with open(file, 'rb') as fd:
    part = MIMEApplication(fd.read())
    part.add_header('Content-Disposition','attachment',filename=file)
    msg.attach(part)

server = smtplib.SMTP_SSL("smtp.gmail.com", 465, context=ssl.create_default_context())
server.login(account, password)
server.send_message(msg)
server.quit()
print('mail sent!')
```

