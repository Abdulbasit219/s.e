import React from 'react'
import { useState, useEffect } from "react"
import { useAuth } from '../../context/auth'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../Spinner'

const PrivateRoutes = () => {
    const [okres, setOkres] = useState();
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get("http://localhost:8080/api/v1/auth/user-auth",
                {
                    headers: {
                        'Authorization': auth?.token
                    }
                }
            )
            console.log(res);
            { res.data.ok ? setOkres(true) : setOkres(false) }
        }
        if (auth?.token) authCheck()
    }, [auth?.token])

    return okres ? <Outlet /> : <Spinner/>;
}

export default PrivateRoutes