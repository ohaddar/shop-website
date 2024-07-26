import React, { useState } from "react";
import TextInput from "../textInput/TextInput";
import { useNavigate } from "react-router-dom";
import api from "../../api/Api";
import toast from "react-hot-toast";
import { User } from "../../class/userClass/UserClass";

const InputAuth: React.FC = () => {
  const [email, setEmail] = useState("");
  const [mdp, setmdp] = useState("");
  const navigate = useNavigate();

  const handleAuthSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = {
      email,
      mdp,
    };
    api
      .post("/api/users/login", user)
      .then(function (response) {
        const { id, nom, prenom, mdp, email, role } = response.data;
        const loggedInUser = new User(id, nom, prenom, email, mdp, role);

        if (loggedInUser.role === "ADMIN") {
          navigate("/admin");
        } else if (loggedInUser.role === "USER") {
          navigate("/user");
        } else {
          navigate("/");
        }
        localStorage.setItem("user", JSON.stringify(loggedInUser));
      })
      .catch(function (error) {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <form onSubmit={handleAuthSubmit}>
          <h2>Login</h2>
          <div className="form-group mb-3">
            <TextInput
              className="form-control"
              label="E-mail"
              name="email"
              placeholder="Entrez votre e-mail"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <TextInput
              className="form-control"
              label="Mot de e"
              name="mdp"
              placeholder="Entrez votre mot de e"
              type="word"
              onChange={(e) => setmdp(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputAuth;
