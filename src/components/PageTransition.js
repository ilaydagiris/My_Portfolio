"use client";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const pages = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/experience", label: "Experience" },
  { path: "/skills", label: "Skills & Certificates" }
];

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [direction, setDirection] = useState(0);
  const currentIndex = pages.findIndex(page => page.path === pathname);

  const navigate = (direction) => {
    let nextIndex;
    if (direction === 1) {
      nextIndex = currentIndex === pages.length - 1 ? 0 : currentIndex + 1;
    } else {
      nextIndex = currentIndex === 0 ? pages.length - 1 : currentIndex - 1;
    }
    const nextPath = pages[nextIndex].path;
    setDirection(direction);
    sessionStorage.setItem('slideDirection', direction.toString());
    router.push(nextPath);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  useEffect(() => {
    const storedDirection = sessionStorage.getItem('slideDirection');
    if (storedDirection) {
      setDirection(parseInt(storedDirection));
    }
  }, [pathname]);

  return (
    <div className="min-h-screen pt-16"> {/* Navbar için padding */}
      <motion.div
        key={pathname}
        initial={{ x: direction * 300 }}
        animate={{ x: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.4
        }}
      >
        {children}
      </motion.div>

      {/* Navigasyon Okları */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2">
        <button
          onClick={() => navigate(-1)}
          className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2">
        <button
          onClick={() => navigate(1)}
          className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Sayfa Göstergesi */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {pages.map((page, index) => (
          <button
            key={page.path}
            onClick={() => {
              const direction = index > currentIndex ? 1 : -1;
              navigate(direction);
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex 
                ? "bg-blue-500" 
                : "bg-white/30 hover:bg-white/50"
            }`}
            title={page.label}
          />
        ))}
      </div>
    </div>
  );
} 