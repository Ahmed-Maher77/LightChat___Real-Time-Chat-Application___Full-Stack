import { createContext, useContext, useState } from "react";

const UserDataContext = createContext();

const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        id: "680f5116f10f3cd28382ed02",
        picture: "https://images.unsplash.com/photo-1682685794700-1e7f3c5d8b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        name: "Ahmed Maher",
        email: "TtG8n@example.com",
    });

    const logout = () => {
        setUserData({
            id: null,
            picture: null,
            name: null,
            email: null,
        });
    };

    return (
        <UserDataContext.Provider value={{ userData, setUserData, logout }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserDataProvider;

// context consumer
export const useUserDataContext = () => useContext(UserDataContext);
