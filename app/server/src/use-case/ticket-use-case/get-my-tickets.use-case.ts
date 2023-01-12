import { ApolloContext } from '../../apollo';
import { DBErrorMessages } from '../../enum/db-error-messages.enum';
import { userError } from '../../helpers/user-error';
import {
  QuerySearchTicketsArgs,
  TicketsPayload,
} from '../../types/graphql-generated/graphql';
import { TicketPriority, TicketStatus } from '../../types/types';

export type GetMyTicketsInput = {
  context: ApolloContext;
  args: QuerySearchTicketsArgs;
};

export const getMyTicketsUseCase = async (
  input: GetMyTicketsInput
): Promise<TicketsPayload> => {
  const { prisma, user } = input.context;

  const searchParams = input.args.input || {};

  if (!user?.userId) {
    return {
      userErrors: [
        { ...userError, message: DBErrorMessages.AUTHORIZATION_FAILED },
      ],
      tickets: [],
    };
  }

  const tickets = await prisma.ticket.findMany({
    where: {
      userId: user?.userId,
      ...searchParams,
    },
    orderBy: [
      {
        createdAt: 'desc',
      },
    ],
  });

  const ticketsWithDate = tickets.map((ticket) => {
    return {
      ...ticket,
      status: ticket.status
        ? TicketStatus[ticket.status]
        : TicketStatus.BACKLOG,
      priority: ticket.priority
        ? TicketPriority[ticket.priority]
        : TicketPriority.MEDIUM,
      createdAt: ticket.createdAt.toISOString(),
      updatedAt: ticket.updatedAt.toISOString(),
    };
  });

  return {
    userErrors: [],
    tickets: ticketsWithDate,
  };
};
