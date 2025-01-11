import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Page from './page.jsx'
import Home from './Home.jsx'
import Mainpage2 from './analysis/mainpage2.jsx'
import SweaterData from './python/test.jsx'
import Sidebar from './components/sidebar.jsx'
import Subvssub from './analysis/subvssub.jsx'
import Catvscat from './analysis/catvssub.jsx'
import Finalproduct from './analysis/finalproduct.jsx'
import ProvsPro from './analysis/provspro.jsx'
import Subcat from './analysis/subcat.jsx'
import CompareData from './analysis/datareceiver.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sidebar" element={<Sidebar />} /> 
        <Route path="/Category/sweater" element={<SweaterData />} />
        <Route path="/catvscat" element={<Mainpage2 />} />
        <Route path="/page" element={<Page />} />
        <Route path="/subvssub" element={<Subvssub />} />
        <Route path="/category" element={<Catvscat />} />
        <Route path="/finalproduct" element={<Finalproduct />} />
        <Route path="/provspro" element={<ProvsPro />} />
        <Route path="/subcat" element={<Subcat />} />
        <Route path="/data" element={<CompareData />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>

)
