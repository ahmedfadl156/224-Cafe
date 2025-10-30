import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Users/Home";
import About from "./pages/Users/About";
import Menu from "./pages/Users/Menu";
import ContactUs from "./pages/Users/ContactUs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />}/>
          <Route path="/contact" element={<ContactUs />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
  )
}
