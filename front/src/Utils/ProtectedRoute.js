import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element }) => {

    const isAuthenticated = useSelector((state) => state.isAuthenticated);

    return isAuthenticated ? element : <Navigate to="/logIn" />;
};

export default ProtectedRoute;