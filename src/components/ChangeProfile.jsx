import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const ChangeProfile = () => {
  const { setUsername } = useContext(AppContext);

  const [newUsername, setUserName] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
      <button onClick={() => setUsername(newUsername)}>Change Username</button>
    </div>
  );
};

export default ChangeProfile;
