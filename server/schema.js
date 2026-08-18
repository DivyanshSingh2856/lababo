// Chashitsu Trading Co. -- GraphQL schema for the storefront API.
//
// This schema is shared between the public storefront build and an internal
// ops-tooling build that was never supposed to ship together. `opsLog` is
// the internal-tooling leftover: it has no auth check on its resolver
// because the internal build always sat behind a separate VPN-only host --
// nobody re-checked that assumption when the schema got merged into the
// public API.
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Product {
    id: ID!
    slug: String!
    name: String!
    category: String!
    price: Float!
    description: String!
  }

  type LogEntry {
    id: ID!
    actor: String!
    action: String!
    detail: String!
    at: String!
  }

  type Query {
    products: [Product!]!
    product(slug: String!): Product
    opsLog: [LogEntry!]!
  }

  type Mutation {
    submitContactMessage(name: String!, email: String!, message: String!): Boolean!
  }
`);

module.exports = { schema };
