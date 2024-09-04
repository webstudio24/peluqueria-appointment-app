/* eslint-disable react/prop-types */

import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { authContext } from '../context/AuthContext'

const ProtectedeRoutes = ({children, allowedRoles}) => {


    const {token,role} = useContext(authContext)

    
    const isAllowed = allowedRoles.includes(role);
    const accesibleRoute = token && isAllowed ? children: <Navigate to="/login" replace={true}/>

  return accesibleRoute;
}

export default ProtectedeRoutes