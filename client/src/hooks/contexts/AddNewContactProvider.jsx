/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

const AddNewContactContext = createContext();

const AddNewContactProvider = ({ children }) => {
    const [showAddNewContactScreen, setShowAddNewContactScreen] =
        useState(false);

    return (
        <AddNewContactContext.Provider
            value={{ showAddNewContactScreen, setShowAddNewContactScreen }}
        >
            {children}
        </AddNewContactContext.Provider>
    );
};

export default AddNewContactProvider;
export { AddNewContactContext };