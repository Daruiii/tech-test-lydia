import { useState, useEffect } from 'react';
import { Transaction, TransactionCollection } from '../models/transaction';
import { LOADING_DELAY, ERROR_MESSAGES } from '../config/constants';
import transactionsData from '../assets/transactions.json';
export const useTransactions = () => {
  const [transactions, setTransactions] = useState<TransactionCollection>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, LOADING_DELAY));
        
        const data = transactionsData as Transaction[];
        setTransactions(data);
        setError(null);
      } catch {
        setError(ERROR_MESSAGES.LOADING_FAILED);
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