import dotenv from "dotenv";
import app from './bootstrap/index.js'

dotenv.config()

const port = process.env.APP_PORT;


const startApp = () => {
  app.listen(port, () => {
    console.log(`Our app listening on port ${port}`);
  });
};

export default startApp;
