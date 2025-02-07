import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../Component/NavBar";
import UserDetails from "../Component/atoms/UserDetails";
import { useParams } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("all")


  const getUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://randomuser.me/api/?results=16${gender == "all"  
      ?"" 
      :gender== "male"
      ? "&gender=male"
      : "&gender=female"

      }`
    );
      setUsers(response.data.results);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    getUser();
  }, [gender]);

  return (
    <div>
      <NavBar />
      <div className="px-5">
        <select
        onChange={(e)=> {
          setGender(e.target.value);
        }} className="w-fit my-5 border p-3 rounded-lg">
          <option value="all"> All users</option>
          <option value="male"> Male</option>
          <option value="female"> Female</option>

        </select>
      </div>
      {loading ? (
        <p><img src="https://static.vecteezy.com/system/resources/previews/001/826/248/large_2x/progress-loading-bar-buffering-download-upload-and-loading-icon-vector.jpg" alt="" /></p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {users.map((user, index) => (
          <UserDetails key={index} user= {user}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default Users;
