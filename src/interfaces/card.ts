// import {Category} from './Category';

export interface Card {
  id: number;
  name: string;
  issuer: Issuer;
  primaryColor: string;
  secondaryColor: string;
  annualFee: number;
  minimumSpend: number;
  signUpBonus: number;
  startDate: Date;
  // categories: Category[]; // TODO: Should categories be a part of cards or vice versa
  hasForeignTransactionFee: boolean;
  // creditLimit: number; // TODO: relevant for this application?
}

// export class Issuer {
//   static readonly Visa = new Issuer('Visa', 'f7f7f7', '0c51a3');
//   static readonly MasterCard = new Issuer('MasterCard', 'ededed', '000000');
//   static readonly Citibank = new Issuer('Citi', '00b4eb', 'f6f5f2');
//   static readonly Chase = new Issuer('Chase', '0476ba', 'f7f7f7');
//   static readonly BOA = new Issuer('Bank of America', 'd81c30', 'f7f7f7');
//   static readonly Discover = new Issuer('Discover', 'ef7e21', 'f7f7f7');

//   private constructor(
//     public readonly name: string,
//     public readonly primaryColor: string,
//     public readonly secondaryColor: string,
//   ) {}
// }

export enum Issuer {
  Visa = 'Visa',
  Mastercard = 'Mastercard',
  Citibank = 'Citi',
  Chase = 'Chase',
  BOA = 'Bank of America',
  Discover = 'Discover',
}
