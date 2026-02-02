import { BrowserRouter } from "react-router-dom";
import { SiteProvider } from "./context/SiteContext";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <SiteProvider>
      <BrowserRouter>
      <MainLayout />
      </BrowserRouter>
    </SiteProvider>
  );
}
