import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About, Blog, Cases, Home, Pricing, Services } from "../pages";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}
