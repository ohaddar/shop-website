export class Product {
  id: number | string;
  nom: string;
  description: string;
  prix: number | string;
  image: string;
  tail: number | string;
  constructor(
    id: number | string,
    nom: string,
    description: string,
    prix: number | string,
    image: string,
    tail: number | string
  ) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.prix = prix;
    this.image = image;
    this.tail = tail;
  }
}
