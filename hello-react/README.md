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
