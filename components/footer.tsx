const FooterSection = () => {
  return (
    <footer className="bg-black text-white py-8 px-24">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo and Slogan */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <img src="/logo.webp" alt="Abectiv Logo" className="h-8" />
          {/* seperator */}
          <div className="h-8 w-0.5 bg-white"></div>

          {/* Slogan */}
          <span className="text-sm font-medium">
            Automatizace pro váš business
          </span>
        </div>

        {/* Cookie Settings */}
        <div>
          <a href="#" className="text-sm font-medium hover:underline">
            Nastavení cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
