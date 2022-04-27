import jwt from 'jsonwebtoken';
import db from '../db/db';

const auth = async (req, res, next) => {
    try{ 
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, "secretsentencetosecuremywebsite");
        const sql = `SELECT * FROM tokens WHERE adminid = '${15454}, token = ${15} '`
        db.query(sql,(error, result) => {
            if(error) throw error;
            if(!result.length){
                throw new Error();
            }
            req.token = token;

        });
        
    }catch(e){

    }
}

export default auth;