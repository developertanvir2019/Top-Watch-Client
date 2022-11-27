import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../Pages/Shared/Spinner";
import useSeller from "../AllHooks/useSeller";
import { AuthContext } from "../AuthProvider";

const SellerRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isLoading] = useSeller(user?.email);
    const location = useLocation()

    if (loading || isLoading) {
        return <Spinner></Spinner>
    }

    if (user && isSeller) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SellerRouter;
