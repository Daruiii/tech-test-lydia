import { CheckCircle2, Clock, XCircle, User, Calendar, Hash, CreditCard } from 'lucide-react';
import { Transaction } from '../models/transaction';
import { formatTransactionDate } from '../utils/dateUtils';

interface TransactionDetailsProps {
  transaction: Transaction;
}

const getStatusIcon = (status: string) => {
  const iconProps = { size: 20, className: "" };
  
  switch (status) {
    case 'completed': 
      return <CheckCircle2 {...iconProps} className="text-green-600 dark:text-green-400" />;
    case 'pending': 
      return <Clock {...iconProps} className="text-yellow-600 dark:text-yellow-400" />;
    case 'canceled': 
      return <XCircle {...iconProps} className="text-red-600 dark:text-red-400" />;
    default: 
      return <Clock {...iconProps} className="text-gray-500 dark:text-gray-400" />;
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'completed': return 'Completed';
    case 'pending': return 'Pending';
    case 'canceled': return 'Canceled';
    default: return status;
  }
};

export const TransactionDetails = ({ transaction }: TransactionDetailsProps) => {
  const DetailRow = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
      <div className="mt-0.5 text-gray-600 dark:text-gray-400">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <dt className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
          {label}
        </dt>
        <dd className="text-sm text-gray-900 dark:text-white break-words">
          {value}
        </dd>
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="text-center py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {transaction.amount}
        </div>
        <div className="flex items-center justify-center gap-2 text-sm">
          {getStatusIcon(transaction.status)}
          <span className="font-medium">{getStatusText(transaction.status)}</span>
        </div>
      </div>

      <dl className="space-y-3">
        <DetailRow 
          icon={<Hash size={18} />}
          label="Transaction ID"
          value={transaction.paymentId}
        />
        
        <DetailRow 
          icon={<CreditCard size={18} />}
          label="Label"
          value={transaction.label}
        />
        
        <DetailRow 
          icon={<User size={18} />}
          label="From"
          value={`${transaction.firstname} ${transaction.lastname}`}
        />
        
        <DetailRow 
          icon={<User size={18} />}
          label="To"
          value={`${transaction.receiverFirstname} ${transaction.receiverLastname || ''}`}
        />
        
        <DetailRow 
          icon={<Calendar size={18} />}
          label="Date"
          value={formatTransactionDate(transaction.date)}
        />
        
        {transaction.statusErrorDisplay && (
          <DetailRow 
            icon={<XCircle size={18} className="text-red-500" />}
            label="Error"
            value={transaction.statusErrorDisplay}
          />
        )}
      </dl>
    </div>
  );
};