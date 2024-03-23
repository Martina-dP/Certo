const { Router } = require("express");
const router = Router();
const { User } = require('../../db');


router.post('/', (req, res) =>{
    // const { idUser,idClient } = req.body
    const { id, name, lastName, user, password, status, role } = req.body;
   
    console.log("user", User)
    try {
        User.create({
            id:id, 
             name:name, 
             lastName:lastName, 
             user:user, 
             password:password, 
             status:status, 
             role:role
        }).then((user) => res.status(201).send(user))


    } catch (error) {
        console.log(error);
    }  
})

module.exports = router;