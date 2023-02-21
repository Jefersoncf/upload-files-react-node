import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import dotenv from "dotenv";
import ProductRouter from "./routes/product.route.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRouter);

// const errorHandler = (req, res, next) => {
//   res.status(400); //bad request

//   if (error instanceof ErrorRequestHandler) {
//     res.json({ error: error.code });
//   } else {
//     console.log(error);
//     res.json({ error: "Ocorreu algum erro." });
//   }
// };
// app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("listening on port" + process.env.PORT);
});
