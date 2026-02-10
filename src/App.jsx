import { BrowserRouter } from "react-router-dom";
import { SiteProvider } from "./context/SiteContext";
import MainLayout from "./layouts/MainLayout";
import { ShopProvider } from "./context/ShopContext";

export default function App() {
  return (
    <SiteProvider>
      <ShopProvider>
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </ShopProvider>
    </SiteProvider>
  );
}
