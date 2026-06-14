import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { ThemeProvider, useTheme } from './ThemeContext'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

function Layout({ children }) {
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  const isCreatePage = location.pathname === '/create-post'

  // Don't show shared layout on CreatePost (it has its own header)
  if (isCreatePage) {
    return <>{children}</>
  }

  return (
    <div className="app-layout">
      {/* Top App Bar */}
      <header className="top-bar">
        <div className="top-bar__brand">
          <span className="material-symbols-outlined top-bar__logo-icon">forum</span>
          <span className="top-bar__title">Threadit</span>
        </div>
        <div className="top-bar__actions">
          <button className="top-bar__icon-btn" aria-label="Search">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <span className="material-symbols-outlined">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <div className="top-bar__avatar">
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>person</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button
          className={`bottom-nav__item ${location.pathname === '/feed' || location.pathname === '/' ? 'bottom-nav__item--active' : ''}`}
          onClick={() => navigate('/feed')}
        >
          <span className="material-symbols-outlined">home</span>
          <span>Home</span>
        </button>
        <button className="bottom-nav__item">
          <span className="material-symbols-outlined">groups</span>
          <span>Communities</span>
        </button>
        <button
          className="bottom-nav__create"
          onClick={() => navigate('/create-post')}
        >
          <span className="material-symbols-outlined">add_circle</span>
          <span>Create</span>
        </button>
        <button className="bottom-nav__item">
          <span className="material-symbols-outlined">notifications</span>
          <span>Alerts</span>
        </button>
        <button className="bottom-nav__item">
          <span className="material-symbols-outlined">mail</span>
          <span>Inbox</span>
        </button>
      </nav>
    </div>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/about" element={<h1>About us</h1>} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App