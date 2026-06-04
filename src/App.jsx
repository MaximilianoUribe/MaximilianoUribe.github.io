import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import BookClub from './pages/BookClub.jsx'
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
