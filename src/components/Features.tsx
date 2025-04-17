
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const features = [
  {
    id: 1,
    title: "Comptes Bancaires",
    description: "Synchronisez tous vos comptes bancaires français et européens",
    images: [
      "/lovable-uploads/14e1832a-f86f-4ae3-9d46-bea4944f3dd9.png",
      "/lovable-uploads/2a6a5a86-b14d-4933-a2a9-d0e1d5bcdcb1.png"
    ]
  },
  {
    id: 2,
    title: "Investissements",
    description: "Suivez vos investissements en actions, ETF et crypto-monnaies",
    images: [
      "/lovable-uploads/48f5cc52-f093-4909-bf5b-0f784aaee850.png",
      "/lovable-uploads/4b14f6ca-724c-4bf2-93be-a4a59647e04b.png"
    ]
  },
  {
    id: 3,
    title: "Immobilier",
    description: "Gérez votre patrimoine immobilier et vos crédits",
    images: [
      "/lovable-uploads/5f628b49-e0d6-4237-bd0a-37f10dd502e1.png",
      "/lovable-uploads/7c109932-9a59-4d89-8b8c-ce48414a9ea6.png"
    ]
  },
  {
    id: 4,
    title: "Assurance Vie",
    description: "Optimisez vos contrats d'assurance vie et leur performance",
    images: [
      "/lovable-uploads/a0c21298-b6d2-4958-9ab5-06fe3ff334b4.png",
      "/lovable-uploads/abd70d81-3502-4bb0-b356-4f5ac235df84.png"
    ]
  }
];

const Features = () => {
  const [activeFeature, setActiveFeature] = React.useState(features[0]);

  return (
    <section className="features-new bg-[#F6F6F7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1F2C] mb-4">
            Tous vos produits financiers en un seul endroit
          </h2>
          <p className="text-[#8E9196] text-lg max-w-2xl mx-auto">
            Connectez et suivez facilement tous vos produits financiers pour une gestion optimale de votre patrimoine
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4">
            <div className="space-y-4">
              {features.map((feature) => (
                <Button
                  key={feature.id}
                  variant={activeFeature.id === feature.id ? "default" : "outline"}
                  className={`w-full justify-start text-left p-6 h-auto ${
                    activeFeature.id === feature.id 
                      ? "bg-[#9b87f5] text-white" 
                      : "hover:bg-[#F1F0FB] text-[#8E9196]"
                  }`}
                  onClick={() => setActiveFeature(feature)}
                >
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className={`text-sm ${
                      activeFeature.id === feature.id 
                        ? "text-white/90" 
                        : "text-[#8E9196]"
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          <div className="md:col-span-8">
            <Carousel className="w-full">
              <CarouselContent>
                {activeFeature.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-white p-1 rounded-xl shadow-lg">
                      <img
                        src={image}
                        alt={`${activeFeature.title} exemple ${index + 1}`}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
