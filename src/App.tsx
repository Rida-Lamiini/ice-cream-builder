import { IceCreamProvider } from "@/context/IceCreamContext";
import IceCreamBuilder from "./components/IceCreamBuilder";

function App() {
  return (
    <IceCreamProvider>
      <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              🍦 Ice Cream Builder
            </h1>
            <p className="text-gray-600">
              Create your perfect ice cream roll with custom flavors, sauces,
              and nuts!
            </p>
          </header>

          <IceCreamBuilder />
        </div>
      </div>
    </IceCreamProvider>
  );
}

export default App;
