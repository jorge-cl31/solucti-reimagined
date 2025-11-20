import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import CTAButton from "@/components/atoms/CTAButton";

const categories = [
	{
		key: "wilsonpro",
		name: "AMPLIFICADORES WILSON PRO",
		products: [
			{
				id: 1,
				name: "WilsonPro 1000",
				description: "Amplificador profesional para edificios grandes.",
				image: "/productos/wilsonpro1000.jpeg",
				features: ["Cobertura 1500m²", "Control automático", "Certificado SUBTEL"],
				price: "Desde $1.200.000"
			},
			{
				id: 2,
				name: "WilsonPro 4000",
				description: "Sistema avanzado para oficinas y empresas.",
				image: "/productos/wilsonpro2000.jpeg",
				features: ["Cobertura 3000m²", "Monitoreo remoto", "Alta ganancia"],
				price: "Desde $2.800.000"
			}
		]
	},
	{
		key: "antenas",
		name: "ANTENAS Y ACCESORIOS WILSON",
		products: [
			{
				id: 3,
				name: "Antena Yagi Wilson",
				description: "Antena direccional de alta ganancia para zonas rurales.",
				image: "/productos/reemplazar.png",
				features: ["18dBi ganancia", "Montaje universal", "Resistente a clima"],
				price: "Desde $180.000"
			},
			{
				id: 4,
				name: "Kit Splitter Wilson",
				description: "Accesorio para dividir señal en múltiples zonas.",
				image: "/productos/reemplazar.png",
				features: ["Fácil instalación", "Baja pérdida", "Compatibilidad universal"],
				price: "Desde $60.000"
			}
		]
	},
	{
		key: "weboost",
		name: "AMPLIFICADORES WEBOOST",
		products: [
			{
				id: 5,
				name: "weBoost Home MultiRoom",
				description: "Amplificador doméstico para varias habitaciones.",
				image: "/productos/reemplazar.png",
				features: ["Cobertura 300m²", "Fácil instalación", "Compatibilidad total"],
				price: "Desde $350.000"
			},
			{
				id: 6,
				name: "weBoost Drive Reach",
				description: "Amplificador móvil para vehículos.",
				image: "/productos/reemplazar.png",
				features: ["Uso en autos y camiones", "Potencia máxima", "Plug & Play"],
				price: "Desde $290.000"
			}
		]
	},
	{
		key: "sti",
		name: "SISTEMAS STI 4 y 5 BANDAS",
		products: [
			{
				id: 7,
				name: "STI 4 Bandas",
				description: "Sistema de amplificación para 4 bandas simultáneas.",
				image: "/productos/reemplazar.png",
				features: ["Cobertura 1000m²", "Multi-operador", "Control digital"],
				price: "Desde $950.000"
			},
			{
				id: 8,
				name: "STI 5 Bandas",
				description: "Amplificador premium para máxima cobertura y velocidad.",
				image: "/productos/reemplazar.png",
				features: ["Cobertura 2000m²", "5 bandas", "Gestión avanzada"],
				price: "Desde $1.500.000"
			}
		]
	}
];

const ProductsSection = () => {
	const [activeCategory, setActiveCategory] = useState(categories[0].key);

	const currentCategory = categories.find(cat => cat.key === activeCategory);

	return (
		<section id="productos" className="py-20 bg-surface/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
						Nuestros Productos
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Equipos de conectividad de última generación para soluciones empresariales e industriales
					</p>
				</div>

				{/* Categorías como pestañas */}
				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{categories.map(category => (
						<button
							key={category.key}
							onClick={() => setActiveCategory(category.key)}
							className={`px-6 py-2 rounded-full font-semibold transition-colors border
                ${activeCategory === category.key
									? "bg-primary text-primary-foreground border-primary"
									: "bg-background text-foreground border-border hover:bg-primary/10"}
              `}
							style={{ minWidth: 220 }}
						>
							{category.name}
						</button>
					))}
				</div>

				{/* Productos de la categoría activa */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{currentCategory?.products.map((product) => (
						<Card key={product.id} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden bg-card/50 backdrop-blur-sm border-border/20">
							{/* Product Image */}
							<div className="relative h-48 overflow-hidden">
								<img
									src={product.image}
									alt={product.name}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</div>

							<CardHeader className="pb-3">
								<CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
									{product.name}
								</CardTitle>
								<CardDescription className="text-muted-foreground line-clamp-2">
									{product.description}
								</CardDescription>
							</CardHeader>

							<CardContent className="space-y-4">
								{/* Features */}
								<div className="space-y-2">
									<h4 className="text-sm font-semibold text-foreground">Características:</h4>
									<div className="flex flex-wrap gap-1">
										{product.features.map((feature, index) => (
											<span
												key={index}
												className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
											>
												{feature}
											</span>
										))}
									</div>
								</div>

								{/* Price and CTA */}
								<div className="flex items-center justify-between pt-4 border-t border-border/20">
									<div className="text-lg font-bold text-primary">
										{product.price}
									</div>
									<CTAButton
										variant="primary"
										size="sm"
										className="rounded-full"
									>
										Cotizar
									</CTAButton>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Bottom CTA */}
				<div className="text-center mt-16">
					<div className="bg-card/30 backdrop-blur-sm border border-border/20 rounded-2xl p-8 max-w-2xl mx-auto">
						<h3 className="text-2xl font-bold mb-4 text-foreground">
							¿Necesitas una solución personalizada?
						</h3>
						<p className="text-muted-foreground mb-6">
							Nuestro equipo técnico puede diseñar e implementar la solución perfecta para tus necesidades específicas
						</p>
						<div className="flex justify-center">
							<CTAButton
								variant="primary"
								size="lg"
								className="rounded-full"
								href="/contacto"
							>
								Solicitar Consultoría Técnica
							</CTAButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductsSection;