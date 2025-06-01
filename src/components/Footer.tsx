import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-warm-400 mb-4">
                Liberte Sua Voz
              </h3>
              <p className="text-gray-300">
                Transformando vidas através da comunicação autêntica e poderosa.
              </p>
            </div>
            
            {/* <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Links Importantes</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-warm-400 transition-colors duration-200">
                  Política de Privacidade
                </a>
                <a href="#" className="block text-gray-300 hover:text-warm-400 transition-colors duration-200">
                  Termos de Uso
                </a>
                <a href="#" className="block text-gray-300 hover:text-warm-400 transition-colors duration-200">
                  Suporte
                </a>
              </div>
            </div> */}
            
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="https://www.instagram.com/thamykaufmann/" target="_blank" className="text-2xl text-gray-300 hover:text-pink-400 transition-colors duration-200">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Liberte Sua Voz - Todos os direitos reservados. Criado com ❤️ por Thamy Kaufmann.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
