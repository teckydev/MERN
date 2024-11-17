import { useLocation } from "react-router-dom"

export const CheckAuth = ({isAuthenticated,user,children}) =>{
    const location = useLocation()
    if(!isAuthenticated && !(location.pathname.includes('/login')) || ){

    }
    return(
        <div>
            

        </div>
    )
}