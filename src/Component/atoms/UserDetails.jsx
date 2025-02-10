import React from "react";
import { useNavigate } from "react-router-dom";

function UserDetails({ user }) {
  const navigate = useNavigate();

  return (
    // This is what useNavigate is doing
    <div
      onClick={() => navigate(`/users/${user.login}`)}
      className="shadow-md rounded-lg p-2 font-semibold cursor-pointer"
    >
      <p>{user.login}</p>

      <div>
        <p>{user.company}</p>
        <p>{user.location}</p>
        <p>{user.address}</p>
        <p>{user.country}</p>
      </div>

      <img
        src={user.avatar_url}
        alt="User Avatar"
        className="w-[100px] h-[100px] object-cover rounded-full mt-2"
      />
    </div>
  );
}

export default UserDetails;
