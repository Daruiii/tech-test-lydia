interface GradientContainerProps {
  title: string;
  description: string;
  className?: string;
}

export const GradientContainer = ({ 
  title,
  description,
  className = "" 
}: GradientContainerProps) => {
  return (
    <div className={`bg-gradient-to-t from-primary-600 to-primary-500 dark:from-slate-800 dark:to-slate-700 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center text-white shadow-xl border-4 border-white/30 ${className}`}>
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
        {title}
      </h1>
      <p className="text-blue-100 dark:text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};
