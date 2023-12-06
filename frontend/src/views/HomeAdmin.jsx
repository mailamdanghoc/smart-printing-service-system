import React from "react"
import  {useLocation, useNavigate} from "react-router-dom"

function HomeAdmin() {
    const location = useLocation()

    return (
        <div className="homeadmin">
            <h1>Hello {location.state.id} and welcome to the admin home</h1>
        </div>
    )
}

export default HomeAdmin