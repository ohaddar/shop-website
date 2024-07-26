import React, { useEffect, useState } from "react";
import { User } from "../../class/userClass/UserClass";

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const loggedInUserJson = localStorage.getItem("user");
      if (loggedInUserJson) {
        const loggedInUser = JSON.parse(loggedInUserJson);
        setUser(
          new User(
            loggedInUser.id,
            loggedInUser.nom,
            loggedInUser.prenom,
            loggedInUser.email,
            loggedInUser.mdp,
            loggedInUser.role
          )
        );
      } else {
        console.log("No user is logged in.");
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      {user ? (
        <div>
          <p>
            <strong>Nom:</strong> {user.nom}
          </p>
          <p>
            <strong>Prénom:</strong> {user.prenom}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      ) : (
        <p>No user is logged in.</p>
      )}
    </div>
  );
};

export default ProfilePage;
