import React, { useEffect, useState } from "react";
import api from "../../api/Api";
import toast from "react-hot-toast";
import { Commande } from "../../class/commandeClass/CommandeClass";
import { User } from "../../class/userClass/UserClass";

const CommandeList: React.FC = () => {
  const [commande, setCommande] = useState<Commande>();
  const [user, setUser] = useState<User>();
  const [commandeList, setCommandeList] = useState<Commande[]>();

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
  useEffect(() => {
    const fetchUserComId = async () => {
      const userComJson = localStorage.getItem("productToCom");
      if (userComJson) {
        const ComId = JSON.parse(userComJson);
        setCommande(new Commande(ComId.idUser, ComId.idProduit, ComId.qte));
      } else {
        console.log("No product to command.");
      }
    };

    fetchUserComId();
  }, []);

  useEffect(() => {
    const fetchCommande = async () => {
      if (user) {
        try {
          const response = await api.post(`api/commande/${user.id}`);

          const commandes = response.data.filter((order: any) =>
            order.ligneCommandes.some(
              (ligne: any) => ligne.produit.id === commande?.idProduit
            )
          );

          const filteredLigneCommandes = commandes.flatMap((order: any) =>
            order.ligneCommandes.filter(
              (ligne: any) => ligne.produit.id === commande?.idProduit
            )
          );
          console.log(commande?.qte);
          console.log(commande?.quantite);

          setCommandeList(filteredLigneCommandes);
        } catch (error) {
          toast.error("Failed to fetch commandes.");
        }
      }
    };

    fetchCommande();
  }, [user, commande]);

  return (
    <div>
      <h1>Liste des Commandes</h1>
      {commandeList &&
        commandeList.map((ligne, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              border: "1px solid #ddd",
              padding: "10px",
            }}
          >
            <h2>{ligne.produit?.nom}</h2>
            <img
              src={ligne?.produit?.image}
              alt={ligne?.produit?.nom}
              style={{ maxWidth: "150px" }}
            />
            <p>Prix Unitaire: {ligne?.produit?.prix} €</p>
            <p>Taille: {ligne?.produit?.tail} </p>

            <p>Quantité: {ligne?.quantite}</p>
          </div>
        ))}
    </div>
  );
};

export default CommandeList;
