import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const TempProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log(user);
  console.log(isAuthenticated);
  console.log(isLoading);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}; 

export default TempProfile;