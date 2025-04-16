import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(
    cors({
      origin: "https://d-04-450714.uc.r.appspot.com/", 
      methods: ["GET", "POST", "PATCH", "DELETE"],
      credentials: true,
    })
  );
app.use(express.json());
app.use(UserRoute);
// ini ni 
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});


app.listen(5000, ()=> console.log('Server up and running....'));
