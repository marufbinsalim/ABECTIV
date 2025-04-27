import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { COLORS } from "./colors";

function Navbar({
  color,
  setEmailModalVisible,
}: {
  color: string;
  setEmailModalVisible: (visible: boolean) => void;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`sticky z-10 top-0 left-0 w-full h-16 min-h-max text-white flex items-center justify-between py-3 px-6 transition-all
        duration-1000 ease-in-out
        ${color}`}
    >
      <div onClick={() => window.location.replace("/")}>
        <img src="/logo.webp" alt="Logo" className="h-8" />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <XIcon className="h-8 w-8" />
        ) : (
          <MenuIcon className="h-8 w-8" />
        )}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/#digitalizace">
          <p>Digitalizace</p>
        </Link>
        <Link href="/#analytika">
          <p>Analytika</p>
        </Link>
        <Link href="/#reference">
          <p>Reference</p>
        </Link>
        <Link href="/#onas">
          <p>O nás</p>
        </Link>
        <p
          className="bg-[#121212] px-4 py-2 rounded-full cursor-pointer"
          onClick={() => {
            if (color === COLORS.black) setEmailModalVisible(true);
          }}
        >
          Konzultace zdarma
        </p>
        <p
          className="bg-[#A1FAFF] border-[#EBFFFE] border rounded-full px-4 py-2 text-black cursor-pointer"
          onClick={() => {
            if (color === COLORS.black) setEmailModalVisible(true);
          }}
        >
          Chci automatizovat
        </p>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-[54px] left-0 w-full text-white  md:hidden min-h-[93dvh] bg-[#00000093]"
          >
            <div
              className={`flex flex-col items-center space-y-4 py-8 transition-all duration-1000 ease-in-out ${color} border-b border-b-[#dbdbdb40]`}
            >
              <Link href="/#digitalizace">
                <p onClick={toggleMobileMenu}>Digitalizace</p>
              </Link>
              <Link href="/#analytika">
                <p onClick={toggleMobileMenu}>Analytika</p>
              </Link>
              <Link href="/#reference">
                <p onClick={toggleMobileMenu}>Reference</p>
              </Link>
              <Link href="/#onas">
                <p onClick={toggleMobileMenu}>O nás</p>
              </Link>
              <p
                className="bg-[#121212] px-4 py-2 rounded-full mt-6"
                onClick={() => {
                  if (color === COLORS.black) setEmailModalVisible(true);
                  toggleMobileMenu();
                }}
              >
                Konzultace zdarma
              </p>
              <p
                className="bg-[#A1FAFF] border-[#EBFFFE] border rounded-full px-4 py-2 text-black"
                onClick={() => {
                  if (color === COLORS.black) setEmailModalVisible(true);
                  toggleMobileMenu();
                }}
              >
                Chci automatizovat
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
