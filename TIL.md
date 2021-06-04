# 3 INTRODUCTION TO EXPRESS

## 사전 준비
### Demon
- 저장할 때마다 실시간으로 변경사항을 적용해줌

### babel
- JS버전과 상관없이 모두 읽히도록 해주는 컴파일러

## 3.5 Middlewares part One
- Middleware에 대해서
  - Middleware는 request에 응답하지 않음
  - request를 지속시켜주는 역할

## 3.6 Middlewares part Two
- 모든 Middleware는 반드시 req, res, next를 인자로 갖는다.
- Middleware는 Controller같은 것이다. next가 포함되어 있다는 점만 빼면 같음. 
- next는 다음 함수를 호출하는 것이라고는 하는데, 그냥 pass에 더 가까운느낌? 지나가시오..라고 하는 것 같음...