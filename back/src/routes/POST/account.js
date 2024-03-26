const { Router } = require("express");
const router = Router();
const { User } = require('../../db');
const bcryptjs = require("bcryptjs");

router.post('/', async (req, res) =>{

    const { id, name, lastName, user, password, active, role } = req.body;

    let passwordHash = await bcryptjs.hash(password, 8);

    try {
        const verificacion = await User.findOne({
            where: {
              user: user,
            },
        });
        if(!verificacion){
            User.create({
                id:id, 
                name:name, 
                lastName:lastName, 
                user:user, 
                password: passwordHash, 
                active:active, 
                role:role
            }).then((user) => res.status(201).send(user))
        } else{
            return res
              .status(400)
              .json({ message: "Your email adress is already registered" });
          }
      

    } catch (error) {
        console.log(error);
    }  
})

module.exports = router;