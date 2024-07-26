export class User {
  id: number | string;
  nom: string;
  prenom: string;
  email: string;
  mdp: string;
  role: string;
  constructor(
    id: number | string,
    nom: string,
    prenom: string,
    email: string,
    mdp: string,
    role: string
  ) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.mdp = mdp;
    this.role = role;
  }
}
