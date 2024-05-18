import { format, parseISO, addDays } from "date-fns";

export const getTimeFormatted = (dateTimeString) => {
  const date = parseISO(dateTimeString);
  const formattedTime = format(date, "hh:mm aa");
  return formattedTime;
};

export const formatDateForUI = (dateString) => {
  const date = parseISO(dateString);
  const formattedDate = format(date, "EEEE, MMM d").toUpperCase();
  return formattedDate;
};

export const formatDateForAPI = (dateString) => {
  const startDate = format(new Date(dateString), "yyyy-MM-dd");
  const endDate = format(addDays(startDate, 1), "yyyy-MM-dd");

  return { startDate, endDate };
};
