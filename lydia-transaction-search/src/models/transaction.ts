export interface Transaction {
  paymentId: string;
  receiverFirstname: string;
  receiverLastname: string | null;
  transactionType: string;
  memberId: number;
  label: string;
  firstname: string;
  lastname: string;
  amount: string;
  date: number; // en Unix timestamp
  statusErrorDisplay: string;
  status: 'completed' | 'pending' | 'canceled';
}

export type TransactionCollection = Transaction[];