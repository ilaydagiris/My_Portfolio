"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills & Certificates" }
];

export default function Navbar() {
  const pathname = usePathname();

  const handleClick = (clickedPath) => {
    // Mevcut sayfanın indeksini bul
    const currentIndex = links.findIndex(link => link.href === pathname);
    // Tıklanan sayfanın indeksini bul
    const clickedIndex = links.findIndex(link => link.href === clickedPath);
    
    // Yönü belirle
    let direction;
    if (clickedPath === "/") {
      // Home'a gidiyorsa soldan gelsin
      direction = -1;
    } else if (pathname === "/") {
      // Home'dan başka sayfaya gidiyorsa sağdan gelsin
      direction = 1;
    } else {
      // Diğer sayfalar arası geçişlerde indekse göre yön belirle
      direction = clickedIndex > currentIndex ? 1 : -1;
    }
    
    sessionStorage.setItem('slideDirection', direction.toString());
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-xl font-bold text-gray-800">My Portfolio - İlayda GİRİŞ</h1>
          <div className="flex space-x-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => handleClick(href)}
                className={`text-lg transition-colors duration-300 ${
                  pathname === href
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
