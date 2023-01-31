import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const Articles = React.lazy(() => import('./pages/Articles'));
const ArticleDetails = React.lazy(() => import('./pages/ArticleDetails'));

export default function Routing() {
  return (
    <Suspense fallback="Chargement...">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} exact />
          <Route path="/articles/:id" element={<ArticleDetails />} exact />
        </Routes>
      </Router>
    </Suspense>
  );
}
