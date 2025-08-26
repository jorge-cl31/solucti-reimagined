import { Helmet } from "react-helmet";
import Header from "@/components/organisms/Header";
import ContactSection from "@/components/organisms/ContactSection";
import Footer from "@/components/organisms/Footer";

const Contacto = () => {
  return (
    <>
      <Helmet>
        <title>Contacto - Solucti | Contáctanos para tu Proyecto</title>
        <meta name="description" content="Contáctanos para recibir asesoría personalizada sobre soluciones de conectividad. Estamos aquí para ayudarte." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contacto;