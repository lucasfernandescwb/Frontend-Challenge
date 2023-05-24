import { useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [show, setShow] = useState<boolean>(true)
  const [lastScrollY, setLastScrollY] = useState<number>(0)

  const controlHeader = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(true)
      } else {
        setShow(false)
      }

      setLastScrollY(window.scrollY)
    }
  }, [lastScrollY])

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader)

      return () => {
        window.removeEventListener("scroll", controlHeader)
      }
    }
  }, [lastScrollY, controlHeader])

  return (
    <header className={`header ${show && "top-[-64px]"}`}>
      <nav className="wrapper flex items-center justify-center h-full">
        <Link to={"/"} className="select-none">
          <p className="font-display drop-shadow-sm">
            the<span className="text-4xl font-bold">Trailers</span>
          </p>
        </Link>
      </nav>
    </header>
  )
}

export default Header
