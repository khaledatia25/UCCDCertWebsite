const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "uccd"
});

// connect to mySql
db.connect((err)=> {
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