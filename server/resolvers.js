const { products, opsLog } = require('./data');

const root = {
  products: () => products,
  product: ({ slug }) => products.find((p) => p.slug === slug) || null,
  // No auth check -- see the note in schema.js. This resolver was written
  // for an internal-tooling deployment and the assumption never got
  // revisited when the schema shipped on the public storefront API too.
  opsLog: () => opsLog,
  submitContactMessage: ({ name, email, message }) => {
    if (!name || !email || !message) {
      return false;
    }
    return true;
  },
};

module.exports = { root };
