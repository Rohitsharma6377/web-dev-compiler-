import * as express from 'express';
import * as cors  from 'cors';
import { config } from "dotenv";
 const app = express();
 app.use(express.json());
 app.use(cors());
 config();
app.listen(4000, ()=>{
    console.log(process.env.TEST)
    console.log("http://localhost:4000")
});