import { Helmet } from "react-helmet";
import Header from "@/components/organisms/Header";
import ClientsSection from "@/components/organisms/ClientsSection";
import Footer from "@/components/organisms/Footer";

const Clientes = () => {
  return (
    <>
      <Helmet>
        <title>Clientes - Solucti | Casos de Éxito y Testimonios</title>
        <meta name="description" content="Conoce nuestros casos de éxito y testimonios de clientes satisfechos con nuestras soluciones de conectividad." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <ClientsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Clientes;