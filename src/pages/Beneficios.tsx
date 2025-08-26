import { Helmet } from "react-helmet";
import Header from "@/components/organisms/Header";
import BenefitsSection from "@/components/organisms/BenefitsSection";
import Footer from "@/components/organisms/Footer";

const Beneficios = () => {
  return (
    <>
      <Helmet>
        <title>Beneficios - Solucti | Ventajas de Nuestras Soluciones</title>
        <meta name="description" content="Conoce los beneficios de elegir Solucti: mejora en conectividad, reducción de costos, soporte especializado y más." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <BenefitsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Beneficios;