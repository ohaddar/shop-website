import React, { useState } from "react";
import TextInput from "../textInput/TextInput";
import { useNavigate } from "react-router-dom";
import api from "../../api/Api";
import toast from "react-hot-toast";
const InputCreateAcc: React.FC = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData = {
      nom,
      prenom,
      email,
      mdp,
    };

    api
      .post("/api/users/save", userData)
      .then(function (response) {
        navigate("/our-products");
        console.log(response);
      })
      .catch(function (error) {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <h2 className="mb-3">Register</h2>
          <div className="form-group mb-3">
            <TextInput
              className="form-control"
              label="Nom"
              name="nom"
              placeholder="Entrez votre nom"
              type="text"
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <TextInput
              className="form-control"
              label="Prénom"
              name="prenom"
              placeholder="Entrez votre prénom"
              type="text"
              onChange={(e) => setPrenom(e.target.value)}
            />
          </div>
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
              label="Mot de passe"
              name="mdp"
              placeholder="Entrez votre mot de passe"
              type="password"
              onChange={(e) => setMdp(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Créer un compte
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputCreateAcc;
