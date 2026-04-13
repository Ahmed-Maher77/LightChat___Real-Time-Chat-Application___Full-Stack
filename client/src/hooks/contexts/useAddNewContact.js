import { useContext } from "react";
import { AddNewContactContext } from "./AddNewContactProvider";

const useAddNewContact = () => {
    const context = useContext(AddNewContactContext);

    if (!context) {
        throw new Error(
            "useAddNewContact must be used within AddNewContactProvider"
        );
    }

    return context;
};

export default useAddNewContact;