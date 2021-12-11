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
  checkObjectId 함수(src/api/posts/posts.ctrl.js)
  미들웨어 추가 - checkObjectId 함수(src/api/posts/index.js)
- Request Body 검증
  write, update API에서 전달받은 요청 내용을 검증이 필요.
  Joi 라이브러리를 이용
  - write 검증: schema에서 .required()가 있으면 필수 항목 (src/api/posts/posts.ctrl.js)
  - update 검증 : .required()가 없음 (src/api/posts/posts.ctrl.js)

## 22.10 페이지네이션 구현

- 포스트 역순으로 불러오기 - (src/api/posts/posts.ctrl.js) - list API에서 exec()전 sort()구문
- 보이는 개수 제한- (src/api/posts/posts.ctrl.js) - list API에서 exec()전 limit(개수)
- 페이지 기능 구현 (src/api/posts/posts.ctrl.js) - list API 수정
- 마지막 페이지 번호 알려주기 - (src/api/posts/posts.ctrl.js) - list API 수정
- 내용 길이 제한 - (src/api/posts/posts.ctrl.js) - list API 수정

## 23.1 JWT의 이해

- JWT

  - JSON Web Token, JSON으로 이루어져 있는 토큰.

  * 두 개체가 서로 안전하게 정보를 주고 받을 수 있도록 웹 표준으로 정의된 기술.

- 토큰 기반 인증 시스템
  토큰 : 로그인 이후 서버가 만들어 주는 문자열. (로그인 정보, 해당 정보가 서버에서 발급되었음을 증명하는 서명이 들어있음)
  _ 무결성(정보가 변경되거나 위조되지 않았음) 보장
  _ API 요청 시 발급받은 토큰과 함께 요청.
  _ 서버는 토큰을 발급하고 토큰의 유효성 검사 후 작업 처리
  _ 사용자가 토큰을 가지고 있어 서버의 확장성이 높다.

## JWT를 통한 회원 인증 시스템 구현하기

1. User 스키마 /모델 만들기

   - 사용자의 정보를 MongoDB에 담기. bcrypt 단방향 해싱 함수 라이브러리 사용
   - 스키마 작성 (src/models/user.js)
   - 인스턴스 메서드 : setPassword(hashedPassword 설정), checkPassword(비밀번호 일치 검증) - (src/models/user.js)
   - 스태틱 메서드 findByUsername(username으로 데이터 찾기) -(src/models/user.js)

2. 회원 인증 API 만들기

   - 회원 인증 API register, login, check, logout 만들기 -(src/api/auth/auth.ctrl.js) -
   - auth 라우터 생성 후 api 라우터에 적용- (src/api/auth/index.js)

3. 토큰 발급 및 검증하기

   - 비밀키 설정하기 - jsonwebtoken 모듈 이용
   - generateToken 인스턴스 메서드 : 토큰 발급하기-(src/models/user.js) -
   - 토큰을 확인 후 검증하는 미들웨어 - app에 router 미들웨어 적용 전.-(src/lib/jwtMiddleware.js) -
   - 로그인 확인하기 check 함수 -(src/api/auth/auth.ctrl.js)
   - 토큰 재발급하기 -(src/lib/jwtMiddleware.js)

4. posts API에 회원 인증 시스템 도입하기 : 로그인해야만 작성, 삭제와 수정은 작성자만

   - 스키마 수정하기 (id, username)
   - 로그인했을 때만 API 사용할 수 있게 하기 : checkLoggedIn 미들웨어 (src/lib/checkLoggedIn.js)
   - 포스트 작성 시 사용자 정보 넣기 : write 함수 수정 user: ctx.state.user (src/api/posts/posts.ctrl.js)
   - 포스트 수정 및 삭제 시 권한 확인하기 : getPostById - 미들웨어에서 id로 포스트 찾은 후 ctx.state 에 담아주기 (src/api/posts/posts.ctrl.js)
   - 로그인 중인 사용자가 작성한 포스트인지 확인 -checkOwnPost (src/api/posts/posts.ctrl.js)
   - 미들웨어 등록

5. username/tags로 포스트 필터링하기
   - tag, username을 ctx.query에서 비구조화할당하여 값이 유효하면 넣는다. -(src/api/posts/posts.ctrl.js) list 함수 수정

## CH.24 프런트엔드 프로젝트 : 시작 및 회원 인증 구현

## 24.1 라우터 적용

- LoginPage.js - 로그인
- RegisterPage.sj - 회원가입
- WritePage.js - 글쓰기
- PostPage.js - 포스트 읽기
- PostListPage.js - 포스트 목록

## 24.1 리덕스 적용(리덕스 스토어 생성, 적용만)

## 24.2 회원가입과 로그인 구현

1. UI
   - AuthTemplate.js : children으로 받아온 내용만 보여주는 역할.
   - AuthForm.js : 회원가입 또는 로그인 폼을 보여줌
