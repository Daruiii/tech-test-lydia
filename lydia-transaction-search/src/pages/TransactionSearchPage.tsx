import { useState } from 'react';
import { GradientContainer } from '../components/GradientContainer';
import { SearchBar } from '../components/SearchBar';
import { TransactionList } from '../components/TransactionList';
import { useTransactions } from '../hooks/useTransactions';
import { useDebounce } from '../hooks/useDebounce';
import { DEBOUNCE_DELAY } from '../config/constants';

export const TransactionSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, DEBOUNCE_DELAY);
  const { transactions, loading, error, filterByLabel } = useTransactions();
  
  const filteredTransactions = debouncedSearchQuery ? filterByLabel(debouncedSearchQuery) : transactions;

  return (
    <div className="container mx-auto px-4 md:px-6 space-y-8 pt-20">
      <GradientContainer 
        title="Transaction Search"
        description="Quickly find Lydia transactions with our search interface."
      />
      <div className="text-left text-black dark:text-white text-4xl font-semibold mx-auto max-w-4xl flex items-center gap-4">
        <span>History</span>
        <span className="text-lg text-gray-600 dark:text-gray-400">
          ({filteredTransactions.length} transaction{filteredTransactions.length === 1 ? '' : 's'})
        </span>
      </div>
      <SearchBar 
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search"
      />
      
      <TransactionList 
        filteredTransactions={filteredTransactions}
        searchQuery={debouncedSearchQuery}
        loading={loading}
        error={error}
      />
    </div>
  );
};