export interface Card {
  id: number;
  name: string;
  issuer: Issuer;
}

export enum Issuer {
  Visa,
  Mastercard,
  Citibank,
  Chase,
  BOA,
  Discover,
}
