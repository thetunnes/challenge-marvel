import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { HeroPage } from './pages/Hero'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hero/:heroId" element={<HeroPage />} />
    </Routes>
  )
}
