---
title: React Lifecycle
tags: React
---

# React Lifecycle
- 컴퍼넌트 생성부터 소멸까지 발생하는 일련의 event 흐름
- 크게 세 가지로 분류됨
  - Mounting : 컴퍼넌트 생성
  - Update : 컴퍼넌트 갱신
  - UnMount : 컴퍼넌트 정지

![react-diagram1](./2022-09-07-React-lifecycle/react-diagram1.png)
![react-diagram2](./2022-09-07-React-lifecycle/react-diagram2.png)
## Mount
### 실행순서

|Hook|Trigger|역할|
|--|--|--|
|constructor|컴퍼넌트 작성|1.state 초기화 <br> 2.이벤트핸들러를 인스턴스와 바인딩|
|render|랜더|UI랜더링|
|componentDidMount|컴퍼넌트 마운트 후|1.네트워크요청 송신 <br> 2. DOM 조작|

※ render 내부에 `setState()` 사용하면 무한루프 돼버림

## Update
### 실행순서

|Hook|Trigger|역할|
|--|--|--|
|render|랜더|UI 랜더링 <br> (마운트단계 render)|
|componentDidUpdate|1. setState() <br> 2. forceUpdate() <br> 3.New Props|1. 네트워크 요청 송신 <br> 2. DOM 조작 |

※ componentDidUpdate에서 `setState()` 설정은 무한루프 피하기 위해 if문에 포함해야

### 사례
```javascript
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state {
            count: 0
        }
    }
    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <Counter count={this.state.count} />
                <button onClick={this.handleClick}> Click </button>
            </div>
        )
    }
}

class Counter extends React.Component {
    render() {
        return <h1 id="content"> Click count: {this.props.count}</h1>
    }

    //아래는 잘못된 사례: 무한루프
    /*
    componentDidUpdate() {
        this.setState({})
    }
    */

    //올바른 사례: if문 내부에 포함
    componentDidUpdate(prevProps) {
        if (prevProps.count !== this.props.count) {
            this.setState({})
        }
    }
}
```

## UnMount
### 실행순서
|Hook|Trigger|역할|
|--|--|--|
|componentWillUnMount|컴퍼넌트가 언마운트되고 파기되기 직전|컴퍼넌트 언마운트|

componentDidMount로 작성한 컴퍼넌트를 파기할 때 componentWillUnMount 호출

### 사례
```javascript
class Counter extends React.Component {
    //set Timer
    componentDidMount() {
        this.timerId = setInterval(() => {
            console.log('timer')
        }, 500)
    }

    render() {
        return <h1 id="content"> Click count: {this.props.count}</h1>
    }

    //Timer Unmount
    componentWillUnmount() {
        clearInterval(this.timerId)
    }

}
```
> `clearInterval()` : 기존에 `setInterval()`로 설정된 반복 액션을 캔슬

## 출처
- [React 공식문서](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [React lifecycle ライフサイクル](https://qiita.com/houka/items/7d9fa9f3613bc35731e9)