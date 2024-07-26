import React, { useEffect, useState } from "react";
import api from "../../api/Api";
import toast from "react-hot-toast";
import { User } from "../../class/userClass/UserClass";
import { Link } from "react-router-dom";

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>();
  useEffect(() => {
    const getUsers = () => {
      api
        .post("api/users/all")
        .then(function (response) {
          const listUsers = response.data.map(
            (user: User) =>
              new User(
                user.id,
                user.nom,
                user.prenom,
                user.email,
                user.mdp,
                user.role
              )
          );

          setUsers(listUsers);
        })
        .catch(function (error) {
          toast.error(error.response.data.message);
        });
    };
    getUsers();
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="col-md-16 col-lg-14 p-4 border rounded shadow">
        <h1 className="text-center mb-4">Site Users Data</h1>
        <Link to="/admin/product-list">Retour À La Page Des Produits</Link>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Mot de passe</th>
                <th>Rôle</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.nom}</td>
                    <td>{user.prenom}</td>
                    <td>{user.email}</td>
                    <td>{user.mdp}</td>
                    <td>{user.role}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
