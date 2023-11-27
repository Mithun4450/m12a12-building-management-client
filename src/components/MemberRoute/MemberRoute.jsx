import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useMember from "../../hooks/useMember";

const MemberRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isMember, isMemberLoading] = useMember();
    const location = useLocation();

    if (loading || isMemberLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    if (user && isMember) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default MemberRoute;