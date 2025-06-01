import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { scrollToForm } from "@/lib/utils";

const TestimonialsSection = () => {
  const stats = [
    { number: "+5 mil", label: "vidas transformadas", color: "from-warm-500 to-warm-600" },
    { number: "10 anos", label: "de experiência em comunicação autêntica", color: "from-emotion-500 to-emotion-600" },
    { number: "Referência", label: "em desbloqueio de comunicação emocional", color: "from-warm-600 to-emotion-500" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-warm-50 to-emotion-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              📣 Já são milhares de vozes libertas. E a próxima pode ser a sua.
            </h2>
            <p className="text-xl text-gray-700">
              Mais de 5.200 pessoas já passaram pelos treinamentos e vivências conduzidas por Thamy Kaufmann — e os resultados são transformadores:
            </p>
          </div>
          
          {/* Espaço para vídeos de depoimentos */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-warm-200 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              🎥 Depoimentos Reais de Transformação
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="aspect-[9/16] bg-gradient-to-br from-warm-100 to-emotion-100 rounded-xl flex items-center justify-center border-2 border-dashed border-warm-300 overflow-hidden">
                  <video
                    src={`/assets/videos/depoimento-${item}.mp4`}
                    controls
                    className="w-full h-full object-cover rounded-xl"
                    aria-label={`Vídeo de Depoimento ${item}`}
                  />
                </div>
              ))}
            </div>

          </div>
          
          {/* Estatísticas */}
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className={`p-8 text-center bg-gradient-to-br ${stat.color} text-white shadow-xl hover:shadow-2xl transition-shadow duration-300`}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-gray-800 bg-white p-6 rounded-2xl shadow-lg inline-block">
              Esses resultados não são sorte. São consequência de um método que une emoção, prática e verdade — e que agora está ao seu alcance.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8"> 
          <Button 
                onClick={scrollToForm}
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-emotion-500 to-emotion-600 hover:from-emotion-600 hover:to-emotion-700 text-white text-xl font-bold py-6 px-12 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                🎯 Quero libertar minha voz
              </Button>
          </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
