import React from "react";
import { ECategories } from "./globals";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
            path="business"
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
          <Route path="/food" element={<Feed category={ECategories.Food} />} />
          <Route
            path="/health"
            element={<Feed category={ECategories.Health} />}
          />
          <Route
            path="/politics"
            element={<Feed category={ECategories.Politics} />}
          />
          <Route
            path="/science"
            element={<Feed category={ECategories.Science} />}
          />
          <Route
            path="/sports"
            element={<Feed category={ECategories.Sports} />}
          />
          <Route
            path="/technology"
            element={<Feed category={ECategories.Technology} />}
          />
          <Route path="/top" element={<Feed category={ECategories.Top} />} />
          <Route
            path="/world"
            element={<Feed category={ECategories.World} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
