import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../Pages/Shared/Spinner";
import useBuyer from "../AllHooks/useBuyer";
import { AuthContext } from "../AuthProvider";

const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, isLoading] = useBuyer(user?.email);
    const location = useLocation()

    if (loading || isLoading) {
        return <Spinner></Spinner>
    }

    if (user && isBuyer) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default BuyerRoute;
