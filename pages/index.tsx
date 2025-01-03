import AboutSection from "@/components/about";
import BusinessAnalyticsSection from "@/components/analytics";
import AutomationSection from "@/components/automation";
import AutomationInterestSection from "@/components/automationInterest";
import { COLORS } from "@/components/colors";
import FooterSection from "@/components/footer";
import Navbar from "@/components/navbar";
import ProductivitySection from "@/components/ProductivitySection";
import ProjectSlider from "@/components/project";
import TestimonialSlider from "@/components/testimonials";
import { useAnimationColors } from "@/hooks/useAnimationColors";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import textContents from "@/components/textContents";
import Hero from "@/components/hero";

export default function Home() {
  const { color, index } = useAnimationColors(textContents);
  return (
    <div
      className={`flex flex-col h-dvh text-white ${color === COLORS.black ? "overflow-auto" : "overflow-hidden"}`}
    >
      <Navbar color={Object.values(COLORS)[index]} />
      <Hero index={index} color={color} />
      <ProductivitySection />
      <AutomationInterestSection />
      <ProjectSlider />
      <BusinessAnalyticsSection />
      <AutomationSection />
      <TestimonialSlider />
      <AboutSection />
      <FooterSection />
    </div>
  );
}
