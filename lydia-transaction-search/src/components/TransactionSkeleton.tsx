export const TransactionSkeleton = () => {
  return (
    <div className="p-6 shadow-sm border-b border-white animate-pulse">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full mt-3 flex-shrink-0"></div>
          <div className="flex-1">
            <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-3/4"></div>
            <div className="space-y-1">
              <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
              <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          </div>
        </div>
        
        <div className="text-right ml-6">
          <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-24"></div>
          <div className="flex items-center justify-end">
            <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TransactionSkeletonGroup = () => {
  return (
    <div className="space-y-4">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
      <div className="grid gap-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <TransactionSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};