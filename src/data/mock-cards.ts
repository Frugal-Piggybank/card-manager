import {Issuer, Card} from './../interfaces/card';

const Cards: Card[] = [
  {
    id: 1,
    name: 'Discover',
    issuer: Issuer.Discover,
  },
  {
    id: 2,
    name: 'Freedom',
    issuer: Issuer.Chase,
  },
  {
    id: 3,
    name: 'Reserve',
    issuer: Issuer.Chase,
  },
  {
    id: 4,
    name: 'Business Ink',
    issuer: Issuer.Chase,
  },
  {
    id: 5,
    name: 'Double Cash',
    issuer: Issuer.Citibank,
  },
];

export default Cards;
