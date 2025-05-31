
import { Card } from "@/components/ui/card";

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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-video bg-gradient-to-br from-warm-100 to-emotion-100 rounded-xl flex items-center justify-center border-2 border-dashed border-warm-300">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎬</div>
                    <p className="text-sm text-gray-600">Vídeo de Depoimento {item}</p>
                    <p className="text-xs text-gray-500 mt-1">(16:9 - Pronto para inserir)</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 text-center mt-4">
              * Espaço reservado para incorporar os vídeos reais de depoimentos em formato 16:9
            </p>
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
