export const guid = (len: number, numberOnly = false): string => {
  const buf = [] as Array<string>;
  const chars = !numberOnly
    ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    : "0123456789";
  const charLen = chars.length;
  const length = len || 32;

  for (let i = 0; i < length; i++) {
    buf[i] = chars.charAt(Math.floor(Math.random() * charLen));
  }

  return buf.join("");
};

export const convertCountArrayToObject = <T>(
  arrayToConvert: { _id: string; count: number }[],
  initialState: T & { all: number }
): T & { all: number } => {
  return arrayToConvert.reduce(
    (iterator, { _id, count }) => ({
      ...iterator,
      [_id]: count,
      all: iterator.all + count,
    }),
    initialState
  );
};

export const countFromArray = <T extends Record<keyof T, number>>(
  array: (keyof T)[],
  initialValue: T
): Record<keyof T | "all", number> => {
  return array.reduce(
    (iterator, current) => ({
      ...iterator,
      all: iterator.all + 1,
      [current]: iterator[current] + 1,
    }),
    { all: 0, ...initialValue }
  );
};
