import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/menu/Menu";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./contexts/AuthContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
       <Outlet/>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
