export default function FinalCTA() {
  const handleCTAClick = () => {
    window.open('https://pay.cakto.com.br/wvyvkay_299442', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 via-red-500 to-pink-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200')] opacity-10 bg-cover bg-center"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          PRONTO PARA TRANSFORMAR SEU NEGÓCIO?
        </h2>
        
        <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto">
          Junte-se a centenas de marceneiros que já estão criando peças incríveis e lucrando com o PackCNC Pro
        </p>
        
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 mb-8 border-2 border-white/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-4xl md:text-5xl font-black text-yellow-300 mb-2">60K+</div>
              <div className="text-white text-lg">Arquivos Prontos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-yellow-300 mb-2">500+</div>
              <div className="text-white text-lg">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-yellow-300 mb-2">4.9★</div>
              <div className="text-white text-lg">Avaliação Média</div>
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="text-2xl md:text-3xl font-bold text-white line-through opacity-75">
              R$ 67,90
            </div>
            <div className="text-5xl md:text-7xl font-black text-yellow-300">
              R$ 29,90
            </div>
            <div className="text-xl text-white/90">
              ou 6x de R$ 5,90 sem juros
            </div>
          </div>
          
          <button
            onClick={handleCTAClick}
            className="group relative px-12 py-6 bg-green-500 hover:bg-green-600 text-white font-black text-xl md:text-2xl rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 border-4 border-green-400 w-full md:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              🚀 SIM, QUERO COMEÇAR AGORA!
            </span>
          </button>
          
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-300 text-xl">✓</span>
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-300 text-xl">✓</span>
              <span>Garantia de 7 Dias</span>
            </div>
          </div>
        </div>
        
        <p className="text-white/80 text-sm max-w-2xl mx-auto">
          🔒 Compra 100% segura e protegida. Seus dados estão seguros conosco.
        </p>
      </div>
      
      <footer className="mt-16 pt-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/70 text-sm">
            © 2025 PackCNC Pro. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </section>
  );
}
