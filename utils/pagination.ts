type PaginationParams = {
  after?: string;
  before?: string;
};

const LIMIT = 10;

export const getPagination = (searchParams: PaginationParams) => {
  if (searchParams.after) return { first: LIMIT, after: searchParams.after };
  if (searchParams.before) return { last: LIMIT, before: searchParams.before };
  return { first: LIMIT };
};
