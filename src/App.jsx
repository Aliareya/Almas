import { SiteProvider } from "./context/SiteContext";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <SiteProvider>
      <MainLayout />
    </SiteProvider>
  );
}
