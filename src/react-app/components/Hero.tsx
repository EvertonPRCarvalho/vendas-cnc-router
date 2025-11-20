import { Sparkles } from 'lucide-react';

export default function Hero() {
  const handleCTAClick = () => {
    window.open('https://pay.cakto.com.br/wvyvkay_299442', '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-orange-500 to-red-500 py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-white text-sm font-semibold">Mais de 60.000 Arquivos Prontos</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            MEGA PACK 60K
            <span className="block text-yellow-300 mt-2">ARQUIVOS CNC ROUTER</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
            Crie peças incríveis, economize tempo e <span className="text-yellow-300 font-bold">aumente seus lucros</span> com esse super kit pronto para usar!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={handleCTAClick}
              className="group relative px-8 py-5 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 border-2 border-green-400"
            >
              <span className="relative z-10 flex items-center gap-2">
                🚀 QUERO RECEBER AGORA
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-300 text-xl">✓</span>
              <span>Acesso Vitalício</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-300 text-xl">✓</span>
              <span>Download Imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-300 text-xl">✓</span>
              <span>100% Editáveis</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-amber-50 to-transparent"></div>
    </section>
  );
}
