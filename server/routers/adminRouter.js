const db = require('../db/db');
const auth = require('../middleware/auth');
const express = require('express');
const router = new express.Router();
const jwt = require('jsonwebtoken');
const corsOptions = require('./corsOptions');
const cors = require('cors');

router.post('/admin/login',cors(corsOptions), async (req, res) => {
    try{
        const sql = `SELECT * FROM admin WHERE username = '${req.body.username}'`;
        let token;
        let adminId;
        await db.query(sql, (err, result) => {
            if(err) throw err;
            if(result.length == 0) return res.send({error: "Wrong passwerd or email"});
            admin = result[0];
            if(admin.password !== req.body.password) return res.send({error: "Wrong passwerd or email"});
            adminId = admin.adminId;
            token = jwt.sign({ id: admin.adminId.toString()}, "secretsentencetosecuremywebsite");
            const sql1 = `INSERT INTO tokens (adminId, token) VALUES ('${adminId}', '${token}')`;
            db.query(sql1, (err) => {
                if(err) return res.send(err);
                res.send({admin, token});
            });
        });

        
    }catch(e){
        res.status(400).send();
    }
});

router.post('/admin/logout', cors(corsOptions), auth,async (req, res) => {
    const sql = `DELETE FROM tokens WHERE token = '${req.body.token}'`
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send();
    });
});




module.exports = router;