export const getMonday = (timestamp: number): Date => {
  const date = new Date(timestamp * 1000);
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(date.setDate(diff));
  return monday;
};

export const formatWeekLabel = (timestamp: number): string => {
  const monday = getMonday(timestamp);
  const now = new Date();
  const currentMonday = getMonday(Math.floor(now.getTime() / 1000));
  
  if (monday.getTime() === currentMonday.getTime()) {
    return 'This week';
  }
  
  const lastWeek = new Date(currentMonday);
  lastWeek.setDate(lastWeek.getDate() - 7);
  if (monday.getTime() === lastWeek.getTime()) {
    return 'Last week';
  }
  
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  return `Week of ${monday.toLocaleDateString('en-US', { day: '2-digit', month: 'long' })}`;
};

export const formatTransactionDate = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    weekday: 'long',
    day: '2-digit',
    month: 'short'
  });
};