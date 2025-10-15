import { useState } from 'react';
import { RotateCcw, Loader2, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Transaction } from '../models/transaction';
import { TransactionCard } from './TransactionCard';
import { TransactionSkeletonGroup } from './TransactionSkeleton';
import { ErrorCatcher } from './ErrorCatcher';
import { Modal } from './Modal';
import { TransactionDetails } from './TransactionDetails';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
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
  const { visibleItems, hasMore, isLoading } = useInfiniteScroll(filteredTransactions, 3);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  
  if (loading) {
    return (
      <motion.div 
        className="max-w-4xl mx-auto px-4 space-y-8 overflow-x-hidden"
        aria-label="Loading transactions" 
        role="status"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {Array.from({ length: 2 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <TransactionSkeletonGroup />
          </motion.div>
        ))}
      </motion.div>
    );
  }
  
  if (error) {
    return (
      <div className="text-center py-8 text-red-500" role="alert" aria-live="assertive">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="space-y-4" aria-live="polite" aria-label="Transaction results">

      {visibleItems.length > 0 ? (
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {groupTransactionsByWeek(visibleItems).map(({ weekKey, label, transactions }, groupIndex) => (
            <motion.div 
              key={weekKey} 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
            >
              <h2 className="text-lg font-semibold text-gray-500 dark:text-white dark:border-gray-700 pb-2">
                {label}
              </h2>
              <div className="grid gap-3">
                {transactions.map((transaction, transactionIndex) => (
                  <motion.div
                    key={transaction.paymentId}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (groupIndex * 0.1) + (transactionIndex * 0.05) }}
                  >
                    <ErrorCatcher>
                      <TransactionCard 
                        transaction={transaction}
                        onClick={setSelectedTransaction}
                      />
                    </ErrorCatcher>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
          
          {(hasMore || isLoading) && (
            <motion.div 
              className="text-center py-6 text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5 mx-auto mb-2" />
                </>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <ChevronDown className="h-5 w-5 animate-bounce" />
                </div>
              )}
            </motion.div>
          )}
        </div>
      ) : searchQuery ? (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400" role="status">
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
      
      <Modal
        isOpen={selectedTransaction !== null}
        onClose={() => setSelectedTransaction(null)}
        title="Transaction Details"
      >
        {selectedTransaction && (
          <TransactionDetails transaction={selectedTransaction} />
        )}
      </Modal>
    </div>
  );
};
