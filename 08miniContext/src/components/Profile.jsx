import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile(){
    const {user} = useContext(UserContext)
    return <div>Welcome {user?.username}</div>
}

export default Profile;