## 3 INTRODUCTION TO EXPRESS

### 사전 준비

#### Demon

- 저장할 때마다 실시간으로 변경사항을 적용해줌

#### babel

- JS버전과 상관없이 모두 읽히도록 해주는 컴파일러

## 3장 INTRODUCTION TO EXPRESS

### 3.5 Middlewares part One

- Middleware에 대해서
  - Middleware는 request에 응답하지 않음 _이게 뭔말이지 호출해야한다는 얘기인가?_
  - request를 지속시켜주는 역할

### 3.6 Middlewares part Two

- 모든 Middleware는 반드시 req, res, next를 인자로 갖는다.
- Middleware는 Controller같은 것이다. next가 포함되어 있다는 점만 빼면 같음.
- next는 다음 함수를 호출하는 것이라고는 하는데, 그냥 pass에 더 가까운느낌? 지나가시오..라고 하는 것 같음...

### 3.7~3.10 recaps

- Middleware : 클라이언트와 서버의 응답 사이에 존재

### 3.11 External Middlewares

- node기반 서버들은 Logger를 잘 쓰기가 굉장히 어려움
- morgan은 로깅을 도와주는 역할 / request와 response를 깔끔하게 formatting해주는 모듈
- formatting된 log를 json형식으로 dump파일에 기록해주는 모듈이 winston(이번 강좌에서는 이용하지 않음)

## 4장 Routers

### 4.2 Cleaning the Code

- 일단 써놓고 나중에 정리하자
- export default 변수
- js에서 모든 파일은 모듈, 버블과도 같다

### 4.8 URL Parameters part Two

- 정규식은 문자열로부터 특정 정보를 추출해내는 방법
- ab?c = b는 옵션 = abc, ac 가능(b가 있어도 되고 없어도 됨)
- ab+cd = b가 여러개 가능 = abc,abbc, abbbbc등 b의 갯수 노상관
- ab*cd = *에 뭐가 들어가도 괜찮음 = abcd, ab123cd, abRANDOMcd등등
- /(ab\w+)/g = ab로 시작하는 모든 단어를 찾음(w는 anyword 라는 뜻)
- /ab/g = ab와 정확하게 일치하는 단어를 찾음
- \d는 숫자 (Digit) = \d+ = 숫자로 시작하는 단어 찾기 = \\d+는 숫자만

## 5장 TEMPLATES

### 5.1 Configuring Pug

- 현재 작업 디렉토리는 node.js를 실행하는 디렉토리임
- 서버를 시작하거나 node.js를 실행하는건 package.json = package.json이 있는 곳이 현재 디렉토리
- views안에 있는 home.pug파일을 보게하려면 cwd/src/views가 되어야함

### 5.2 Partials

- 파일명은 띄어쓰기가 있으면 안됨
- 파일명은 소문자로 되어있어야함

### 5.6 Conditionals

- pug파일에서 텍스트안에 변수를 적을 때는 #{변수}
- 텍스트와 섞어쓰지 않을 때는 h1=변수 이렇게 써도 ㅇㅋ

## 6장 MONGODB AND MONGOOSE

### 6.3 Edit Video part Two

- express는 form으로 보낸 데이터를 읽지 못함
- urlencoded로 해결 => from의 body를 이해함
- extended : 보기좋게 정렬해줌(기본으로 true되어있음)
- router를 사용하기 전에 app.use로 사용해야함

### 6.7 Introduction to MongoDB

- JSON document기반 데이터베이스

### 6.10 Video Model

- 스키마 Schema : 모델(테이블?)이 생긴 모양

### 6.11 Our First Query

- {} : Search Terms
  - Search Terms가 비어있으면({}) 모든 형식을 찾는다는 것을 뜻함

### 6.13 Async Await

- Async와 callback의 작동원리 차이

### 6.14 Returns and Renders

- return의 역할 : 본질적인 return의 역할보다는 function을 마무리짓는 역할로 사용되고 있음.
  - 이러한 경우 return이 없어도 정상적으로 동작하지만 실수를 방지하기 위해 return을 사용
- render한 것은 다시 render 할 수 없음
  - redirect, sendStatus, end 등등 포함(express에서 오류 발생)

### 6.15 Creating a Video part One

- Video에 붙은 \_id는 mongo가 자동으로 붙여준 것

### 6.19 Video Detail

- Mongo가 붙여준 id를 가지고 어떻게 id인지 아닌지 판별할 것인가에 대한 문제
  - 정규식으로 해결
  - Mongo DB의 id는 24자리의 16진수로 이루어져있음
  - [0-9a-f]{24} 로 해결 = 0에서 9까지, a에서 f까지 24번 맞는지 확인
- 정규식 정리
  - [MDN 공식 자료](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions)
  - [연습사이트](https://regex101.com/)

### 6.23 Middlewares

- 중요: middleware는 무조건 model이 생성되기 전에 만들어야 함
- middlware는 save되기 전에 실행되는 것
- DB 삭제하는 방법
  - Console에 mongo 입력
  - show dbs 입력
  - 해당 DB 확인, 이번의 경우 Lemtube
  - use lemtube (db의 이름)
  - db.테이블이름.remove({})

### 6.24 Statics

- findByIdAndUpdate()에서는 save훅업이 발생하지 않음

### 6.25 Delete Video

- function/화면 추가 순서
  - URL확인 후 pug 템플릿 수정
  - 라우터 수정
  - 컨트롤러 수정
- Model.findOneAndDelete() vs Model.findOneAndRemove()
  - 몽고 db는 롤백이 안되기 때문에 remove를 사용할 타당한 이유가 없는 한 delete를 사용할 것

### 6.28 Conclusions

- async&awati/regex/Mongoose

### 7.2 Creating Account part Three

- db.테이블이름.find()

### 7.15 Environment Variables

- 현재 이 프로젝트에서 앱이 구동하는 순서

  1. init.js

- import와 require의 차이 - import - require
  사용하고 싶은 모든 파일에 require를 추가해야함 = 번거로움

- 현재 발생한 에러
  - UnhandledPromiseRejectionWarning: MongoParseError: Invalid connection string
    - console.log(env.DB_URL)로는 정상적으로 출력이 됨
    - 앱 실행도 되긴 됨
    - DB_URL에 오타도 없음
