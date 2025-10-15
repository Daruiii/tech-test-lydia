import { CheckCircle2, Clock, XCircle } from "lucide-react";
import { Transaction } from "../models/transaction";
import { formatTransactionDate } from "../utils/dateUtils";

interface TransactionCardProps {
  transaction: Transaction;
  onClick?: (transaction: Transaction) => void;
}

const getStatusIcon = (status: string) => {
  const iconProps = { size: 18, className: "" };

  switch (status) {
    case "completed":
      return (
        <CheckCircle2
          {...iconProps}
          className="text-green-600 dark:text-green-400"
        />
      );
    case "pending":
      return (
        <Clock
          {...iconProps}
          className="text-yellow-600 dark:text-yellow-400"
        />
      );
    case "canceled":
      return (
        <XCircle {...iconProps} className="text-red-600 dark:text-red-400" />
      );
    default:
      return (
        <Clock {...iconProps} className="text-gray-500 dark:text-gray-400" />
      );
  }
};

const getStatusTitle = (status: string) => {
  switch (status) {
    case "completed":
      return "Transaction completed";
    case "pending":
      return "Transaction pending";
    case "canceled":
      return "Transaction canceled";
    default:
      return status;
  }
};

export const TransactionCard = ({ transaction, onClick }: TransactionCardProps) => {
  // TEST ERROR CATCHER (juste pour l'afficher)
  if (transaction.paymentId === "9e6a7a67-6ad3-4b50-9381-65145f9d89f5") {
    throw new Error("Test error for ErrorCatcher");
  }

  return (
    <div
      className="p-6 shadow-sm border-b border-white hover:border-primary-500 transition duration-500 cursor-pointer"
      role="article"
      aria-label={`Transaction: ${transaction.label}`}
      onClick={() => onClick?.(transaction)}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start gap-3 flex-1 w-full">
          <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full mt-3 flex-shrink-0"></div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
              {transaction.label}
            </h3>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <p>
                <span
                  className="font-medium truncate max-w-[140px] inline-block align-bottom"
                  title={`${transaction.firstname} ${transaction.lastname}`}
                >
                  {`${transaction.firstname} ${transaction.lastname}`}
                </span>
                {" → "}
                <span
                  className="truncate max-w-[140px] inline-block align-bottom"
                  title={`${transaction.receiverFirstname} ${
                    transaction.receiverLastname || ""
                  }`}
                >
                  {`${transaction.receiverFirstname} ${
                    transaction.receiverLastname || ""
                  }`}
                </span>
              </p>
              <p>{formatTransactionDate(transaction.date)}</p>
            </div>
          </div>
        </div>

        <div className="text-right ml-6">
          <p className="font-bold text-xl text-gray-900 dark:text-white mb-2 whitespace-nowrap">
            {transaction.amount}
          </p>
          <div
            className="flex items-center justify-end"
            title={getStatusTitle(transaction.status)}
            aria-label={`Status: ${getStatusTitle(transaction.status)}`}
          >
            {getStatusIcon(transaction.status)}
          </div>
        </div>
      </div>

      {transaction.statusErrorDisplay && (
        <p className="pt-3 text-sm text-red-600 dark:text-red-400">
          {transaction.statusErrorDisplay}
        </p>
      )}
    </div>
  );
};
