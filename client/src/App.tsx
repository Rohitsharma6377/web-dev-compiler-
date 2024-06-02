import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homee from "./components/home/Homee";
import Compile from "./components/Compile";
import Notfound from "./components/Notfound";
import Header from "./components/Header";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <>
    
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
          <Routes>
            <Route path="/" element={<Homee />} />
            <Route path="/compile" element={<Compile />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
      </ThemeProvider>
    
    </>
  );
}
