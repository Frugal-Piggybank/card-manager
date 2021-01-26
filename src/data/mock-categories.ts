import {Category} from '../interfaces/Category';

const MockCategories: Category[] = [
  {
    id: 1,
    name: 'Grocery',
    cards: [1, 2],
    percent: 5,
  },
  {
    id: 2,
    name: 'Walgreens',
    cards: [1],
    percent: 5,
  },
  {
    id: 3,
    name: 'CVS',
    cards: [1],
    percent: 5,
  },
  {
    id: 5,
    name: 'Costco',
    cards: [2],
    percent: 5,
  },
  {
    id: 6,
    name: 'Spectrum',
    cards: [2],
    percent: 5,
  },
  {
    id: 7,
    name: 'Verizon',
    cards: [2],
    percent: 5,
  },
  {
    id: 8,
    name: 'Dining',
    cards: [3],
    percent: 5,
  },
  {
    id: 9,
    name: 'Travel',
    cards: [3],
    percent: 5,
  },
  {
    id: 10,
    name: 'Lyft',
    cards: [3],
    percent: 5,
  },
  {
    id: 12,
    name: 'Gas Stations',
    cards: [4],
    percent: 5,
  },
  {
    id: 13,
    name: 'Internet',
    cards: [4],
    percent: 5,
  },
  {
    id: 14,
    name: 'Cell Phone',
    cards: [4],
    percent: 5,
  },
  {
    id: 15,
    name: 'Office Supplies',
    cards: [4],
    percent: 5,
  },
  {
    id: 16,
    name: 'All Other Purchases', // Make an option for default card instead
    cards: [5],
    percent: 2,
  },
  {
    id: 17,
    name: 'Target',
    cards: [],
    percent: 5,
  },
];

export default MockCategories;
