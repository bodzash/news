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
          <Route path="/" element={<Feed category={ECategories.None} />} />
          <Route
            path="/business"
            element={<Feed category={ECategories.Business} />}
          />
          <Route
            path="/entertainment"
            element={<Feed category={ECategories.Entertainment} />}
          />
          <Route
            path="/environment"
            element={<Feed category={ECategories.Environment} />}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
