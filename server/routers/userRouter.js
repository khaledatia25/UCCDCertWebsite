const express = require('express');
const router = new express.Router();
const db = require('../db/db');
const auth = require('../middleware/auth');
const corsOptions = require('./corsOptions');
const cors = require('cors');

//Add User
router.post('/user',cors(corsOptions), auth, (req, res) => {
try{
        const sql = "INSERT INTO user SET ?";
        db.query(sql, req.body, (err, result) => {
        if (err){
           return res.status(400).send(err);
        }
            
        res.send();
        });
}catch(e){
        res.status(400).send(e);
    }
});

// fetch all users
router.get('/users',cors(corsOptions), auth, (req, res)=> {
    try{
    const sql = "SELECT * FROM user";
    db.query(sql, (e, result) => {
        if(e){
            return res.status(400).send(e);
        }
        res.send(result);
    });
    }catch(e){
        res.status(400).send(e);
    }
});

// fetch one user by id
router.get('/users/:id',cors(corsOptions), (req, res) => {

    const sql = "SELECT * FROM user WHERE id = ?";
    db.query(sql, req.params.id,(err, result) => {
        if(err){
           return res.status(400).send(err)
        };
        if(!result.length){
            return res.status(404).send("Not Found");
        }
        res.send(result);
    });
});

// fetch one user by nid
router.get('/user/:nid',cors(corsOptions), (req, res) => {

    const sql = "SELECT * FROM user WHERE nid = ?";
    db.query(sql, req.params.nid,(err, result) => {
        if(err)throw err;
        if(!result.length){
            return res.status(404).send("Not Found");
        }
        res.send(result);
    });
});

//update user
router.patch('/users/:id',cors(corsOptions), auth, (req, res) => {
    try{
    const {
        name,
        description,
        startDate,
        endDate,
        nid,
        program,
        hours
    } = req.body;
    const sql = `UPDATE user SET nid='${nid}', name='${name}', program='${program}', description='${description}',startDate='${startDate}',endDate='${endDate}',hours='${hours}' WHERE id = '${req.params.id}'`;
    db.query(sql, (err, result) => {
        if(err) {
            return res.status(400).send(err);
        };
        res.send();
    });
    }catch(e){
        res.status(400).send(e);
    }
});

//delete user
router.delete('/users/:id',cors(corsOptions), auth,(req, res) => {

    const sql = `DELETE FROM user where id='${req.params.id}'`
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send();
    });
});




module.exports = router;