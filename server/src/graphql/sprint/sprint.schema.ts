export const sprintTypeDefs = `#graphql
  extend type Query {
    getSprint(id: ID!): SprintPayload!
    getSprints(input:SearchSprintInput): SprintsPayload!
  }

  extend type Mutation {
    sprintCreate(input: SprintCreateInput!): SprintPayload!
    sprintUpdate(input: SprintUpdateInput!): SprintPayload!
    sprintDelete(id: ID!): SprintDeletePayload!
  }

  input SearchSprintInput {
    projectId: String
    title: String
    goal: String
  }

  input SprintCreateInput {
    projectId: String!
    title: String!
    goal: String!
    startDate: String
    endDate: String
  }

  input SprintUpdateInput {
    projectId: String!
    title: String!
    goal: String!
    startDate: String
    endDate: String
  }

  type Sprint {
    id: ID!
    userId: String!
    projectId: String!
    title: String!
    goal: String!
    sequenceId: String!
    startDate: String
    endDate: String
    createdAt: String
    updatedAt: String
  }

  type SprintPayload {
    userErrors: [UserError!]!
    sprint: Sprint
  }

  type SprintsPayload {
    userErrors: [UserError!]!
    sprints: [Sprint!]
  }

  type SprintDeletePayload {
    userErrors: [UserError!]!
    success: Boolean
  }

`;