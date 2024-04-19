import mysql from "mysql2";
import dotenv from 'dotenv';
dotenv.config()

console.log('in dbConfig ...',process.env.MYSQL_HOST)

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
});

// export default {
//   database: {
//     mysql: {
//       host: process.env.MYSQL_HOST,
//       port: process.env.MYSQL_PORT,
//       user: process.env.MYSQL_USER,
//       password: process.env.MYSQL_PASSWORD,
//     },
//   },
// };

export default connection.promise()
