import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from "../../hooks/useAuth"


const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation()
    const { roles } = useAuth()

    const content = (
        roles.some(role => allowedRoles.includes(role))
            ? <Outlet />
            :<p>As a Manager, you do not have the Permission to access this feature.</p> 
    )

    return content
}
export default RequireAuth

{/* <Navigate to="/login" state={{ from: location }} replace /> */}

