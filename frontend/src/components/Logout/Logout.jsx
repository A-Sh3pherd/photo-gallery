import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";

const Logout = ({setLoggedInUser}) => {
    const history = useHistory();


    //Logging out and redirect the user to the login page.
    useEffect(() => {
        localStorage.clear();
        setLoggedInUser(false)
        history.push('/')
    },[])
    return (
        <div>

        </div>
    );
};

export default Logout;
