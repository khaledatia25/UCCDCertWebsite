const mysql = require('mysql');
const jwt = require('jsonwebtoken');
//create connection
const server = {
    host: 'database-1.cwzkcmgbgqw7.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: '3U59Q{Kn+tll',
    database: "uccd"
};
const localhost = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: "uccd"
}
const db = mysql.createConnection(server);

// connect to mySql
db.connect( async(err)=> {
    if(err)
        throw err;
    console.log('MySQL Connected');    
});

const createDB = () => {
    let sql = 'CREATE DATABASE uccd';
    db.query(sql, (err) => {
        if(err)throw err;
    });
}
const createAdminTable = () => {
    const sql = 'CREATE TABLE admin (id int AUTO_INCREMENT, username varchar(255) NOT NULL, password varchar(16) NOT NULL, PRIMARY KEY(id))'
    db.query(sql, (err) => {
        if(err)throw err;
    });
}

const addAdmin = () => {
    const admin = {
        id: 1,
        username: "uccdadmin@uccd.com",
        password: "@@uccdcertadmin"
    }
    const sql = "INSERT INTO admin SET ?";
    const query = db.query(sql, admin, (err) => {
        if(err)throw err;
    });
}

const createUserTable = () => {
    const sql = "CREATE TABLE user ( id varchar(255) NOT NULL, nid varchar(30) NOT NULL, name varchar(30) NOT NULL, program varchar(20) NOT NULL, description varchar(30) NOT NULL, startDate int(255) NOT NULL, endDate int(255) NOT NULL, hours int(255) NOT NULL ) ";
    db.query(sql, (err) => {
        if(err) throw err;
    });
}


module.exports = db;