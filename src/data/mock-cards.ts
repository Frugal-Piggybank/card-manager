import {Issuer, Card} from './../interfaces/card';

const MockCards: Card[] = [
  {
    id: 1,
    name: 'Discover',
    issuer: Issuer.Discover,
    primaryColor: '#ef7e21',
    secondaryColor: '#f7f7f7',
  },
  {
    id: 2,
    name: 'Freedom',
    issuer: Issuer.Chase,
    primaryColor: '#0476ba',
    secondaryColor: '#f7f7f7',
  },
  {
    id: 3,
    name: 'Reserve',
    issuer: Issuer.Chase,
    primaryColor: '#0476ba',
    secondaryColor: '#f7f7f7',
  },
  {
    id: 4,
    name: 'Business Ink',
    issuer: Issuer.Chase,
    primaryColor: '#0476ba',
    secondaryColor: '#f7f7f7',
  },
  {
    id: 5,
    name: 'Double Cash',
    issuer: Issuer.Citibank,
    primaryColor: '#00b4eb',
    secondaryColor: '#f6f5f2',
  },
];

export default MockCards;
