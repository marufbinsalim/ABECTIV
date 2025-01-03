const AboutSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-24" id="onas">
      <div className="mx-auto">
        {/* Title */}
        <h2 className="text-[#00C6DE] text-lg uppercase font-bold mb-4">
          O nás
        </h2>

        {/* About Text */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-4">Abectiv</h3>
          <p className="text-lg md:w-[80%]">
            Jsme profesionální společnost zaměřená na poskytování cenově
            dostupných a efektivních řešení v oblasti digitalizace procesů a
            business analytiky. S našimi službami můžete rychle a efektivně
            digitalizovat a automatizovat své procesy, a získat cenné poznatky z
            vašich dat.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="flex items-start">
            <span className="text-2xl mr-4">📧</span>
            <div>
              <h4 className="font-bold text-lg mb-4">Email</h4>
              <a href="mailto:obchod@abectiv.com" className="underline">
                obchod@abectiv.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start">
            <span className="text-2xl mr-4">📞</span>
            <div>
              <h4 className="font-bold text-lg mb-4">Telefon</h4>
              <a href="tel:+420601096995" className="underline">
                +420 601 096 995
              </a>
            </div>
          </div>

          {/* Office Address */}
          <div className="flex items-start">
            <span className="text-2xl mr-4">📍</span>
            <div>
              <h4 className="font-bold text-lg mb-4">Kancelář</h4>
              <address className="not-italic">
                Lisabonská 799/8
                <br />
                190 00 Praha 9<br />
                Česko
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
