import React from "react";

function UserDetails({ user }) {
  return (
    <div className="shadow-md rounded-lg p-2 font-semibold">
      {user.name.title} {user.name.first} {user.name.last}
      <br />
      {user.gender}
      {user.email} <br />
      {user.dob.date} <br />
      {user.location.country}
      <img src={user.picture.medium} alt="" />
    </div>
  );
}

export default UserDetails;
