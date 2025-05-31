
const PainPointsSection = () => {
  const painPoints = [
    {
      emoji: "😞",
      text: "Sente um medo paralisante só de pensar em falar em público, mesmo em situações simples como uma reunião ou uma apresentação."
    },
    {
      emoji: "😰",
      text: "Sua mente trava, sua voz falha, o coração acelera e parece que todo mundo está te julgando."
    },
    {
      emoji: "😔",
      text: "Já perdeu oportunidades incríveis — de clientes, parcerias ou crescimento profissional — por não conseguir se expressar com clareza e confiança."
    },
    {
      emoji: "😶",
      text: "Vive com a sensação de estar invisível, mesmo tendo tanto a oferecer."
    },
    {
      emoji: "😤",
      text: "Sente uma frustração profunda por saber que poderia ir muito mais longe, mas algo parece sempre te segurar."
    },
    {
      emoji: "😨",
      text: "Evita gravar vídeos, fazer lives ou aparecer nas redes sociais por medo de críticas, de se expor ou de errar."
    },
    {
      emoji: "😕",
      text: "Acredita, no fundo, que \"isso não é pra mim\", que nasceu tímido demais ou que ninguém se importa com o que você tem a dizer."
    },
    {
      emoji: "😟",
      text: "Sofre com a dúvida constante: \"E se eu falhar de novo?\""
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-warm-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            😞 Você se identifica com alguma dessas situações?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-emotion-300 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl flex-shrink-0">{point.emoji}</div>
                  <p className="text-gray-700 text-left leading-relaxed">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-emotion-100 to-warm-100 p-8 rounded-3xl border-2 border-emotion-200">
            <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Se você leu até aqui com o coração apertado... você não está sozinho.
            </p>
            <p className="text-lg text-emotion-700 font-medium">
              E a boa notícia é: existe um caminho — e ele começa quando você decide libertar sua voz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
