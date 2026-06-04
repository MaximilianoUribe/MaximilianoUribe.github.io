import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TopBar() {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  // Close the popover when clicking outside or pressing Escape
  useEffect(() => {
    function onClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <header className="topbar">
      <Link to="/" className="brand">
        Maximiliano Uribe Falcon
      </Link>

      <div className="bookclub" ref={wrapRef}>
        <button
          type="button"
          className="bookclub-btn"
          aria-haspopup="true"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Book Club
        </button>

        {open && (
          <div className="popover" role="menu">
            <Link
              to="/book-club"
              className="popover-link"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              Enter the Book Club
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
