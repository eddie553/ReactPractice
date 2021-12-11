# hello-react 디렉토리는 CH.2부터 CH.7까지의 실습 파일입니다.

# CH.2 JSX

## 2.1 import구문으로 모듈 불러오기

import구문으로 모듈을 불러와서 사용할 수 있음
브라우저에서 모듈을 불러와 사용하기 위해서 번들러(파일을 묶듯이 연결하는 역할)로 웹팩을 주로 사용
웹팩의 로더는 파일을 불러오는 역할 (css-loader, babel-loader 등..)

## 2.2 JSX

> 자바스크립트 확장 문법

- 보기 쉽고 익숙하다
- 높은 활용도 (HTML 태그 사용 가능, 컴포넌트도 태그처럼 작성 가능)

## 2.4 JSX 문법

1. 여러 개의 요소는 하나의 부모 요소로 감싸주어야한다. (<div>, <Fragment>,<>)
2. JSX 내부 자바스크립트 표현식은 {} 로 감싸준다.
3. JSX 내부 자바스크립트 표현식에서 if 문 사용 불가, 삼항 연산자를 사용한다.
4. 조건부 렌더링은 && 연산자를 이용
5. undefined 반환하여 렌더링하지 않는다. (return 부분에서 OR 연산자를 사용하여 오류를 방지하자)
6. DOM 요소에 스타일을 적용할 때 객체 형태로 넣어준다.
7. class 대신 className으로 클래스를 지정해준다.
8. 태그는 꼭 닫는다. (ps. self-closing 태그 ex. <input/>)
9. JSX 내부에서 주석은 {/\* \*/} 형식으로 작성한다.

## 2.5 ESLint와 Prettier (VSCode extension)

- ESLint : 문법 검사 도구
- Prettier : 코드 스타일 자동 정리 도구

<hr />

# CH.3 컴포넌트

## 3.1 컴포넌트의 종류

1. 클래스형 컴포넌트

- state 기능 및 라이프사이클 기능을 사용할 수 있음
- render 함수가 꼭 있어야함

2. 함수형 컴포넌트

- 선언이 쉽고, 메모리 자원을 클래스형 컴포넌트보다 덜 사용
- 파일 크기가 더 작음
- state, 라이프사이클 API의 사용이 불가능 -> Hooks로 해결

## 3.2 컴포넌트 생성

새로운 MyComponent.js 파일 생성 후, 함수형 컴포넌트로 작성
ps. 화살표 함수 문법을 사용

#### 모듈 내보내기

<pre><code>export default MyComponent;</code></pre>

#### 모듈 불러오기

<pre><code>import MyComponent from './MyComponent';</code></pre>

## 3.3 props

> 부모 컴포넌트가 설정한 값 - 자식 컴포넌트는 부모 컴포넌트에서 props를 받아와 사용 가능하다.

1.  (함수형 컴포넌트)의 props

    - 디폴트 props 설정하기
    <pre><code>MyComponent.defaultProps = { key : default }</code></pre>

    - 3.3.6 propTypes를 통한 props 검증

    - props의 props 타입을 지정해줄 수 있음, 다른 형태로 전달 시 오류 발생
    <pre><code>MyComponent.propTypes = { key: PropTypes.datatype }</code></pre>

    - isRequired를 이용하여 필수 값 지정
    <pre><code>MyComponent.propTypes = { key: PropTypes.datatype.isRequired }</code></pre>

2.  (클래스형 컴포넌트)의 props
    render함수에서 비구조화할당을 이용하여 this.props를 조회한다.

#### 3.3.4 children

> 컴포넌트 태그 사이의 내용을 보여주는 props

## 3.4 state

> state : 컴포넌트 내부에서 바뀔 수 있는 값

1.  (클래스형 컴포넌트)의 state

    - construtctor 메서드를 이용하여 state 초깃값 설정.
    - constructor 메서드를 선언하지 않고, 객체 선언 형태로도 초깃값 설정이 가능하다.
    - render 함수에서 this.state로 현재 state 조회.
    - setState 함수의 두 번째 파라미터로 특정 작업 실행이 가능하다.

2.  (함수형 컴포넌트)의 state
    - useState를 사용 (CH.8에 상세 설명)

# CH.4 이벤트 핸들링

## 4.1 이벤트 사용 주의사항

html 이벤트와 인터페이스가 동일하다.

