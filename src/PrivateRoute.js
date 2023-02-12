import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let auth = localStorage.getItem('user_name_is');
    // console.log(auth);
    return(
        auth ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes;

