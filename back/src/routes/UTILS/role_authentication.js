// Middleware para verificar si el usuario es superAdmin
const isSuperAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'superAdmin') {
        return next(); // Permite el acceso
    }
    return res.status(403).json({ message: "Acceso denegado. Solo el superAdmin puede realizar esta acción." });
};

// Middleware para verificar si el usuario es admin
const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        return next(); // Permite el acceso
    }
    return res.status(403).json({ message: "Acceso denegado. Solo el admin puede realizar esta acción." });
};

// Middleware para verificar si el usuario es admin o superAdmin
const isAdminOrSuperAdmin = (req, res, next) => {
    if (req.user && (req.user.role === 'admin' || req.user.role === 'superAdmin')) {
        return next(); // Permite el acceso
    }
    return res.status(403).json({ message: "Acceso denegado. Solo los usuarios con rol admin o superAdmin pueden realizar esta acción." });
};

module.exports = {
    isSuperAdmin,
    isAdmin,
    isAdminOrSuperAdmin
}