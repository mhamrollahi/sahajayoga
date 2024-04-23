import express from 'express'
import bodyParser from "body-parser";
import { engine } from 'express-handlebars';
import path from "path";
import { fileURLToPath } from "url";
import loggerMiddleware from "../middleware.js";
import router  from "../routes/index.js";

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log('dirName: ',path.join(__dirname,'../views'))

app.use(express.static(path.join(__dirname, "../public")));

app.use(bodyParser.urlencoded({ urlencoded: false }));
app.use(bodyParser.json());
app.use(loggerMiddleware)

app.engine('handlebars',engine())
app.set('view engine','handlebars')
app.set('views', path.join(__dirname,'../views'));

app.use(router)


export default app