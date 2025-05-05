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
import Link from "next/link";
import textContents from "@/components/textContents";
import Hero from "@/components/hero";
import ProcessSection from "@/components/process";
import EmailSend from "@/components/emailSend";
import { useState } from "react";

export default function Home() {
  const { color, index } = useAnimationColors(textContents);
  const [emailModalVisible, setEmailModalVisible] = useState(false);
  return (
    <div
      className={`relative flex flex-col h-dvh text-white ${color === COLORS.black && !emailModalVisible ? "overflow-auto" : "overflow-hidden"}`}
    >
      <EmailSend
        emailModalVisible={emailModalVisible && color === COLORS.black}
        setEmailModalVisible={setEmailModalVisible}
      />
      <Navbar
        color={Object.values(COLORS)[index]}
        setEmailModalVisible={setEmailModalVisible}
      />
      <Hero
        index={index}
        color={color}
        setEmailModalVisible={setEmailModalVisible}
      />
      <ProductivitySection />
      <AutomationInterestSection />
      <ProjectSlider />
      <ProcessSection />
      <BusinessAnalyticsSection />
      <AutomationSection setEmailModalVisible={setEmailModalVisible} />
      <TestimonialSlider />
      <AboutSection />
      <FooterSection />
    </div>
  );
}
