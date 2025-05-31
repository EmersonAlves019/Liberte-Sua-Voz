
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ObjectionsSection = () => {
  const objections = [
    {
      question: "E se eu não conseguir falar na hora?",
      answer: "Você não vai estar sozinho. Esse evento foi feito exatamente para isso. A Thamy conduz cada passo com sensibilidade, respeito ao seu ritmo e técnicas práticas que funcionam — mesmo para quem acha impossível. Você será acolhido, nunca exposto."
    },
    {
      question: "Já tentei outros cursos e nada mudou…",
      answer: "O Liberte Sua Voz não é um curso teórico. É uma imersão presencial, com experiências vivenciais, desbloqueios reais e transformação emocional. Não é sobre decorar técnicas, é sobre acessar o que está travando a sua voz — e liberar sua potência."
    },
    {
      question: "Não tenho tempo…",
      answer: "O que você está perdendo hoje por não se comunicar com confiança? Clientes? Crescimento? Reconhecimento? Um único dia pode transformar os próximos anos da sua vida. O tempo vai passar de qualquer jeito. A diferença é: com ou sem sua voz livre?"
    },
    {
      question: "É caro pra mim no momento…",
      answer: "Mais caro é continuar invisível. Quantas oportunidades você já perdeu por medo de se expressar? O investimento no Liberte Sua Voz se paga em autoestima, visibilidade e novas possibilidades. E mais: há condições facilitadas e bônus para quem agir rápido."
    },
    {
      question: "Tenho vergonha de me expor…",
      answer: "A vergonha só existe onde há julgamento. No Liberte Sua Voz, você vai encontrar um ambiente seguro, acolhedor e respeitoso, onde todos estão na mesma jornada. Aqui, ninguém está acima ou abaixo — todos estão juntos para crescer."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-emotion-50 to-warm-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ❓ Está com dúvidas? A gente responde com verdade
            </h2>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl border-2 border-warm-200 overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {objections.map((objection, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-warm-100 last:border-b-0">
                  <AccordionTrigger className="px-8 py-6 text-left hover:bg-warm-50 transition-colors duration-200">
                    <span className="text-lg font-semibold text-gray-900">{objection.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <div className="bg-gradient-to-r from-warm-50 to-emotion-50 p-6 rounded-xl">
                      <p className="text-gray-700 leading-relaxed">{objection.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
