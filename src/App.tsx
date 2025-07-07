import { IceCreamProvider } from "./context/IceCreamContext";
import IceCreamBuilder from "./components/IceCreamBuilder";
import "./index.css";

function App() {
  return (
    <IceCreamProvider>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <IceCreamBuilder />
      </div>
    </IceCreamProvider>
  );
}

export default App;
