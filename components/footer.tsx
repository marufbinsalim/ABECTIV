import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 md:px-24">
      <div className="mx-auto flex items-center justify-between flex-wrap">
        {/* Logo and Slogan */}
        <div className="flex justify-evenly items-center w-full md:w-max gap-2">
          {/* Logo */}
          <Link href="/#hero">
            <img src="/logo.webp" alt="Abectiv Logo" className="block h-8" />
          </Link>
          {/* seperator */}
          <div className="h-8 w-0.5 bg-white"></div>

          {/* Slogan */}
          <p className="text-sm font-medium block">
            Automatizace pro váš business
          </p>
        </div>

        {/* Cookie Settings */}
        <div className="mt-4 md:mt-0">
          <a href="#" className="text-sm font-medium hover:underline">
            Nastavení cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
