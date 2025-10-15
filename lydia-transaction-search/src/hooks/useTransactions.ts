import { useState, useEffect } from 'react';
import { Transaction, TransactionCollection } from '../models/transaction';
import transactionsData from '../assets/transactions.json';
export const useTransactions = () => {
  const [transactions, setTransactions] = useState<TransactionCollection>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const data = transactionsData as Transaction[];
        setTransactions(data);
        setError(null);
      } catch (err) {
        setError('Error loading transactions');
        console.error('Error loading transactions:', err);
      } finally {
        setLoading(false);
      }
    };

    loadTransactions();
  }, []);


  const filterByLabel = (query: string): TransactionCollection => {
    if (!query.trim()) return transactions;
    
    return transactions.filter(transaction => 
      transaction.label.toLowerCase().includes(query.toLowerCase())
    );
  };


  const findById = (paymentId: string): Transaction | undefined => {
    return transactions.find(transaction => transaction.paymentId === paymentId);
  };

  return {
    transactions,
    loading,
    error,
    filterByLabel,
    findById,
    count: transactions.length
  };
};