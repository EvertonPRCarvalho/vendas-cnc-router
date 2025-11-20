import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Quando terei acesso à minha compra?',
      answer: 'Assim que seu pedido for confirmado, você receberá um e-mail em minutos com um link para baixar os modelos e todos os arquivos. Depois de baixado, basta descompactar a pasta e você pode começar a trabalhar! Nota importante: Se você não recebeu o e-mail, verifique sua pasta de spam!'
    },
    {
      question: 'Quais formatos de arquivo são fornecidos?',
      answer: 'A Mega Coleção é abrangente, oferecendo 6 tipos de arquivo distintos: CDR, SVG, PNG, DXF, PDF e EPS. Essa variedade garante compatibilidade com uma gama de softwares e equipamentos de corte a laser.'
    },
    {
      question: 'Há alguma restrição quanto ao número de downloads ou ao prazo para baixar os arquivos?',
      answer: 'Você não enfrentará restrições quanto ao número ou tempo de downloads. Uma vez comprado, você ganha acesso ilimitado para baixar os arquivos quantas vezes precisar.'
    },
    {
      question: 'É possível usar esses arquivos em diferentes máquinas de corte a laser?',
      answer: 'Sim! Os arquivos são compatíveis com praticamente todas as máquinas CNC Router e de Corte a Laser do mercado. Funcionam perfeitamente em softwares como CorelDRAW, Illustrator, LightBurn, RDWorks, e muitos outros.'
    },
    {
      question: 'Posso editar os arquivos?',
      answer: 'Absolutamente! Todos os arquivos são 100% editáveis. Você pode modificar cores, tamanhos, adicionar textos e personalizar da forma que preferir usando seu software de design favorito.'
    },
    {
      question: 'O que vem nos bônus gratuitos?',
      answer: 'Ao comprar hoje, você recebe 3 bônus exclusivos: 1) Pack de frases motivacionais para gravação, 2) Coleção de molduras personalizáveis, 3) Lista de fornecedores de materiais com descontos especiais.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-6">
            <span className="text-4xl">❓</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas antes de começar
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border-2 border-orange-200 overflow-hidden hover:border-orange-400 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-orange-100/50 transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-6 h-6 text-orange-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
