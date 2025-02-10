import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Component/NavBar";
import UserDetails from "../Component/atoms/UserDetails"; 
import axios from "axios";



function SingleUser() {
  const {login} = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);


  const getUser = async () => {
    setLoading(true);
    try{
      const response = await axios.get(`https://api.github.com/users/${login}`,{
        headers: {
          Authorization: process.env.GITHUB_TOKEN
        }
      }
       
    );
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (login){
      getUser(login)
    }
  }, [login])
}

export default SingleUser;

