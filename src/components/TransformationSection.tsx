
const TransformationSection = () => {
  const transformations = [
    {
      icon: "🎯",
      text: "Conseguisse se expressar com clareza e segurança em qualquer situação — sem travar, sem medo, com autenticidade."
    },
    {
      icon: "📹",
      text: "Gravasse vídeos, fizesse lives e se posicionasse nas redes sociais com naturalidade, sem se preocupar com julgamentos."
    },
    {
      icon: "👑",
      text: "Liderasse reuniões, negociações e apresentações com impacto e autoridade — mesmo que nunca tenha feito isso antes."
    },
    {
      icon: "🌟",
      text: "Finalmente se sentisse confiante e livre para ser quem você é, sem máscaras, sem bloqueios."
    },
    {
      icon: "🏆",
      text: "Se tornasse referência na sua área por falar com emoção, verdade e poder de conexão."
    }
  ];

  const topics = [
    "Desbloqueio da sua comunicação autêntica",
    "Técnicas para vencer o medo e a ansiedade de se expor",
    "Estratégias para vender com emoção, verdade e presença",
    "Postura, voz, improviso e domínio de palco",
    "Construção de presença digital com mais autoridade"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🔥 Imagine como seria sua vida se você...
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {transformations.map((transformation, index) => (
              <div key={index} className="bg-gradient-to-br from-warm-50 to-emotion-50 p-6 rounded-2xl border-2 border-warm-200 hover:border-emotion-300 transition-colors duration-300 shadow-lg hover:shadow-xl">
                <div className="text-4xl mb-4 text-center">{transformation.icon}</div>
                <p className="text-gray-700 leading-relaxed text-center font-medium">{transformation.text}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-warm-100 to-emotion-100 p-8 md:p-12 rounded-3xl border-2 border-warm-300">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              No evento Liberte Sua Voz, você vai passar por uma imersão prática, emocional e profunda, onde vamos trabalhar:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {topics.map((topic, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-warm-500 to-emotion-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-800 font-medium">{topic}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Tudo isso em um ambiente seguro, acolhedor e com condução firme da Thamy Kaufmann, que já ajudou milhares de pessoas a superarem seus bloqueios e se tornarem comunicadores livres e poderosos.
              </p>
              <p className="text-xl font-bold text-emotion-700 text-center">
                O que você vai viver nesse dia pode mudar sua trajetória — porque quando você liberta sua voz, você liberta sua vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
