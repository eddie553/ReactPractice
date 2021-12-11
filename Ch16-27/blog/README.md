# blog 디렉토리는 CH21~ CH27의 코드 실습입니다.

# CH21 ~ CH27 블로그 프로젝트

## CH21.1 백엔드 프로그래밍

- Node.js
  :서버에서 자바스크립트를 사용할 수 있는 런타임

- Koa
  :웹 프레임워크, 미들웨어 기능만 갖추고 있음. 가벼움. aysnc/await 문법 지원.

  1. 서버 띄우기 (index.js)
     app.use 함수는 미들웨어 함수를 애플리케이션에 등록함.
  2. 미들웨어 : 배열로 구성
     - ctx: 웹 요청과 응답에 관한 정보를 가지고 있는 첫 번째 파라미터
     - next : 다음 미들웨어를 호출하는 함수 두 번째 파라미터. Promise를 반환하고 Promise는 다음에 처리해야 할 미들웨어가 끝나야 완료됨.
     - authorized=1 쿼리 파라미터가 포함되면 이후 미들웨어를 처리해주고, 없으면 처리 X
     - async/await 사용 가능

- koa-router 사용하기
  다른 주소로 요청이 들어올 경우 다른 작업을 처리할 수 있도록 koa-router 모듈을 사용.

  - router.get 첫 번째 파라미터에는 라우트의 경로.
  - router.get 두 번째 파라미터에는 미들웨어 함수.

  - URL 쿼리 : ctx.query에서 조회
  - 파라미터 : ctx.params에서 조회

- REST API
  REST API : 클라이언트가 서버에 자신이 데이터를 조회, 생성, 삭제, 업데이트하겠다고 요청하면 서버는 필요한 로직에 따라 데이터 베이스에 접근하여 작업을 처리한다.

  - HTTP 메서드 : GET, POST, DELETE, PUT, PATCH

- api 라우트 내부에 posts 라우트 만들기 (21.5.5)
- 컨트롤러 파일 작성
  - API 기능을 본격적으로 구현하기 전에 koa-bodyparser 미들웨어를 적용해야한다.
  - (index.js) POST/PUt/PATCH 메서드의 Request Body에 JSON형식으로 데이터를 넣어 주면, 이를 파싱에서 서버에서 사용할 수 있게 해줌.
  - (post.ctrl.js) : 포스트 작성, 포스트 목록 조회, 특정 포스트 조회, 특정 포스트 제거, 포스트 수정(교체), 포스트 수정(특정 필드 변경)과 같은 컨트롤러 함수들을 만들어준다. -> 후에 라우트에 연결

## 22.1 MongoDB

### MongoDB:

    문서 지향적 NoSQL 데이터 베이스. 유동적인 스키마.
    등록해야 할 데이터 형식이 바뀌어도 기존 데이터까지 수정할 필요X
    구조 : 데이터베이스에는 여러개의 컬렉션, 컬렉션 내부에는 문서, 데이터베이스는 여러 개 가능.

- mongoose : Node.js 환경에서 사용하는 MongoDB ODM 라이브러리. 데이터 문서들을 자바스크립트 객체처럼 사용할 수 있게 해줌. - 서버와 데이터 연결

## 22.5 데이터베이스의 스키마와 모델

- 스키마 : 문서 내부의 각 필드가 어떤 형식으로 되어 있는지 정의하는 객체
- 모델 : 스키마를 사용하여 만드는 인스턴스

1. 스키마 생성
2. 모델 생성

## 22.7 데이터 생성과 조회

1. 블로그 API 작성하기 (src/api/posts/posts.ctrl.js) - write 함수
2. 데이터 조회 (src/api/posts/posts.ctrl.js) - list 함수
3. 특정 포스트 조회 (src/api/posts/posts.ctrl.js) - read 함수

## 22.8 데이터 삭제와 수정

(src/api/posts/posts.ctrl.js) - remove 함수, update 함수

## 22.9 ObjectId 검증

- ObjectId 검증
  read, remove, update API 에 대하여 ObjectId 검증이 필요.
  미들웨어 만들어 코드 중복을 피하자
  (src/api/posts/posts.ctrl.js) - checkObjectId 함수
  (src/api/posts/index.js) - 미들웨어 추가

- Request Body 검증
  write, update API에서 전달받은 요청 내용을 검증이 필요.
  Joi 라이브러리를 이용
  (src/api/posts/posts.ctrl.js) - write 검증: schema에서 .required()가 있으면 필수 항목
  (src/api/posts/posts.ctrl.js) - update 검증 : .required()가 없음

## 22.10 페이지네이션 구현

- 포스트 역순으로 불러오기 - (src/api/posts/posts.ctrl.js) - list API에서 exec()전 sort()구문
- 보이는 개수 제한- (src/api/posts/posts.ctrl.js) - list API에서 exec()전 limit(개수)
- 페이지 기능 구현 (src/api/posts/posts.ctrl.js) - list API 수정
- 마지막 페이지 번호 알려주기 - (src/api/posts/posts.ctrl.js) - list API 수정
- 내용 길이 제한 - (src/api/posts/posts.ctrl.js) - list API 수정

## blog-frontend
