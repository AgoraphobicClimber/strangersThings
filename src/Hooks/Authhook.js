import { useState, useEffect } from "react";
import { fetchMe } from "../api/auth";

export default function useAuth() {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState({});
    useEffect(() => {
        async function getMe() {
            console.log("Token before fetch");
            const result = await fetchMe(token);
            console.log(result);
            setUser(result.data);
        }
        if (token) {
            getMe();
        }
        console.log(token);
    }, [token]);

    return {
        token,
        setToken,
        user,
        setUser,
    }
}