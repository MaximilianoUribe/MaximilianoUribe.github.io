import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import Home from './pages/Home.tsx'
import BookClub from './pages/BookClub.tsx'
import './App.css'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-club" element={<BookClub />} />
      </Routes>
    </Layout>
  )
}
