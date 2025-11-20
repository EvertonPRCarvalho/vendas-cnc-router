import { Shield } from 'lucide-react';
const handleCTAClick = () => {
    window.open('https://pay.cakto.com.br/wvyvkay_299442', '_blank');
  };
export default function Guarantee() {
  return (
    <section className="py-1 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-200">
          <div className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-8 shadow-xl">
              <Shield className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              GARANTIA DE 7 DIAS
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                <span className="font-bold text-blue-600">RISCO ZERO!</span> Se você não gostar do material por qualquer motivo, devolvemos <span className="font-bold">100% do seu dinheiro</span>.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Experimente o programa por uma semana completa e veja como ele pode transformar seu negócio. Se, por qualquer motivo, você não estiver totalmente satisfeito com o conteúdo, basta nos informar e devolvemos 100% do seu investimento.
              </p>
              
              <p className="text-base text-gray-500 italic">
                Sem perguntas, sem complicações. Sua satisfação é nossa prioridade, e queremos que você se sinta totalmente seguro ao iniciar essa jornada de transformação.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl mb-2">🔒</div>
                <h4 className="font-bold text-gray-900 mb-2">Compra Segura</h4>
                <p className="text-sm text-gray-600">Pagamento 100% protegido</p>
              </div>
              
              <div className="p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl mb-2">✅</div>
                <h4 className="font-bold text-gray-900 mb-2">7 Dias de Teste</h4>
                <p className="text-sm text-gray-600">Experimente sem riscos</p>
              </div>
              
              <div className="p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl mb-2">💰</div>
                <h4 className="font-bold text-gray-900 mb-2">Dinheiro de Volta</h4>
                <p className="text-sm text-gray-600">Reembolso garantido</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 my-10">
        <button
          onClick={handleCTAClick}
          className="group relative px-8 py-5 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 border-2 border-green-400"
        >
          <span className="relative z-10 flex items-center gap-2">
            🚀 QUERO INVESTIR
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
        </button>
      </div>
    </section>
  );
}
