import { useSelector } from "react-redux";

const ValidateRolUser = () => {
    const currentUser = useSelector(state => state.loginUser);

    if (!currentUser || !currentUser.user) {
        return null;
    }
    const rol = currentUser.user.rol;
    return rol
};

export default ValidateRolUser;


