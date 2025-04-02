const jwt = require("jsonwebtoken");

const generToken = ( id, user ) => {

    return new Promise( (resolve, rejeat) =>{ 

        const data = { id, name: user }

        jwt.sign(data, process.env.SECRET , {
            expiresIn: '4h'
        }, (err, token) => {

            if (err){
                console.log(err)
                rejeat('No se pudo generar el token')
            }

            resolve(token)
        })
    })
}

module.exports = {
    generToken
}