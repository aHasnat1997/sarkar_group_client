export const dateFormate = (value: string) => {
  const dateString = value;
  // Parse the date string into a Date object
  const date = new Date(dateString);

  // Define options for toLocaleDateString
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  };

  // Format the date
  const formattedDate = date.toLocaleDateString('en-US', options);
  return (formattedDate);
};
