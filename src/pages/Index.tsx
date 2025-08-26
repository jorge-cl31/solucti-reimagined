import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import ServicesSection from "@/components/organisms/ServicesSection";
import ProductsSection from "@/components/organisms/ProductsSection";
import BenefitsSection from "@/components/organisms/BenefitsSection";
import ClientsSection from "@/components/organisms/ClientsSection";
import ContactSection from "@/components/organisms/ContactSection";
import Footer from "@/components/organisms/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <BenefitsSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
