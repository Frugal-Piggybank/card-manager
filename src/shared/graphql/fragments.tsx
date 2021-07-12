import {gql} from 'apollo-boost';

export const CATEGORY_FRAGMENT = gql`
  fragment Category on Category {
    id
    name
    percent
  }
`;

export const CREDIT_CARD_FRAGMENT = gql`
  ${CATEGORY_FRAGMENT}
  fragment CreditCard on CreditCard {
    id
    name
    issuer
    annualFee
    startDate
    hasForeignTransactionFee
    primaryColor
    secondaryColor
    categories {
      ...Category
    }
  }
`;
