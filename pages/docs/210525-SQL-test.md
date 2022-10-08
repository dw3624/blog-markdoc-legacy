---
title: Oracle SQL 이용해 데이터베이스 가공하기
tags: sql
---

### 1. 관리자 계정으로 oracle에 접속, 계정 : foxtrot, 패스워드: fox123 인 사용자 계정 작성

SQL command line:
```
conn system/manager
create user ojava identified by ojava123
default tablespace users
temporary tablespace temp;
```
  

### 2. 생성한 계정(foxtrot)에 자원과 접속 권한을 부여 후 foxtrot/fox123 으로 접속

SQL command line:
```
grant connect, resource to foxtrot;
conn foxtrot/fox123
```

  
### 3. 다음과 같은 속성으로 정의된 주문 테이블(s_order) 생성

|칼럼 이름|데이터 타입|제약조건|설명|
|---|---|---|---|
|ID|NUMBER(7)|PK|제품ID|
|CUSTOMER_ID|VARCHAR2(50)|NOT NULL|고객ID|
|DATE_ORDERED|DATE| |주문일자|
|TOTAL|NUMBER(11,2)| |총금액|
|PAYMENT_TYPE|VARCHAR2(6)|CHECK|지불형식(현금,카드)|
  
```sql
CREATE TABLE s_order(
id NUMBER(7) CONSTRAINT id_pk PRIMARY KEY,
customer_id VARCHAR2(50) CONSTRAINT customer_id_nn NOT NULL,
date_ordered date,
total NUMBER(11,2), 
payment_type VARCHAR2(6) CONSTRAINT pay_type_chk CHECK (payment_type IN ('현금','카드')));

COMMENT ON COLUMN s_order.id IS '제품ID';
COMMENT ON COLUMN s_order.customer_id IS '고객ID';
COMMENT ON COLUMN s_order.date_ordered IS '주문일자';
COMMENT ON COLUMN s_order.total IS '총금액';
COMMENT ON COLUMN s_order.payment_type IS '지불형식(현금,카드)';
```

  
### 4. 3.에서 생성한 s_order테이블에 3건의 데이터를 아래와 같이 INSERT

|ID|CUSTOMER_ID|DATE_ORD|TOTAL|PAYMENT_TYPE|
|---|---|---|---|---|
|100|204|18/08/07|6110000|카드|
|102|206|18/09/07|1865600|현금|
|103|206|18/10/07|1865600|현금|
  
```sql
INSERT INTO s_order VALUES(100,'204','18/08/07',6110000,'카드');
INSERT INTO s_order VALUES(102,'206','18/09/07',1865600,'현금');
INSERT INTO s_order VALUES(103,'206','18/10/07',1865600,'현금');
SELECT * FROM s_order;
```

  
### 5. s_order 테이블에 입력된 3건의 데이터에 대해 총 주문금액, 평균금액, 최대 값을 아래와 같이 출력

|총 주문금액|평균금액|최댓값|
|---|---|---|
|9841200|3280400|6110000|
    
```sql
SELECT SUM(total), AVG(total), MAX(total) FROM s_order;
```

  
### 6. s_order 테이블에서 WHERE 문을 사용해 현금으로 구매한 고객의 주문번호, 고객 ID, 총금액, 지불 형태를 주문번호 내림차순으로 출력

```sql
SELECT id, customer_id, total, payment_type
FROM s_order
WHERE payment_type = '현금'
ORDER BY id DESC;
```

  
### 7. s_order 테이블의 내용이 아래와 같을 때 103번 주문의 지불방식이 ‘카드’로 변경되도록 UPDATE 문을 작성

|ID|CUSTOMER_ID|DATE_ORD|TOTAL|PAYMENT_TYPE|ID|CUSTOMER_ID|DATE_ORD|TOTAL|PAYMENT_TYPE|
|---|---|---|---|---|---|---|---|---|---|
|100|204|18/08/07|6110000|카드|100|204|18/08/07|6110000|카드|
|102|206|18/09/07|1865600|현금|102|206|18/09/07|1865600|현금|
|103|206|18/10/07|1865600|현금|103|206|18/10/07|1865600|카드|
  
```sql
UPDATE s_order SET payment_type = '카드' WHERE id = 103;
COMMIT;
SELECT * FROM s_order;
```

  
### 8. 아래와 같은 s_order 테이블에서 206번 고객의 주문 데이터가 삭제 되도록 DELETE 문을 작성

|ID|CUSTOMER_ID|DATE_ORD|TOTAL|PAYMENT_TYPE|
|---|---|---|---|---|
|100|204|18/08/07|6110000|카드|
  
```sql
DELETE FROM s_order WHERE customer_id = 206;
SELECT * FROM s_order;
```

  
### 9. 8.에서 삭제한 206번 고객의 주문 데이터를 복원

```sql
ROLLBACK;
SELECT * FROM s_order;
```

  
### 10. s_order 테이블이 삭제 되도록 DROP 문을 작성

```sql
DROP TABLE s_order;
```
  

---

