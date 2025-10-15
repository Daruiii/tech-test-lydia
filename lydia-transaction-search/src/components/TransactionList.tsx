import { RotateCcw } from 'lucide-react';
import { Transaction } from '../models/transaction';
import { TransactionCard } from './TransactionCard';
import { groupTransactionsByWeek } from '../utils/transactionUtils';

interface TransactionListProps {
  filteredTransactions: Transaction[];
  searchQuery: string;
  loading: boolean;
  error: string | null;
}

export const TransactionList = ({ 
  filteredTransactions, 
  searchQuery, 
  loading, 
  error
}: TransactionListProps) => {
  
  if (loading) {
    return ( // lazy loading avc fausses cards ici, ne pas oublier
      <div className="text-center py-8 text-gray-600 dark:text-gray-400">
        Transactions are loading...
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="space-y-4">

      {filteredTransactions.length > 0 ? (
        <div className="max-w-4xl mx-auto space-y-8">
          {groupTransactionsByWeek(filteredTransactions).map(({ weekKey, label, transactions }) => (
            <div key={weekKey} className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-500 dark:text-white dark:border-gray-700 pb-2">
                {label}
              </h2>
              <div className="grid gap-3">
                {transactions.map(transaction => (
                  <TransactionCard 
                    key={transaction.paymentId} 
                    transaction={transaction} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : searchQuery ? (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          <p>We couldn't find any transactions matching your search.
             Please modify your search or filters to get results.</p>
            <div className="flex justify-center">
            <button
              className="mt-4 px-4 py-2 bg-gray-200 text-gray-500 rounded-full hover:bg-gray-300 transition flex items-center gap-2"
              onClick={() => { window.location.reload(); }}>
              <RotateCcw size={18} />
              Try again
            </button>
            </div>
        </div>
      ) : null}
    </div>
  );
};