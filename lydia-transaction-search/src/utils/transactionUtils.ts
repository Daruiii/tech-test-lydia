import { Transaction } from '../models/transaction';
import { getMonday, formatWeekLabel } from './dateUtils';

export interface WeekGroup {
  weekKey: string;
  label: string;
  transactions: Transaction[];
}

export const groupTransactionsByWeek = (transactions: Transaction[]): WeekGroup[] => {
  const groups = new Map<string, Transaction[]>();
  
  transactions.forEach(transaction => {
    const monday = getMonday(transaction.date);
    const weekKey = monday.toISOString().split('T')[0];
    
    if (!groups.has(weekKey)) {
      groups.set(weekKey, []);
    }
    groups.get(weekKey)!.push(transaction);
  });
  
  return Array.from(groups.entries())
    .sort(([a], [b]) => new Date(b).getTime() - new Date(a).getTime())
    .map(([weekKey, transactions]) => ({
      weekKey,
      label: formatWeekLabel(transactions[0].date),
      transactions: transactions.sort((a, b) => b.date - a.date)
    }));
};