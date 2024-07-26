import React from "react";
import TextInput from "../../components/textInput/TextInput";

const ContactPage: React.FC = () => {
  return (
    <div className="card" style={{ width: 53 + "rem" }}>
      <form>
        <h2 className="">Contact-Us</h2>
        <div className="form-group mb-3">
          <TextInput
            className="form-control"
            label="Nom"
            name="nom"
            placeholder="Entrez votre nom"
            type="text"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <TextInput
            className="form-control"
            label="Prénom"
            name="prenom"
            placeholder="Entrez votre prénom"
            type="text"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <TextInput
            className="form-control"
            label="E-mail"
            name="email"
            placeholder="Entrez votre e-mail"
            type="email"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="">Sujet</label>
          <textarea
            className="form-control"
            name="Sujet"
            placeholder="Entrez votre mot de passe"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={() => alert("Your Message Is Submitted!")}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
