const db = require('../models');
const User= db.User;

const addUser = async(req,res,next)=>{
    const data = await User.create({
        
    })
}