import { ApolloQueryResult } from '@apollo/client';
import { FC } from 'react';
import styled from 'styled-components';
import {
  Exact,
  Ticket,
  TicketStatus,
} from '../../apollo/graphql-generated/types';
import { GetMyTicketsQuery } from '../../apollo/graphql/tickets/ticket.generated';
import { TicketListItem } from './ticket-list-item';

const TicketColumnSection = styled.div({
  backgroundColor: '#f4f5f7',
  width: '100%',
});

const TicketColumnHeader = styled.p({
  backgroundColor: '#ced0d3',
  textAlign: 'center',
  padding: '10px 0px',
});

const TicketItems = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0.25rem 0',
});

interface ITicketColumn {
  tickets: Ticket[];
  columnName: string;
  status: TicketStatus;
  refetch: (
    variables?:
      | Partial<
          Exact<{
            [key: string]: never;
          }>
        >
      | undefined
  ) => Promise<ApolloQueryResult<GetMyTicketsQuery>>;
}

export const TicketColumn: FC<ITicketColumn> = ({
  tickets,
  columnName,
  status,
  refetch,
}) => {
  return (
    <TicketColumnSection>
      <TicketColumnHeader>{columnName}</TicketColumnHeader>
      <TicketItems>
        {tickets.map((ticket, index) => {
          return (
            ticket.status === status && (
              <TicketListItem
                key={index}
                ticketItem={ticket}
                refetch={refetch}
              />
            )
          );
        })}
      </TicketItems>
    </TicketColumnSection>
  );
};
