import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User");

userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("Watch Video");

videoRouter.get("/watch", handleWatchVideo)

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);




 // 나는 Middleware를 쓸 것이다 & 미들웨어 함수에 있는 내용을 먼저 읽어라
 // Middlewares는 컨트롤러의 역할


const handleListening = () => console.log(`Server Listening on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening)