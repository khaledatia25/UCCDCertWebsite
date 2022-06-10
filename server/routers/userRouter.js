const express = require('express');
const router = new express.Router();
const db = require('../db/db');
const auth = require('../middleware/auth');
const corsOptions = require('./corsOptions');
const cors = require('cors');
const pdf = require('./cert');

//Add User
router.post('/user',cors(corsOptions), auth, (req, res) => {
try{
        const sql = "INSERT INTO user SET ?";
        db.query(sql, req.body, (err, result) => {
        if (err){
           return res.status(400).send(err);
        }
        console.log(req.body);    
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
router.patch('/users/:id',cors(corsOptions), auth, async(req, res) => {
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
    await db.query(sql, async (err, result) => {
        if(err) {
            return res.status(400).send(err);
        };
        await res.send();
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

//certificate router
router.get('/certificate/:id/:temp/:date/:description/:hours',cors(corsOptions),async (req, res, next) => {
    const sql = "SELECT * FROM user WHERE id = ?";
    const options = {
        temp: req.params.temp,
        date: req.params.date,
        description: req.params.description,
        hours: req.params.hours

    };
    console.log(options);
     db.query(sql, req.params.id, async (err, result) => {
        if(err){
           return res.status(400).send(err)
        };
        if(!result.length){
            return res.status(404).send("Not Found");
        }
        const stream =  await res.writeHead(200, {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment;filename=invoice.pdf'
        });
        pdf(options,result[0],async (chunk) => {
            await stream.write(chunk);
        }, () => stream.end() );
    });
    
    

});




module.exports = router;