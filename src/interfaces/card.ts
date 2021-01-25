export interface Card {
  id: number;
  name: string;
  issuer: Issuer;
}

export enum Issuer {
  Visa = 'Visa',
  Mastercard = 'Mastercard',
  Citibank = 'Citi',
  Chase = 'Chase',
  BOA = 'Bank of America',
  Discover = 'Discover',
}
