import { useState, useEffect, useContext, createContext } from 'react'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, sethAuth] = useState({
        user: null,
        token: ''
    });

    useEffect(() => {
        const getData = localStorage.getItem('userdata');
        if(getData) {
            const data = JSON.parse(getData);
            sethAuth({
                ...auth,
                user: data.user,
                token: data.token
            })
        }
    },[])

    return (
        <AuthContext.Provider value={[auth, sethAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider }