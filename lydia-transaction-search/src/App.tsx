import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TransactionSearchPage } from "./pages/TransactionSearchPage";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <TransactionSearchPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
