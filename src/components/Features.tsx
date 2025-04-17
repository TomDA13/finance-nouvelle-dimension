
import { useState } from 'react';
import { Building, Bitcoin, PiggyBank, Rocket, Handshake, Diamond } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Product {
  id: string;
  name: string;
  icon: React.ReactNode;
  examples: Array<{
    name: string;
    value: string;
    change: string;
    changePercent: string;
    logo: string;
  }>;
}

const products: Product[] = [
  {
    id: 'immobilier',
    name: 'Immobilier',
    icon: <Building className="h-6 w-6" />,
    examples: [
      {
        name: "Studio Paris",
        value: "280 000 €",
        change: "+15 000 €",
        changePercent: "+5.66%",
        logo: "🏠"
      },
      {
        name: "Maison Bordeaux",
        value: "450 000 €",
        change: "+22 000 €",
        changePercent: "+5.14%",
        logo: "🏡"
      },
      {
        name: "Appartement Lyon",
        value: "320 000 €",
        change: "+18 000 €",
        changePercent: "+5.94%",
        logo: "🏢"
      }
    ]
  },
  {
    id: 'crypto',
    name: 'Cryptomonnaies',
    icon: <Bitcoin className="h-6 w-6" />,
    examples: [
      {
        name: "Bitcoin",
        value: "42 230 €",
        change: "+3 815 €",
        changePercent: "+9.93%",
        logo: "₿"
      },
      {
        name: "Ethereum",
        value: "2 950 €",
        change: "+210 €",
        changePercent: "+7.66%",
        logo: "Ξ"
      },
      {
        name: "Litecoin",
        value: "75.40 €",
        change: "+4.20 €",
        changePercent: "+5.90%",
        logo: "Ł"
      }
    ]
  },
  {
    id: 'epargne',
    name: 'Épargne',
    icon: <PiggyBank className="h-6 w-6" />,
    examples: [
      {
        name: "Livret A",
        value: "12 500 €",
        change: "+250 €",
        changePercent: "+2.04%",
        logo: "🏦"
      },
      {
        name: "PEL",
        value: "8 750 €",
        change: "+175 €",
        changePercent: "+2.04%",
        logo: "💰"
      },
      {
        name: "Assurance Vie",
        value: "45 000 €",
        change: "+900 €",
        changePercent: "+2.04%",
        logo: "📜"
      }
    ]
  },
  {
    id: 'actions',
    name: 'Actions',
    icon: <Rocket className="h-6 w-6" />,
    examples: [
      {
        name: "Tesla",
        value: "780 €",
        change: "+35 €",
        changePercent: "+4.69%",
        logo: "🚗"
      },
      {
        name: "Apple",
        value: "170 €",
        change: "+8 €",
        changePercent: "+4.94%",
        logo: "🍎"
      },
      {
        name: "Google",
        value: "2 500 €",
        change: "+120 €",
        changePercent: "+5.04%",
        logo: "🔎"
      }
    ]
  },
  {
    id: 'business',
    name: 'Business',
    icon: <Handshake className="h-6 w-6" />,
    examples: [
      {
        name: "CA Boutique",
        value: "50 000 €",
        change: "+2 500 €",
        changePercent: "+5.26%",
        logo: "🛍️"
      },
      {
        name: "CA Restaurant",
        value: "80 000 €",
        change: "+4 000 €",
        changePercent: "+5.26%",
        logo: "🍽️"
      },
      {
        name: "CA Agence",
        value: "120 000 €",
        change: "+6 000 €",
        changePercent: "+5.26%",
        logo: "🏢"
      }
    ]
  },
  {
    id: 'luxe',
    name: 'Luxe',
    icon: <Diamond className="h-6 w-6" />,
    examples: [
      {
        name: "Rolex",
        value: "15 000 €",
        change: "+750 €",
        changePercent: "+5.26%",
        logo: "⌚"
      },
      {
        name: "Yacht",
        value: "2 500 000 €",
        change: "+125 000 €",
        changePercent: "+5.26%",
        logo: "🛥️"
      },
      {
        name: "Ferrari",
        value: "300 000 €",
        change: "+15 000 €",
        changePercent: "+5.26%",
        logo: "🏎️"
      }
    ]
  }
];

export default function Features() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Types de produits suivis
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Connectez et suivez tous vos investissements en un seul endroit
        </p>

        <div className="grid lg:grid-cols-[300px,1fr] gap-8 items-start">
          <div className="flex flex-col gap-2">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`p-4 text-left rounded-lg transition-all duration-200 ${
                  selectedProduct.id === product.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  {product.icon}
                  <span className="text-xl font-medium">{product.name}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {selectedProduct.examples.map((example, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="p-4 bg-black text-white rounded-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{example.logo}</span>
                        <div>
                          <p className="font-medium">{example.name}</p>
                        </div>
                      </div>
                      <p className="text-2xl font-bold mb-2">{example.value}</p>
                      <p className="text-green-400">
                        {example.change} ({example.changePercent})
                      </p>
                    </Card>
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
}

