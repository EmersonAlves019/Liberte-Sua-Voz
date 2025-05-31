
const TargetAudienceSection = () => {
  const targetPoints = [
    {
      icon: "😰",
      text: "Tem medo de falar em público, trava em apresentações ou evita se expor mesmo sabendo que isso está te sabotando."
    },
    {
      icon: "💼",
      text: "É empreendedor(a), coach, terapeuta, advogado(a), líder, profissional liberal ou está em transição de carreira — e sabe que precisa se comunicar melhor para crescer."
    },
    {
      icon: "📱",
      text: "Quer gravar vídeos, fazer lives, palestrar ou vender com mais autenticidade, mas não sabe por onde começar."
    },
    {
      icon: "🔄",
      text: "Já tentou outros métodos, cursos ou treinamentos, mas nada foi profundo o suficiente para destravar de verdade."
    },
    {
      icon: "🎯",
      text: "Sente que sua voz não está sendo ouvida — e está pronto(a) para assumir seu lugar de potência, verdade e visibilidade."
    },
    {
      icon: "🤗",
      text: "Busca um ambiente acolhedor, com condução sensível e ao mesmo tempo firme, para vencer seus bloqueios emocionais."
    },
    {
      icon: "👑",
      text: "Está decidido(a) a parar de se esconder e começar a liderar com sua história, sua voz e sua presença."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🎯 O Liberte Sua Voz é para você que…
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {targetPoints.map((point, index) => (
              <div key={index} className="bg-gradient-to-r from-warm-50 to-emotion-50 p-6 rounded-2xl border-2 border-warm-200 hover:border-emotion-300 transition-colors duration-300 shadow-lg hover:shadow-xl">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl flex-shrink-0 bg-white rounded-full p-2 shadow-md">
                    {point.icon}
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-r from-warm-500 to-emotion-500 rounded-full mr-3 flex-shrink-0"></span>
                    <p className="text-gray-700 leading-relaxed font-medium">{point.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-emotion-100 to-warm-100 p-8 md:p-12 rounded-3xl border-2 border-emotion-200 text-center">
            <p className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Se você se identificou com dois ou mais desses pontos, o Liberte Sua Voz não é apenas um evento.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emotion-600 to-warm-600">
              É o passo que faltava para a sua virada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
