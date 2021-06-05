import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const home = (req, res) => {
  return res.send("hello");
};

const login = (req, res)  => {
  return res.send("login");
};

 // 나는 Middleware를 쓸 것이다 & 미들웨어 함수에 있는 내용을 먼저 읽어라
 // Middlewares는 컨트롤러의 역할
app.use(logger);
app.get("/", home);
app.get("/login", login)

const handleListening = () => console.log(`Server Listening on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening)