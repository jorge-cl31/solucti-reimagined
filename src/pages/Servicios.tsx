import { Helmet } from "react-helmet";
import Header from "@/components/organisms/Header";
import ServicesSection from "@/components/organisms/ServicesSection";
import Footer from "@/components/organisms/Footer";

const Servicios = () => {
  return (
    <>
      <Helmet>
        <title>Servicios - Solucti | Soluciones de Conectividad</title>
        <meta name="description" content="Ofrecemos servicios especializados en conectividad: instalación, mantenimiento, consultoría técnica y soporte 24/7." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Servicios;