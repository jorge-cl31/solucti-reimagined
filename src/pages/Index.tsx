import { Helmet } from "react-helmet";
import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import Footer from "@/components/organisms/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Solucti - Soluciones de Conectividad Empresarial</title>
        <meta name="description" content="Especialistas en soluciones de conectividad para empresas. Mejoramos tu conectividad con tecnología de vanguardia y soporte especializado." />
        <meta name="keywords" content="conectividad, soluciones empresariales, internet, telecomunicaciones, soporte técnico" />
        <meta property="og:title" content="Solucti - Soluciones de Conectividad Empresarial" />
        <meta property="og:description" content="Especialistas en soluciones de conectividad para empresas" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
