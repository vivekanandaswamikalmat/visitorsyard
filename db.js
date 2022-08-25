import mysql from 'mysql'
import 'dotenv/config'

const conn = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"Vk2001$$",
    database:'pub'
});

export default conn;