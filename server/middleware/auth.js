const jwt = require('jsonwebtoken');
const db = require('../db/db');

const auth = async (req, res, next) => {
    try{ 
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, "secretsentencetosecuremywebsite");
        //console.log(decoded);
        const sql = `SELECT * FROM admin WHERE adminId = '${decoded.id}'`;
        db.query(sql,(error, result) => {
            if(error) throw error;
            if(!result.length){
                return res.send({error: "Not Authorized"});
            }
            req.token = token;
            req.admin = result[0];
        });
        
        next();
    }catch(e){
            res.status(400).send({error:"Not Authirized"});
    }
}

module.exports =  auth;