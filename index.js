import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(
    cors({
      origin: "http://localhost:3000", 
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
