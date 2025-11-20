export default function WhatYouGet() {
  const handleCTAClick = () => {
    window.open('https://pay.cakto.com.br/wvyvkay_299442', '_blank');
  };

  const categories = [
    {
      title: 'Medalhas e Anéis',
      image: 'https://i.etsystatic.com/34769879/r/il/2517d3/4273080240/il_fullxfull.4273080240_ighr.jpg?w=500',
      description: 'Centenas de designs prontos para personalização'
    },
    {
      title: 'Suporte para Celulares',
      image: 'https://i.etsystatic.com/24260166/r/il/cbc6d9/7176545034/il_794xN.7176545034_hm4e.jpg?w=500',
      description: 'Designs modernos e funcionais'
    },
    {
      title: 'Calendários',
      image: 'https://http2.mlstatic.com/D_NQ_NP_740689-MLB95980332492_102025-O.webp?w=500',
      description: 'Calendários perpétuos e anuais'
    },
    {
      title: 'Chaveiros',
      image: 'https://http2.mlstatic.com/D_Q_NP_2X_774777-MLB97653770771_112025-T.webp?w=500',
      description: 'Time de footebol, letras e outros'
    },
    {
      title: 'Tabuleiros',
      image: 'https://http2.mlstatic.com/D_NQ_NP_744405-MLB85561199877_062025-O.webp?w=500',
      description: 'Xadrez, damas e outros jogos'
    },
    {
      title: 'Luminárias',
      image: 'https://img.elo7.com.br/product/zoom/325A91F/luminaria-m1-arquivo-de-corte-cnc-laser-mdf.jpg?w=500',
      description: 'Design requintado, variedade de formas e tamanho'
    }
  ];

  return (
    <section className="py-1 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            A MAIOR COLEÇÃO DE VETORES DA INTERNET
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todos organizados e prontos para usar na sua máquina CNC
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center m-10">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl shadow-xl">
            <p className="text-3xl md:text-4xl font-black">
              +60.000 ARQUIVOS PARA DOWNLOAD
            </p>
          </div>
        </div>
      </div>
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
    </section>
  );
}
