const express = require('express');
const router = new express.Router();
const db = require('../db/db');

//Add User
router.post('/user', (req, res) => {
    const sql = "INSERT INTO user SET ?";
    db.query(sql, req.body, (err, result) => {
        if (err)
            throw err;
        res.send(result);
    });
    
});

// fetch all users
router.get('/users', (req, res)=> {
    const sql = "SELECT * FROM user";
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    });
});

// fetch one user by id
router.get('/users/:id', (req, res) => {
    const sql = "SELECT * FROM user WHERE id = ?";
    db.query(sql, req.params.id,(err, result) => {
        if(err)throw err;
        if(!result.length){
            return res.status(404).send("Not Found");
        }
        res.send(result);
    });
});

//update user
router.patch('/users/:id', (req, res) => {
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
        if(err) throw err;
        res.send(result);
    });
});

//delete user
router.delete('/users/:id', (req, res) => {
    const sql = `DELETE FROM user where id='${req.params.id}'`
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    });
});




module.exports = router;