import { ProductFinalProps } from "../../utils/types/type";

export class Commande {
  idUser: number;
  idProduit: number;
  qte: number;
  id?: number;
  produit?: ProductFinalProps;

  quantite?: number;

  constructor(
    idUser: number,
    idProduit: number,
    qte: number,
    id?: number,
    produit?: ProductFinalProps,

    quantite?: number
  ) {
    this.idUser = idUser;
    this.idProduit = idProduit;
    this.qte = qte;
    this.id = id;
    this.produit = produit;
    this.quantite = quantite;
  }
}
