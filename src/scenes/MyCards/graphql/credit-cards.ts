import {gql} from 'apollo-boost';
import {CREDIT_CARD_FRAGMENT} from '../../../shared/graphql/fragments';

export const CREDIT_CARDS_QUERY = gql`
  ${CREDIT_CARD_FRAGMENT}
  query GetCreditCards {
    creditCards {
      ...CreditCard
    }
  }
`;
