import { Header } from "./components/Header";
import { GradientContainer } from "./components/GradientContainer";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 md:px-6 flex-grow">
        <GradientContainer 
          title="Transaction Search"
          description="Quickly find your Lydia transactions with our search interface."
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
