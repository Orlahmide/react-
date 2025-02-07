import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavBar from "../Component/NavBar";

function SingleUser() {
  const { name } = useParams(); 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSingleUser = async () => {
      try {
        const response = await axios.get(`https://randomuser.me/api/?${name}`);
        setUser(response.data.results[0]); 
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };
    getSingleUser();
  }, []); 

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found</p>;

  return (
    <div className="hello">
      <NavBar />
      <div>
        <p>{user.name.first} {user.name.last}</p>
        <img src={user.picture.large} alt="User" />
      </div>
    </div>
  );
}

export default SingleUser;
