import React, { useState } from "react";
import UserCard from "../Component/atoms/UserCard";
import UserForm from "../Component/atoms/UserForm";
import NavBar from "../Component/NavBar";

function Blog() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <NavBar />
      <div className="flex p-8 items-center justify-center h-screen w-full bg-gradient-to-r from-green-700 to-blue-500">
        
        <div className="w-full sm:w-[70%] md:w-[65%]">
          {!submitted ? (
            <UserForm
              border-2
              handleSubmit={handleSubmit}
              name={name}
              setName={setName}
              age={age}
              setAge={setAge}
              description={description}
              setDescription={setDescription}
            />
          ) : (
            <UserCard
              userName={name}
              userAge={age}
              userDesciption={description}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Blog;
