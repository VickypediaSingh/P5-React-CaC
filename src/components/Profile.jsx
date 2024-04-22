import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return "PLEASE LOGIN FIRST";
  return (
    <>
      <h3>Welcome {user.username}</h3>
    </>
  );
}

export default Profile;
