export default function PriceSection() {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/R9SkpQM', '_blank');
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-orange-200">
          <p className="text-gray-600 text-lg mb-2 line-through">De R$ 67,90 por:</p>
          
          <div className="mb-6">
            <div className="text-5xl md:text-7xl font-black text-orange-600 mb-2">
              6x de R$ 5,61
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-800">
              ou R$ 29,90 à vista
            </div>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
            <span className="text-2xl">💰</span>
            <span className="font-semibold">Economia de 56% - Oferta por Tempo Limitado!</span>
          </div>
          
          <button
            onClick={handleCTAClick}
            className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl rounded-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105"
          >
            ⚡ GARANTIR MEU ACESSO AGORA
          </button>
        </div>
      </div>
    </section>
  );
}
