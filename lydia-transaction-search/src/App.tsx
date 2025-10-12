import { Header } from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main className="container mx-auto px-4 py-4 md:px-6 md:py-8">
        <div className="bg-gradient-to-r from-primary-600 to-primary-500 dark:from-slate-800 dark:to-slate-700 
        rounded-2xl md:rounded-3xl p-6 md:p-12 text-center text-white shadow-xl">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Transaction Search
            </h1>
            <p className="text-blue-100 dark:text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
            Quickly find your Lydia transactions with our search interface.
            </p>
        </div>
      </main>
    </div>
  );
}

export default App;
