/**
 * @param {Date} SomeDate The date
 */
 export const gigasecond = (SomeDate) => {
  const GigasecondAfter = new Date(SomeDate.getTime() + 1000000000000);
  return GigasecondAfter;
};

