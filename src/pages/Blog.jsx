import React, { useState } from "react";
import UserCard from "../Component/atoms/UserCard";
import UserForm from "../Component/atoms/UserForm";

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
    <div className="formContainer">
      {!submitted ? (
        <UserForm
          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          age={age}
          setAge={setAge}
          description={description}
          setDescription={setDescription}
        />
      ) : (
        <UserCard userName={name} userAge={age} userDesciption={description} />
      )}

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default Blog;
