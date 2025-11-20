import { Check, Download, Edit3, Package, RefreshCw, Shield } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Check,
      title: 'Acesso Vitalício',
      description: 'Compre uma vez e use para sempre, sem mensalidades'
    },
    {
      icon: RefreshCw,
      title: 'Atualizações Gratuitas',
      description: 'Receba novos arquivos gratuitamente pelo WhatsApp'
    },
    {
      icon: Edit3,
      title: '100% Editáveis',
      description: 'Formatos SVG, CDR, DXF, EPS, PNG e DWG'
    },
    {
      icon: Package,
      title: 'Prontos para Usar',
      description: 'Arquivos otimizados para CNC Router e Corte a Laser'
    },
    {
      icon: Download,
      title: 'Download Imediato',
      description: 'Acesso instantâneo após a confirmação do pagamento'
    },
    {
      icon: Shield,
      title: 'Garantia Total',
      description: '7 dias de garantia ou seu dinheiro de volta'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            POR QUE ESCOLHER O PACKCNC PRO?
          </h2>
          <p className="text-xl text-gray-600">
            Tudo o que você precisa para levar seu negócio ao próximo nível
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              ✅ Compatível com CorelDRAW, Illustrator, LightBurn e mais
            </h3>
            <p className="text-lg text-gray-700">
              Funciona em qualquer software de design e corte que você já usa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
