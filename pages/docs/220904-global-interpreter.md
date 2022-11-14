---
title: Global Interpreter
date: '2022-09-04'
tags: python
---


## Global Interpreter

### Interpreter

Python으로 작성된 코드를 한 줄씩 읽으면서 실행하는 프로그램

> 현재 CPython이 표준 구현체로 받아들여지고 있음
>
> CPython : C언어로 구현한 Python interpreter

### Global Interpreter Lock

Python 객체들에 대한 접근 보호하는 일종의 Mutex, 여러 Thread가 Python 코드를 동시에 실행하지 못하도록 함

![Development_Python_GIL_001](2022-07-10-기술면접.assets/img-16581458542732.png)

※ 멀티 Thread로 구현할 경우 GIL을 바꾸는 Thread Context Switch 과정에 별도 비용이 발생, 오히려 시간이 오래 걸리는 문제 발생
