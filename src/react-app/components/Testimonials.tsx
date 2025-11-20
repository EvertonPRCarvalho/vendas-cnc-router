import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos M.',
      location: 'São Paulo, SP',
      rating: 5,
      text: 'Comprei e já estou usando! Material excelente, muito organizado. Já fiz várias medalhas e o pessoal está adorando. Vale muito a pena!',
      avatar: 'https://ui-avatars.com/api/?name=Carlos+M&background=f97316&color=fff'
    },
    {
      name: 'Ana Paula S.',
      location: 'Rio de Janeiro, RJ',
      rating: 5,
      text: 'Incrível a quantidade de arquivos! Comprei ontem e já recebi tudo certinho. Estou impressionada com a qualidade e variedade.',
      avatar: 'https://ui-avatars.com/api/?name=Ana+Paula&background=ef4444&color=fff'
    },
    {
      name: 'Roberto L.',
      location: 'Belo Horizonte, MG',
      rating: 5,
      text: 'Melhor investimento que fiz para minha marcenaria! São tantos modelos que vou levar meses para explorar tudo. Suporte também é muito bom!',
      avatar: 'https://ui-avatars.com/api/?name=Roberto+L&background=f59e0b&color=fff'
    },
    {
      name: 'Juliana F.',
      location: 'Curitiba, PR',
      rating: 5,
      text: 'Estava procurando algo assim há muito tempo. O preço está ótimo e a qualidade dos arquivos é profissional. Super recomendo!',
      avatar: 'https://ui-avatars.com/api/?name=Juliana+F&background=f97316&color=fff'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            O QUE NOSSOS CLIENTES DIZEM
          </h2>
          <p className="text-xl text-gray-600">
            Centenas de marceneiros já estão lucrando com o PackCNC Pro
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full">
            <span className="text-xl">⭐</span>
            <span className="font-bold">Avaliação 4.9/5.0 baseada em +500 clientes satisfeitos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
