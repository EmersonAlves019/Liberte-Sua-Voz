
import { Card } from "@/components/ui/card";

const StorytellingSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="aspect-square bg-gradient-to-br from-warm-100 to-emotion-100 rounded-3xl flex items-center justify-center shadow-xl">
                  <div className="text-center p-6">
                    <div className="text-5xl mb-4">👩‍💼</div>
                    <div className="text-xl font-bold text-gray-800">Thamy Kaufmann</div>
                    <div className="text-sm text-gray-600 mt-2">Criadora do método Comunicação Viva</div>
                    <div className="flex justify-center space-x-4 mt-4">
                      <div className="bg-warm-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        10+ anos
                      </div>
                      <div className="bg-emotion-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        +5k vidas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  ✨ Quem é Thamy Kaufmann — e por que ela criou o "Liberte Sua Voz"
                </h2>
              </div>
              
              <Card className="p-8 bg-gradient-to-br from-warm-50 to-white border-warm-200 shadow-lg">
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                  <p className="text-xl font-medium text-emotion-700">
                    Eu sei exatamente como é sentir o coração disparar só de pensar em falar em público.
                  </p>
                  
                  <p>
                    Durante anos, minha voz tremia, minhas mãos suavam, e eu fugia de qualquer situação em que precisasse me expor. A sensação era de ser invisível — como se, por mais que eu quisesse, algo me impedisse de mostrar ao mundo quem eu realmente era.
                  </p>
                  
                  <p>
                    Mas tudo começou a mudar quando percebi que minha voz não era o problema. O problema era o medo que eu carregava — e o quanto ele me fazia acreditar que eu não era boa o suficiente.
                  </p>
                  
                  <p className="bg-warm-100 p-4 rounded-lg border-l-4 border-warm-500">
                    <strong>Foram mais de 10 anos estudando comunicação autêntica, inteligência emocional, técnicas de palco e vendas com verdade.</strong> E depois de aplicar isso na minha vida — e ver os resultados incríveis se multiplicarem —, entendi que precisava compartilhar esse caminho com outras pessoas.
                  </p>
                  
                  <p>
                    Hoje, ajudo empreendedores, profissionais e líderes a desbloquearem a própria voz, vencerem a timidez e se tornarem referências no que fazem.
                  </p>
                  
                  <p className="text-xl font-semibold text-emotion-700">
                    O Liberte Sua Voz nasceu do desejo profundo de ver mais pessoas livres, confiantes e brilhando com sua mensagem no mundo.
                  </p>
                  
                  <p className="text-lg font-medium text-warm-700 bg-warm-50 p-4 rounded-lg text-center">
                    Se eu consegui, você também consegue — e eu quero te mostrar o caminho.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorytellingSection;
