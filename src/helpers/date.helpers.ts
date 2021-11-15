export const addMinutesToDate = (minutes: number) => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + minutes);
  return date;
};

export const isExpired = (date: Date) => {
  const dateTime = date.getTime();
  const currentTime = new Date().getTime();
  return dateTime < currentTime ? true : false;
};
