import { body, query, matchedData } from 'express-validator';

export function validateAtLeastOneOf(fields, location) {
  const chains = { body, query };
  const chain = chains[location];
  const locations = [location];

  return chain().custom((_, { req }) => {
    const data = matchedData(req, { locations, onlyValidData: false });
    const hasAtLeastOne = fields.some(field => data[field] !== undefined);

    if (!hasAtLeastOne) {
      throw new Error(
        `At least one of the following fields required: ${fields.join(', ')}`,
      );
    }

    return true;
  });
}
