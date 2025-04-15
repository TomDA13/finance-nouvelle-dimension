
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Gradient Background Sections */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-white" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-100/80 to-transparent translate-y-[50vh] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-200/60 to-transparent translate-y-[100vh] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-100/40 to-transparent translate-y-[150vh] opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Transformez vos idées en réalité numérique
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Une plateforme intuitive pour créer, gérer et faire évoluer vos projets digitaux
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500">
                Commencer gratuitement
              </Button>
              <Button variant="outline" size="lg">
                En savoir plus
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Une plateforme complète</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 bg-white/80 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Création intuitive</h3>
                <p className="text-gray-600">Des outils simples et puissants pour donner vie à vos projets.</p>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Gestion efficace</h3>
                <p className="text-gray-600">Supervisez vos projets avec des tableaux de bord intuitifs.</p>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Évolution continue</h3>
                <p className="text-gray-600">Adaptez et améliorez vos projets en temps réel.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Pourquoi nous choisir</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Performance optimale</h3>
                <p className="text-gray-600">Une plateforme conçue pour offrir des performances exceptionnelles et une expérience utilisateur fluide.</p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Support dédié</h3>
                <p className="text-gray-600">Une équipe d'experts à votre écoute pour vous accompagner dans votre réussite.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Prêt à commencer ?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Rejoignez des milliers d'utilisateurs qui font confiance à notre plateforme
            </p>
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500">
              Commencer maintenant
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
