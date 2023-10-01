import {ChangeProfile} from "./ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
    const {userName} = useContext(AppContext);


    return <h1> THIS IS THE Profile PAGE for {userName}.
        <ChangeProfile /></h1>;
};