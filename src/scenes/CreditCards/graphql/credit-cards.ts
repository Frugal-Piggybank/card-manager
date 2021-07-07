import {gql} from 'apollo-boost';

export const CREDIT_CARDS = gql`
  query GetCreditCards {
    creditCards {
      id
      name
      issuer
      annualFee
      startDate
      hasForeignTransactionFee
    }
  }
`;
