
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast, useToast } from "@/hooks/use-toast";

const InscriptionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const {
      VITE_GOOGLE_FORM_URL,
      VITE_WHATSAPP_GROUP_URL,
      VITE_GOOGLE_FORM_NAME,
      VITE_GOOGLE_FORM_EMAIL,
      VITE_GOOGLE_FORM_WHATSAPP,
    }  = import.meta.env

    const params = new URLSearchParams({
      [VITE_GOOGLE_FORM_NAME]: formData.name,
      [VITE_GOOGLE_FORM_EMAIL]: formData.email,
      [VITE_GOOGLE_FORM_WHATSAPP]: formData.whatsapp,
    });


    const response = await fetch(`${VITE_GOOGLE_FORM_URL}${params.toString()}`, {
      method: 'POST',
      mode: 'no-cors',
    });


    if (response) {
      window.open(VITE_WHATSAPP_GROUP_URL, "_blank");


      toast({
        title: "🎉 Inscrição realizada com sucesso!",
      });
      setIsSubmitting(false);
      setFormData({ name: "", email: "", whatsapp: "" });
    }
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const match = numbers.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
    if (match) {
      return `(${match[1]})${match[2] ? ' ' + match[2] : ''}${match[3] ? '-' + match[3] : ''}`;
    }
    return value;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setFormData(prev => ({ ...prev, whatsapp: formatted }));
  };

  return (
    <Card id="inscription-form" className="p-8 bg-white shadow-2xl border-2 border-white/20">
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          🔒 Garanta Sua Vaga Agora
        </h3>
        <p className="text-gray-600">
          Preencha seus dados e dê o primeiro passo para libertar sua voz
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="h-12 text-lg border-2 border-warm-200 focus:border-emotion-500 rounded-xl"
          />
        </div>
        
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Seu melhor e-mail"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="h-12 text-lg border-2 border-warm-200 focus:border-emotion-500 rounded-xl"
          />
        </div>
        
        <div>
          <Input
            type="tel"
            name="whatsapp"
            placeholder="Seu WhatsApp (00) 00000-0000"
            value={formData.whatsapp}
            onChange={handleWhatsAppChange}
            required
            className="h-12 text-lg border-2 border-warm-200 focus:border-emotion-500 rounded-xl"
            maxLength={15}
          />
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-14 text-xl font-bold bg-gradient-to-r from-emotion-500 to-emotion-600 hover:from-emotion-600 hover:to-emotion-700 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          {isSubmitting ? "Processando..." : "👉 Quero libertar minha voz!"}
        </Button>
        
        <p className="text-xs text-gray-500 text-center leading-relaxed">
          Ao se inscrever, você concorda em receber comunicações sobre o evento. 
          Seus dados estão protegidos pela nossa política de privacidade.
        </p>
      </form>
    </Card>
  );
};

export default InscriptionForm;
