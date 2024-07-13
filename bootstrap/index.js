import express from 'express'
import bodyParser from "body-parser";
import { engine } from 'express-handlebars';
import path from "path";
import { fileURLToPath } from "url";

import loggerMiddleware from "../middlewares/loggerMiddleware.js";
import renderMiddleware from '../middlewares/renderMiddleware.js'
import error404Middleware from '../middlewares/errorHandlerMiddleware.js'
import exceptionMiddleware from '../middlewares/exceptionMiddleware.js';

import router  from "../routes/index.js";
import cookieParser from 'cookie-parser';
import session from 'express-session';
import flash from 'connect-flash'

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log('dirName: ',path.join(__dirname,'../views'))

app.use(express.static(path.join(__dirname, "../public")));

app.use(bodyParser.urlencoded({ urlencoded: false }));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(session({
  secret: 'jaiShriKubera',
  resave:true,
  saveUninitialized:true,
  cookie:{maxAge:120000},
  unset:'destroy'
}))

app.use(flash())

app.use(loggerMiddleware)
app.use(renderMiddleware)

app.engine('handlebars',engine())
app.set('view engine','handlebars')
app.set('views', path.join(__dirname,'../views'));

app.use(router)

app.use(exceptionMiddleware)

app.use(error404Middleware)

export default app