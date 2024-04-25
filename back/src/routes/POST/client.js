const { Router } = require("express");
const router = Router();
const { Client } = require('../../db');

router.post('/', async (req, res) =>{

    const { 
        clientId,
        name,
        lastName,
        DNI,
        taxStatus,
        birthday,
        authorized_margin,
        address,
        state,
        active 
    } = req.body;

    try {
        const verificacion = await Client.findOne({
            where: {
                DNI: DNI,
            },
        });
        if(!verificacion){
            Client.create({
                clientId: clientId,
                name: name,
                lastName: lastName,
                DNI: DNI,
                taxStatus: taxStatus,
                birthday: birthday,
                authorized_margin: authorized_margin,
                address: address,
                state: state,
                active: active 
            }).then((client) => res.status(201).send(client))
        } else{
            return res
                .status(400)
                .json({ message: "Your DNI already registered" });
        }

    } catch (error) {
        console.log(error);
    }  
})

module.exports = router;