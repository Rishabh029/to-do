import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = () => {
    const {setUserName} = useContext(AppContext);
    const [newUsername , setNewUserName] = useState("");
    return <div>
        <input onChange={(event) => setNewUserName(event.target.value)}></input>
        <button onClick={() => setUserName(newUsername)}>Change Username</button>
        </div>;
  };