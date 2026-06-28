import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "client-works", label: "Client Works" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "learning-logs", label: "Learning Logs" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const handleSectionClick = (sectionId) => {
    setMenuOpen(false);
    setActiveSection(sectionId);

    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 250);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      let current = "about";

      for (const item of navItems) {
        const section = document.getElementById(item.id);

        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            current = item.id;
          }
        }
      }

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <motion.nav
      ref={navRef}
      className="navbar"
      initial={{ y: -40, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}

      <Link
        to="/"
        className="nav-brand"
        onClick={(e) => {
          setMenuOpen(false);

          if (location.pathname === "/") {
            e.preventDefault();

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        }}
      >
        <img
          src={logo}
          alt="Kowshik Mahi Logo"
          className="nav-logo"
        />

        <span className="brand-text">
          Kowshik Mahi
        </span>
      </Link>

      {/* Desktop Navigation */}

      <div className="nav-links">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSectionClick(item.id)}
            className={
              activeSection === item.id
                ? "nav-active"
                : ""
            }
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Admin */}

      <Link
        to="/admin"
        className="resume-nav-btn"
      >
        Admin
      </Link>

      {/* Mobile Hamburger */}

      <button
        className={`mobile-menu-btn ${
          menuOpen ? "open" : ""
        }`}
        onClick={() =>
          setMenuOpen((prev) => !prev)
        }
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-dropdown glass"
            initial={{
              opacity: 0,
              y: -18,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -14,
              scale: 0.97,
            }}
            transition={{
              duration: 0.22,
              ease: "easeOut",
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  handleSectionClick(item.id)
                }
                className={
                  activeSection === item.id
                    ? "mobile-nav-active"
                    : ""
                }
              >
                {item.label}
              </button>
            ))}

            <Link
              to="/admin"
              className="mobile-admin-btn"
              onClick={() => setMenuOpen(false)}
            >
              Admin
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}