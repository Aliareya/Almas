import MainLayout from "./layouts/MainLayout";

export default function App() {
  console.log(import.meta.env.VITE_API_URL)
  return (
    <MainLayout/>
  );
}
