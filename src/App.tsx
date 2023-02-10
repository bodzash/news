import React from "react";
import { ECategories } from "./globals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { Navbar } from "./components/Navbar";
import { Feed } from "./pages/Feed";

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Feed category={ECategories.None} />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