2. 리덕스로 폼 상태 관리하기
   - 회원가입과 로그인 폼의 상태 관리 - (modules/auth.js)
   - 컨테이너 컴포넌트 : useDispatch, useSelector 함수를 사용하여 컴포넌트와 리덕스를 연경시킨다. - (/containers/auth)
3. API 연동하기
   - axios 사용
4. 회원가입 구현
5. 로그인 구현
6. 회원 인증 에러 처리하기
7. 로그인 상태 보여주고 유지하기 - 로그인 검증 실패시 정보 초기화
8. 로그아웃 기능 구현

## CH.25 프런트엔드 프로젝트 : 글쓰기 기능 구현하기

1. UI 구현
   - quill 라이브러리 사용
2. 에디터 하단 UI 구현
3. 리덕스로 글쓰기 상태 관리하기

   - write 리덕스 모듈 작성하기 (modules/write.js) 후
   - EditorContainer : title 값과 body값을 리덕스 스토어에서 불러와 Editor 컴포넌트에 전달 -(containers/write/EditorContainer.js)
   - TagBoxContainer : TagBox를 위한 컨테이너 - (containers/write/TabBoxContainer.js)
   - TagBox 컴포넌트: 전달받은 props인 onChnageTags,tags 를 사용해 이벤트 설정 -(components/write/TagBox.js)

4. API 연동하기

   - 글쓰기 API 연동하기 - 포스트에 관련된 API를 요청하기 -(lib/api/posts.js)
   - posts.js에 있는 함수 호출하는 리덕스 액션과 사가 - (modules/write.js )
   - 포스트 등록 버튼을 누르면 현재 리덕스 스토어 안에 들어 있는 값을 사용하여 새 포스트 작성, 취소 버튼 : 뒤로가기 구현 - (containers/write/WriteActionButtonsContainer.js)

## CH.26 프런트엔드 프로젝트 : 포스트 읽기 페이지 구현하기

1. 포스트 읽기 UI 준비하기
2. 포스트 읽기 API 연동하기
3. 포스트 목록 UI 준비하기
4. 포스트 목록 API 연동하기
   ----- 위 과정은 CH.25 와 유사함----
5. HTML 필터링하기

   - sanitize-html 라이브러리 이용
   - 길이 제한하기 - list 함수 수정 (src/api/posts/posts.ctrl.js)
   - sanitizeOptions 객체로 HTML 필터링할 때 허용할 태그들을 설정 가능. -> write 함수, update 함수 수정 (src/api/posts/posts.ctrl.js)

6. 페이지네이션 구현하기
   - 액션 안에 meta 값을 response로 넣어주어 HTTP 헤더 및 상태 코드 조회하기 - (lib/createRequestSaga.js)
   - lastPage 리덕스 스토어에 저장하기 - (modules/posts.js)
   - 페이지네이션 구현하기 / 페이지에 따라 버튼 활성화, 다음 페이지 이동 경로 지정 - (components/posts/Pagination.js)
   - 비활성화 버튼 컴포넌트 스타일 지정 후 페이지네이션 컨테이너 수정 후 렌더링

## CH.27 프런트엔드 프로젝트 : 수정/삭제 기능 구현 및 마무리

1. 포스트 수정 기능 구현하기
   - PostActionButtons 컴포넌트 : 포스트 작성자에게만 수정, 삭제 버튼 렌더링하기 -(components/post/PostActionButtons.js)
   - actionButtons를 props로 받아오기 - (components/post/PostViewer.js)
   - 컨테이너에서 PostActionButtons 받아와 렌더링하기
   - 수정 버튼 클릭 시 글쓰기 페이지로 이동하기 - 현재보고있는 포스트 정보를 write 모듈에서 관리하는 상태에 넣는 액션 만들기 -(modules/write.js)
   - 컨테이너 수정 PostActionButtons 조건부 렌더링 설정하기
   - PostActionButtons 컴포넌트에 onEdit 이벤트 전달해주기
   - write 상태에 originalPostId 주어졌을 때, 수정 API 사용 기능 - write 리덕스 모듈에서 액션과 사가 생성
   - write 버튼 컴포넌트 write.originalPostId존재하면 updatePost 액션 생성 함수를 사용 - (containers/write/WriteActionButtonsContainer.js)
2. 포스트 삭제 기능 구현하기
   - AskModal 컴포넌트 생성 (확인창) -(components/common/AskModal.js),(components/post/AskRemoveModal.js)
   - PostActionButtons 에서 모달 사용하기 - 리덕스 액션과 사가 생략하고 바로 API 사용 - removePost 함수를 구현한뒤(lib/api/posts.js) 사용 (containers/post/PostViewerContainer.js)
3. react-helmet-async로 meta 태그 설정하기

   - react-helmet-async 라이브러리 사용

4. 프로젝트 마무리하기
   - koa-static으로 정적 파일 제공하기
