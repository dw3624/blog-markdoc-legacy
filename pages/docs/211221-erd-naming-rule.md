---
title: DB설계 및 SQL작성 - 물리명 vs 논리명
tags: sql
---

### Physical Name(물리명) vs Logical Name(논리명)

#### Physical Name(물리명)

- CREATE TABLE에 지정하는 테이블 이름이나 열 이름
- 길이제한, 공백문자 사용불가 등의 제약 존재
- 알파벳 사용

#### Logical Name(논리명)

- 설계상의 이름
- 물리면 만으로는 의미 전달 어려운 경우 있으므로 논리명 필요
- 한글 사용 가능



### 자료형

- INT : 정수 숫자형
- VARCHAR(45) : max length 지정, 길지 않은 문자열
- TEXT : 긴 문자열
- DATETIME : 날짜 및 시간
- DECIMAL(n,0) : 소수점 n째 자리까지 표기
- TINYINT : Boolean 필드인 경우 지정하는 경우 많음



### CHAR vs VARCHAR vs VARCHAR2

- CHAR : 고정된 길이를 지정, 해당 길이보다 짧게 입력된 경우 남은 부분을 공백으로 처리
- VARCHAR, VARCHAR2 : 가변된 길이로 문자열 저장
- VARCHAR vs VARCHAR2 : 차이 없음



---

