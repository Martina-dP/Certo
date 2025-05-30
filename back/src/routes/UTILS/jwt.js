const jwt = require("jsonwebtoken");

const generToken = (id, user, role) => {
    return new Promise((resolve, reject) => {
        const payload = { id, user, role }; // 👈 Se incluye el role

        jwt.sign(payload, process.env.SECRET, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token');
            }

            resolve(token);
        });
    });
};

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log("Authorization header:", authHeader); // 👈

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Token no proporcionado" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded; // 👈 Aquí se establece req.user para que isAdminOrSuperAdmin funcione
        next();
    } catch (error) {
        console.error("Error al verificar token:", error);
        return res.status(401).json({ message: "Token inválido o expirado" });
    }
};

module.exports = {
    generToken,
    authenticate
};