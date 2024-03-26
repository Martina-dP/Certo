const { Router } = require("express");
const {User} = require("../../db");
const bcryptjs = require("bcryptjs");
const { generToken } = require("../utils/jwt");

const router = Router();

router.post("/", async (req, res) => {

  const { user, password } = req.body

  try {

    const userDetails = await User.findOne({
      where: {
        user: user,
      },
    })
    if ( !userDetails ) {
      return res.status(400).json({
        ok: false,
        msg: "Usuario no registrado"
      })
    } 

    const validatePassword = bcryptjs.compareSync( password, userDetails.password )
    if ( !validatePassword ) {
      return res.status(400).json({
        ok: false,
        msg: "Mail o contraseña incorrecto"
      })
    }

    const token = await generToken( userDetails.id, userDetails.user )

    res.json({
      ok: true,
      id: userDetails.id,
      token,
      msg: "Se inicio sesion correctamente"
    })

  } catch (error) {
    console.log(error, "soy error")
    res.json(error);
  }

});

module.exports = router;