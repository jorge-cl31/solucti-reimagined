import { Helmet } from "react-helmet";
import Header from "@/components/organisms/Header";
import ProductsSection from "@/components/organisms/ProductsSection";
import Footer from "@/components/organisms/Footer";

const Productos = () => {
  return (
    <>
      <Helmet>
        <title>Productos - Solucti | Equipos de Conectividad Empresarial</title>
        <meta name="description" content="Descubre nuestros productos de conectividad: routers industriales, antenas, amplificadores y más equipos para soluciones empresariales." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <ProductsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Productos;