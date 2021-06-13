# 3 INTRODUCTION TO EXPRESS

## 사전 준비
### Demon
- 저장할 때마다 실시간으로 변경사항을 적용해줌

### babel
- JS버전과 상관없이 모두 읽히도록 해주는 컴파일러

# 3장 INTRODUCTION TO EXPRESS
## 3.5 Middlewares part One
- Middleware에 대해서
  - Middleware는 request에 응답하지 않음 *이게 뭔말이지 호출해야한다는 얘기인가?*
  - request를 지속시켜주는 역할

## 3.6 Middlewares part Two
- 모든 Middleware는 반드시 req, res, next를 인자로 갖는다.
- Middleware는 Controller같은 것이다. next가 포함되어 있다는 점만 빼면 같음. 
- next는 다음 함수를 호출하는 것이라고는 하는데, 그냥 pass에 더 가까운느낌? 지나가시오..라고 하는 것 같음...

## 3.7~3.10 recaps
- Middleware : 클라이언트와 서버의 응답 사이에 존재

## 3.11 External Middlewares
- node기반 서버들은 Logger를 잘 쓰기가 굉장히 어려움
- morgan은 로깅을 도와주는 역할 / request와 response를 깔끔하게 formatting해주는 모듈
- formatting된 log를 json형식으로 dump파일에 기록해주는 모듈이 winston(이번 강좌에서는 이용하지 않음)

# 4장 Routers
## 4.2 Cleaning the Code
- 일단 써놓고 나중에 정리하자
- export default 변수
- js에서 모든 파일은 모듈, 버블과도 같다

## 4.8 URL Parameters part Two
- 정규식은 문자열로부터 특정 정보를 추출해내는 방법
- ab?c = b는 옵션 = abc, ac 가능(b가 있어도 되고 없어도 됨)
- ab+cd = b가 여러개 가능 = abc,abbc, abbbbc등 b의 갯수 노상관
- ab*cd = *에 뭐가 들어가도 괜찮음 = abcd, ab123cd, abRANDOMcd등등
- /(ab\w+)/g = ab로 시작하는 모든 단어를 찾음(w는 anyword 라는 뜻)
- /ab/g = ab와 정확하게 일치하는 단어를 찾음
- \d는 숫자 (Digit) = \d+ = 숫자로 시작하는 단어 찾기 = \\d+는 숫자만

# 5장 TEMPLATES
## 5.1 Configuring Pug
- 현재 작업 디렉토리는 node.js를 실행하는 디렉토리임
- 서버를 시작하거나 node.js를 실행하는건 package.json = package.json이 있는 곳이 현재 디렉토리
- views안에 있는 home.pug파일을 보게하려면 cwd/src/views가 되어야함

## 5.2 Partials
- 파일명은 띄어쓰기가 있으면 안됨
- 파일명은 소문자로 되어있어야함

## 5.6 Conditionals
- pug파일에서 텍스트안에 변수를 적을 때는 #{변수}
- 텍스트와 섞어쓰지 않을 때는 h1=변수 이렇게 써도 ㅇㅋ