
import { Button } from "@/components/ui/button";
import { scrollToForm } from "@/lib/utils";

const Header = () => {


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b-2 border-warm-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold text-warm-700">
              Liberte Sua Voz
            </h1>
            <div className="text-sm text-warm-600 font-medium">
              🎁 Live gratuita • Desconto Especial → Liberado apenas no grupo do WhatsApp
            </div>
          </div>
          <Button 
            onClick={scrollToForm}
            className="bg-gradient-to-r from-emotion-500 to-emotion-600 hover:from-emotion-600 hover:to-emotion-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-warm"
          >
            Garanta sua vaga
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