1. 이벤트 이름은 카멜 표기법으로
2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 객체를 전달한다.
3. DOM 요소에만 이벤트를 설정할 수 있다.

## 4.2 예제로 이벤트 핸들링 익히기

- onChange 이벤트 핸들링
  - <input/> 태그에 onChnage 이벤트를 설정한다.
  - 비동기적 이벤트 객체 참조는 e.target.value를 이용한다.
  - this.setState로 message 값을 변경 시 마다 주고, value에 값을 객체로 전달한다.
- 임의 메서드 만들기
  - onChange, onClick에 전달할 함수를 따로 빼내 컴포넌트 임의 메서드를 만들기
  - 생성자 메서드 : 미리 함수 선언 시 bind 필수
  - 화살표 문법으로 간단하게 작성 가능
- input 여러 개 다루기
  - event 객체를 활용 [e.tartget.name]
- onKeyPress 이벤트 핸들링
  - 엔터를 눌렀을 때 handleClick 메서드를 호출하기

## 4.3 함수형 컴포넌트로 구현하기

- e.target.name을 활용하지 않고 onChange 관련 함수 두 개를 따로 만들어줌.

# CH.5 ref.DOM에 이름 달기

## 5.1 ref

DOM을 꼭 직접적으로 건드려야 할 때 ref를 사용한다. + 특정 input에 포커스 주기 + 스크롤 박스 조작하기 + Canvas 요소에 그림 그리기

## 5.2 ref 사용

- 콜백 함수를 통한 ref 설정
  ref라는 콜백 함수를 props로 전달해준다.
  콜백 함수는 ref 값을 파라미터로 전달받는다.
  함수 내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정해준다.

* createRef를 통한 설정

## 5.3 컴포넌트에 ref 달기

<pre><code><MyComponet ref={(ref)=>{this.ref}}/></code></pre>

컴포넌트에 ref를 달고, 내부메서드를 사용.

# CH.6 컴포넌트 반복

## 6.1 자바스크립트 배열의 map() 함수

map : 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 그 결과로 새로운 배열을 생성하는 함수

## 6.3 key

컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용.
key 값을 설정할 때는 map 함수의 인자로 전달되는 함수 내부에서 컴포넌트 props를 설정하듯이 설정한다.
key 값은 유일.

## 6.4 응용 실습하기

1. 초기 상태 설정하기
   key 값을 index 대신 name.id 값으로 지정
2. 데이터 추가 기능 구현하기
   input에 onChange 이벤트 설정.
   button에 onClick 이벤트로 새로운 데이터의 객체(배열 요소) 생성 및, nextId+1 해주기.
3. 데이터 제거 기능 구현하기
   onDoubleClick 이벤트로 onRemove 함수 전달.
   filter 함수로 더블클릭한 name.id에 해당하지 않는 객체로 이루어진 배열을 반환하도록 한다.

# CH.7 컴포넌트의 라이프사이클 메서드

- 컴포넌트의 업데이트
  - props가 바뀔 때
  - state가 바뀔 때
  - 부모 컴포넌트가 리렌더링될 때
  - this.forceUpdate로 강제로 렌더링을 트리거할 때

## 업데이트할 때 호출하는 메서드

1. 업데이트를 발생시키는 요인
2. getDerivedStateFromProps
   마운트 과정에서도 호출되며, 업데이트가 시작되기 전에도 호출됨.
   props의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용.
3. shouldComponentUpdate
   컴포넌트가 리렌더링을 해야 할지 결정하는 메서드. (true/false를 반환)
4. true 반환 시 render 호출, false 반환 시 여기서 작업 취소
5. render
   컴포넌트를 리렌더링함.
   this.forceUpdate() 호출 시 shouldComponentUpdate 시 바로 render된다.
6. getSnapshotBeforUpdate
   컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출.
   메서드에서 반환하는 값은 componentDidUpdate의 세 번째 파라미터인 snapshot 값으로 전달받을 수 있다.
7. 웹브라우저상의 실제 DOM 변환
8. componentDidUpdate
   컴포넌트 업데이트 작업이 끝난 후 호출하는 메서드

- componentdidMount
  첫 렌더링을 마친 후 실행.
  다른 자바스크립트 라이브러리, 프레임워크의 함수를 호출하거나 비동기 작업을 처리

- componentWillUnmont
  컴포넌트를 DOM에서 제거할 때 실행.

- componentDidCatch
  렌더링 도중에 에러가 발생했을 때 오류 UI를 보여줌.
