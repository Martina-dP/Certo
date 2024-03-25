const { Router } = require("express");
const User = require("../../models/Users");

const router = Router();

router.post("/", async (req, res) => {

  const { user, password } = req.body

  try {

    const userAccount = await User.findOne({user})
    if ( !userAccount ) {
      return res.status(400).json({
        ok: false,
        msg: "user no registrado"
      })
    } 

    if ( !password ) {
      return res.status(400).json({
        ok: false,
        msg: "Mail o contraseña incorrecto"
      })
    }

    res.json({
      ok: true,
      id: userAccount.id,
      msg: "Se inicio sesion correctamente"
    })

  } catch (error) {
    console.log(error)
    res.json(error);
  }

});

module.exports = router;