
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { scrollToForm } from "@/lib/utils";

const HeroSection = () => {

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-warm-50 via-white to-emotion-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="secondary" className="bg-warm-100 text-warm-800 border-warm-300 text-sm px-4 py-2">
                +5 mil pessoas impactadas
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-600 to-emotion-600">Liberte Sua Voz</span> e Transforme Sua 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-600 to-emotion-600"> Comunicação</span> em Sua Maior Fonte de 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emotion-600 to-warm-600"> Poder e Oportunidades</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
              Transforme sua comunicação agora: entre no grupo gratuito do WhatsApp e participe da live especial com Thamy Kaufmann — onde você já começa a desbloquear sua voz, vencer o medo de se expor e descobrir como conquistar presença e autoridade ao se comunicar.
              </p>
              
              <div className="bg-gradient-to-r from-warm-100 to-emotion-100 border-2 border-warm-300 rounded-2xl p-6 my-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">🚨 Informação Importante</h3>
                  <div className=" gap-4 text-lg">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="font-semibold text-warm-700">Lives Diárias APENAS para Membros do GRUPO</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={scrollToForm}
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-emotion-500 to-emotion-600 hover:from-emotion-600 hover:to-emotion-700 text-white text-xl font-bold py-6 px-12 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                🎯 Quero libertar minha voz
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-warm-200 to-emotion-200 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎤</div>
                  <div className="text-2xl font-bold text-gray-800">Thamy Kaufmann</div>
                  <div className="text-lg text-gray-600">Especialista em Comunicação Autêntica</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
