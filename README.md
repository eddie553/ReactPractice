# hooks-tutorial 디렉토리는 CH.8의 실습 예제입니다.

# CH.8 Hooks

## 8.1 useState

예시코드

<pre><code>const [value, setValue] = useState(0); </code></pre>

함수형 컴포넌트에서 state를 관리할 수 있도록 하는 hook이다.
useState 함수의 파라미터에는 상태의 기본값(초기값)을 받으며 useState는 관리할 state인 value와 state를 업데이트 할 수 있는 함수 setValue를 반환한다.
setValue를 호출할 때마다 리렌더링된다.

## 8.2 useEffect

<pre><code> useEffect(()=>function(){}, [] ); </code></pre>

컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 hook이다.

- 마운트될 때만 실행 : 두 번째 파라미터로 빈 배열을 넣어준다.
- 특정 값이 업데이트 될 때만 : 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어준다.
- 뒷정리하기 : 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶을 때

## 8.3 useReducer

예시코드

<pre><code>function reducer(state,action){function(){}} </code></pre>
<pre><code> const [state, dispatch] = useReduce(reducer, {기본값});  </code></pre>

useState보다 더 다양한 상태를 다른 값으로 업데이트해주고 싶을 때 사용하는 hook.
현재 상태, 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환하는 함수.
불변성을 지켜주어야함.

## useMemo

예시코드

<pre><code>useMemo(()=>fucntion(),[특정값]) </code></pre>

함수형 컴포넌트 내부에서 발생하는 연산 최적화.
특정값이 바뀔 때만 실행된다.

## 8.5 useCallback

예시코드

<pre><code>useCallback(e=>{setState(e.target.value)},[]); </code></pre>

함수형 컴포넌트 내부에서 발생하는 연산을 최적화해준다.
useCallback의 첫 번째 파라미터에는 생성하고 싶은 함수가 들어가고, 두 번째 파라미터에는 배열의 요소가 바뀔 때마다 함수가 재생성되고자하는 객체를 넣는다.
빈 배열을 넣게 된다면 컴포넌트가 처음 렌더링될 때만 함수가 생성되고 그 함수를 계속 재사용하게 된다.

## 8.6 useRef

<pre><code>const id = useRef(null); </code></pre>

DOM을 직접 선택하고 싶을 때 사용하는 hook이다.
useRef를 이용하여 만든 객체 안의 current가 실제 엘리먼트를 가르키게 된다.
파라미터 안에는 초기값을 넣어준다.
컴포넌트 로컬 변수(렌더링과 상관없이 바뀔 수 있는 값)를 사용해야할 때도 사용한다.
