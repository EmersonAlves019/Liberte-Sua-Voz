
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import InscriptionForm from "./InscriptionForm";

const CtaSection = () => {
  return (
    <section id="inscription-form-section" className="py-16 bg-gradient-to-br from-emotion-500 via-emotion-600 to-warm-600">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              🎯 A virada na sua comunicação começa aqui — e é 100% gratuita.
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Entre no grupo exclusivo do WhatsApp, participe da live ao vivo com Thamy Kaufmann e receba um desconto especial que só será revelado para quem estiver lá. Sua voz merece esse primeiro passo.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-left">
                <div className="space-y-4 text-white">
                  <p className="text-xl font-semibold">
                    💥 Se você sente que está na hora de parar de se esconder e finalmente assumir o seu lugar com verdade, presença e segurança…
                  </p>
                  <p className="text-xl font-semibold">
                    ⚡ Então agora é a sua hora.
                  </p>
                  <p className="text-lg">
                    👇 Garanta sua vaga no Liberte Sua Voz e viva o desbloqueio que pode mudar sua vida:
                  </p>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-r from-warm-100 to-emotion-100 border-2 border-white/30">
                <div className="text-gray-800 space-y-3">
                  <h3 className="text-xl font-bold">🎁 BÔNUS EXCLUSIVO:</h3>
                  <p className="text-lg">
                    Os 20 primeiros que adquirirem os ingressos ganharão uma mentoria online ao vivo com Thamy Kaufmann, para acelerar ainda mais sua transformação antes mesmo do evento.
                  </p>
                </div>
              </Card>
              
              <div className="text-center space-y-4">
                <p className="text-xl font-bold">
                  Não espere o medo decidir por você. Decida com coragem.
                </p>
                <p className="text-2xl font-bold">
                  Porque quem tem voz, tem poder.
                </p>
              </div>
            </div>
            
            <div>
              <InscriptionForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
