import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../Component/NavBar";
import UserDetails from "../Component/atoms/UserDetails";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("all");

  const getUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/users`, {
        headers: {
          Authorization: process.env.GITHUB_TOKEN,
        },
      });
      setUsers(response.data);
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
          onChange={(e) => {
            setGender(e.target.value);
          }}
          className="w-fit my-5 border p-3 rounded-lg"
        >
          <option value="all"> All users</option>
          <option value="male"> Male</option>
          <option value="female"> Female</option>
        </select>
      </div>
      {loading ? (
        <div class="flex justify-center items-center h-screen">
          <img
            src="https://th.bing.com/th/id/R.4abe10d2f908ce4a6be73ab54b895bc5?rik=rg0vQq9L4ybHLQ&pid=ImgRaw&r=0"
            alt="Centered Image"
            class="w-[100px] h-[100px] object-cover"
          />
        </div>
      ) : (
        <div className=" shadow-md hover:shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {users.map((user, id) => (
            <UserDetails key={id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Users;
