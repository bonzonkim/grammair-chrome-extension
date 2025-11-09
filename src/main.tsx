import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import Layout from './component/Layout.tsx';
import Info from './Info.tsx';

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/info" element={<Info />} />
      </Route>
    </Routes>
  </HashRouter>
</StrictMode>,
)
