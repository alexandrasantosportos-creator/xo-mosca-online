/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Leaf, 
  Wind, 
  ChevronRight, 
  Star, 
  X, 
  Zap,
  ShoppingBag,
  Clock,
  Users,
  Menu,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- CONFIGURATION ---
const checkoutLinks = {
  one: "COLE_AQUI_SEU_LINK_KIWIFY_1",
  two: "COLE_AQUI_SEU_LINK_KIWIFY_2",
  three: "COLE_AQUI_SEU_LINK_KIWIFY_3"
};

const THEME_GREEN = "#8CC63F";

// --- COMPONENTS ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: THEME_GREEN }}>
            <Wind className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-black">XÔ MOSCA</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#beneficios" className="hover:text-[#8CC63F] transition-colors">Benefícios</a>
          <a href="#como-funciona" className="hover:text-[#8CC63F] transition-colors">Como Funciona</a>
          <a href="#ofertas" className="hover:text-[#8CC63F] transition-colors">Ofertas</a>
          <button 
            onClick={() => window.open(checkoutLinks.one, '_blank')}
            className="px-6 py-2 rounded-full text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-md flex items-center gap-2"
            style={{ backgroundColor: THEME_GREEN }}
          >
            Comprar Agora <ChevronRight size={18} />
          </button>
        </div>
        <button className="md:hidden text-black p-2">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

const Hero = ({ heroImage, onUpload }: { heroImage: string, onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <section className="relative pt-20 pb-8 md:pt-28 md:pb-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-[32px] md:rounded-[40px] overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white shadow-2xl min-h-[450px] md:min-h-[600px] flex items-center">
          {/* Background Image of Product context */}
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1600" 
               className="w-full h-full object-cover opacity-60"
               alt="Prato na mesa ensolarada"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 md:via-black/40 to-transparent"></div>
          </div>

          <div className="relative z-10 p-6 md:p-20 lg:w-2/3">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
             >
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                   <div className="bg-[#8CC63F] p-3 md:p-4 rounded-lg md:xl shadow-[0_0_20px_rgba(140,198,63,0.5)]">
                     <Wind size={30} className="text-black md:w-10 md:h-10" />
                   </div>
                   <div>
                     <h2 className="text-4xl md:text-8xl font-black italic tracking-tighter leading-none mb-1">
                       XÔ MOSCA
                     </h2>
                     <div className="flex gap-1 justify-center md:justify-start">
                        {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-[#8CC63F] text-[#8CC63F]" />)}
                     </div>
                   </div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-[#8CC63F] text-black px-4 py-2 md:px-8 md:py-3 inline-block font-black text-lg md:text-3xl rounded-lg mb-6 md:mb-12 shadow-2xl -rotate-1 border-b-4 border-black/20"
                >
                  REFEIÇÕES EM PAZ. ZERO MOSCAS.
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-8 mb-8 md:mb-12 max-w-xl">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#8CC63F] flex items-center justify-center p-2 bg-[#8CC63F]/10">
                        <Leaf className="text-[#8CC63F]" size={20} />
                      </div>
                      <div className="text-[10px] md:text-[11px] font-black uppercase leading-tight tracking-wider">
                        SEM CHEIRO <br /> 
                        <span className="text-[#8CC63F]">100% SEGURO</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#8CC63F] flex items-center justify-center p-2 bg-[#8CC63F]/10">
                        <CheckCircle2 className="text-[#8CC63F]" size={20} />
                      </div>
                      <div className="text-[10px] md:text-[11px] font-black uppercase leading-tight tracking-wider">
                        NATURAL <br /> 
                        <span className="text-[#8CC63F]">SEM QUÍMICOS</span>
                      </div>
                   </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-6 md:pt-8 border-t border-white/20 items-start sm:items-center">
                   <button 
                     onClick={() => document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' })}
                     className="w-full sm:w-auto px-8 py-4 bg-[#8CC63F] text-black font-black text-lg md:text-xl rounded-2xl shadow-[0_10px_30px_rgba(140,198,63,0.3)] hover:scale-105 transition-all text-center"
                   >
                     GARANTIR AGORA
                   </button>
                   <div className="flex flex-col gap-1 w-full sm:w-auto">
                      <div className="flex items-center gap-3 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#8CC63F]">
                        <span className="flex items-center gap-1 border-r border-white/20 pr-3"><Zap size={12} /> SILENCIOSO</span>
                        <span className="flex items-center gap-1"><ShieldCheck size={12} /> SEGURO</span>
                      </div>
                      <p className="text-[9px] md:text-[10px] text-white/50 font-bold uppercase tracking-widest">Oferta encerra em: <span className="text-white">00:45:12</span></p>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* Product Cutout Overlay with Upload Feature */}
          <div className="absolute inset-y-0 right-0 lg:w-1/2 h-full z-20 hidden lg:flex items-center justify-center pr-10">
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.3 }}
               className="relative group"
             >
                <div className="absolute -inset-10 bg-[#8CC63F]/20 rounded-full blur-[100px]"></div>
                <img 
                  src={heroImage} 
                  className="relative z-10 w-full max-h-[500px] h-auto object-contain drop-shadow-[0_45px_65px_rgba(0,0,0,0.8)]"
                  alt="Xô Mosca Produto Premium"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Hint for Upload */}
                <label className="absolute inset-0 z-30 cursor-pointer flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 rounded-3xl">
                   <div className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm shadow-xl flex items-center gap-2">
                      <ShoppingBag size={16} /> TROCAR FOTO
                   </div>
                   <input type="file" accept="image/*" className="hidden" onChange={onUpload} />
                </label>

                <motion.div 
                   animate={{ rotate: [12, 15, 12], scale: [1, 1.05, 1] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -top-10 -right-10 bg-black w-32 h-32 rounded-full flex flex-col items-center justify-center text-center p-4 border-4 border-[#8CC63F] shadow-2xl z-20 pointer-events-none"
                >
                   <Wind size={24} className="mb-2 text-[#8CC63F]" />
                   <p className="text-[10px] font-black text-white leading-tight uppercase">AFASTA AS MOSCAS DE FORMA INTELIGENTE</p>
                </motion.div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      title: "100% Seguro",
      desc: "Lâminas de toque suave que param instantaneamente se algo encostar.",
      icon: <ShieldCheck className="w-8 h-8" style={{ color: THEME_GREEN }} />
    },
    {
      title: "Sem Químicos",
      desc: "Livre de cheiros e venenos. Proteção natural para seus alimentos.",
      icon: <Leaf className="w-8 h-8" style={{ color: THEME_GREEN }} />
    },
    {
      title: "Portátil e Leve",
      desc: "Leve para o churrasco, piquenique ou use na mesa da cozinha.",
      icon: <Wind className="w-8 h-8" style={{ color: THEME_GREEN }} />
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold tracking-widest uppercase mb-4" style={{ color: THEME_GREEN }}>A SOLUÇÃO DEFINITIVA</h2>
          <h3 className="text-4xl md:text-5xl font-black text-black">Tecnologia que afasta o perigo</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 rounded-2xl bg-[#8CC63F]/10 text-[#8CC63F]">
                {b.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{b.title}</h4>
              <p className="text-gray-500 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-black text-black mb-6">Xô Mosca vs. Métodos Comuns</h3>
          <p className="text-gray-500 max-w-2xl mx-auto">Compare e veja por que milhares de brasileiros estão trocando os métodos antigos pelo Xô Mosca.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex gap-4 items-start p-6 rounded-2xl bg-red-50 border border-red-100">
              <div className="mt-1 bg-red-400 p-1 rounded-full"><X className="text-white w-4 h-4" /></div>
              <div>
                <h5 className="font-bold text-red-900 mb-1">Venenos e Sprays</h5>
                <p className="text-sm text-red-700/80">Contaminam a comida, deixam cheiro ruim e são perigosos para crianças e pets.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-6 rounded-2xl bg-red-50 border border-red-100 opacity-60">
              <div className="mt-1 bg-red-400 p-1 rounded-full"><X className="text-white w-4 h-4" /></div>
              <div>
                <h5 className="font-bold text-red-900 mb-1">Racket elétrica</h5>
                <p className="text-sm text-red-700/80">Barulhenta, causa sujeira e exige que você fique caçando a mosca o tempo todo.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#8CC63F]/5 rounded-3xl -rotate-2"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-xl border-2 border-[#8CC63F]">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl text-white shadow-lg" style={{ backgroundColor: THEME_GREEN }}>
                  <Wind size={24} />
                </div>
                <h4 className="text-2xl font-black">Vantagens do Xô Mosca</h4>
              </div>
              <ul className="space-y-5">
                {["Proteção passiva (funciona sozinho)", "Seguro para crianças e pets", "Discreto e silencioso", "Econômico e durável"].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center">
                    <div className="p-1 rounded-full bg-[#8CC63F]/20 text-[#8CC63F]"><Check size={16} /></div>
                    <span className="font-bold text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-top border-gray-100">
                <button 
                  onClick={() => document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-4 rounded-xl text-white font-bold text-lg"
                  style={{ backgroundColor: THEME_GREEN }}
                >
                  QUERO ESSA PRATICIDADE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Carlos S.", text: "Perfeito para o domingo de churrasco. As moscas nem chegam perto da carne!", stars: 5 },
    { name: "Mariana L.", text: "Finalmente consigo almoçar na varanda sem ficar espantando bicho. Recomendo muito.", stars: 5 },
    { name: "João R.", text: "Comprei o kit de 3 para presentear minha mãe e ela amou. Super seguro.", stars: 5 }
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-black mb-16 tracking-tight">O que dizem nossos clientes</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 text-left">
              <div className="flex gap-1 mb-4">
                {[...Array(r.stars)].map((_, s) => <Star key={s} className="fill-[#8CC63F] text-[#8CC63F]" size={16} />)}
              </div>
              <p className="text-lg italic text-gray-300 mb-6 font-medium">\"{r.text}\"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8CC63F] to-[#7db238]"></div>
                <span className="font-bold">{r.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center items-center gap-8 opacity-50 grayscale contrast-125">
          {/* Social Proof logos placeholders */}
          <span className="text-xl font-black">EXAME</span>
          <span className="text-xl font-black">G1</span>
          <span className="text-xl font-black">UOL</span>
        </div>
      </div>
    </section>
  );
};

const VideoSection = () => {
  return (
    <section id="como-funciona" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-[#8CC63F]/20 text-[#8CC63F] text-xs font-bold tracking-widest uppercase mb-4">
              Demonstração Real
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Veja o <span style={{ color: THEME_GREEN }}>Xô Mosca</span> em ação!
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Assista como a tecnologia de hélices flexíveis cria uma barreira invisível que as moscas detestam, mantendo sua comida protegida sem barulho e sem veneno.
            </p>
            <ul className="space-y-4">
              {[
                "Hélices seguras ao toque",
                "Funcionamento silencioso",
                "Design elegante para qualquer mesa",
                "Eficácia comprovada"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-[#8CC63F]/20 text-[#8CC63F]"><Check size={16} /></div>
                  <span className="font-bold">{item}</span>
                </li>
              ))}
            </ul>
             <button 
              onClick={() => document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-10 py-4 bg-[#8CC63F] text-black font-black text-xl rounded-2xl shadow-xl hover:scale-105 transition-all text-center"
            >
              QUERO ESSA PROTEÇÃO
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/10"
          >
            <div className="aspect-[9/16] md:aspect-video bg-gray-900 flex items-center justify-center">
              <video 
                src="https://strict-plum-qvisijgrbp.edgeone.app/br-11110105-6kfkr-lwer2eyc0gb605.16000081718134317.mp4"
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const kits = [
    {
      id: 'one',
      title: "PAGUE 1",
      price: "29,99",
      savings: null,
      desc: "Experimente a liberdade",
      link: checkoutLinks.one,
      popular: false
    },
    {
      id: 'three',
      title: "LEVE 3 (KIT FAMÍLIA)",
      price: "49,99",
      savings: "50% OFF",
      desc: "O favorito para churrascos",
      link: checkoutLinks.three,
      popular: true
    },
    {
      id: 'two',
      title: "LEVE 2 (KIT DUO)",
      price: "39,99",
      savings: "35% OFF",
      desc: "Cozinha e Varanda protegidas",
      link: checkoutLinks.two,
      popular: false
    }
  ];

  return (
    <section id="ofertas" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6">Escolha seu Kit</h2>
          <p className="text-gray-500 font-bold tracking-widest uppercase">ECONOMIZE HOJE E GARANTA O SEU</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-end">
          {kits.map((kit) => (
            <div 
              key={kit.id}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-300 border-2 ${kit.popular ? 'border-[#8CC63F] shadow-2xl scale-105 z-10' : 'border-transparent shadow-lg text-gray-500'}`}
            >
              {kit.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#8CC63F] text-white px-6 py-2 rounded-full text-sm font-black tracking-widest uppercase">
                  MAIS VENDIDO
                </div>
              )}
              <h4 className={`text-2xl font-black mb-2 ${kit.popular ? 'text-black' : 'text-gray-900'}`}>{kit.title}</h4>
              <p className="mb-6 text-sm font-medium">{kit.desc}</p>
              <div className="mb-8">
                <span className="text-sm font-bold opacity-60">R$</span>
                <span className={`text-5xl font-black ${kit.popular ? 'text-black' : 'text-gray-900'}`}>{kit.price.split(',')[0]}</span>
                <span className="text-2xl font-black">,99</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm">
                <li className="flex items-center gap-2"><Check size={16} className="text-[#8CC63F]" /> Frete Grátis</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-[#8CC63F]" /> 7 Dias de Garantia</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-[#8CC63F]" /> Parcelamento s/ Juros</li>
              </ul>
              <button 
                onClick={() => window.open(kit.link, '_blank')}
                className={`w-full py-5 rounded-2xl font-black text-lg transition-all active:scale-95 flex items-center justify-center gap-2 ${kit.popular ? 'text-white' : 'border-2 border-gray-200 text-gray-900 hover:border-[#8CC63F] hover:text-[#8CC63F]'}`}
                style={{ backgroundColor: kit.popular ? THEME_GREEN : 'transparent' }}
              >
                <ShoppingBag size={20} /> COMPRAR AGORA
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const Guarantee = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 border-2 border-dashed border-gray-200 rounded-[40px] p-10 md:p-20 text-center flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <div className="relative">
            <ShieldCheck size={120} style={{ color: THEME_GREEN }} className="relative z-10" />
            <div className="absolute inset-0 bg-[#8CC63F]/20 blur-2xl rounded-full"></div>
          </div>
        </div>
        <div className="text-left">
          <h3 className="text-3xl font-black mb-4">Garantia Blindada de 7 Dias</h3>
          <p className="text-gray-500 leading-relaxed mb-6">
            Nós confiamos tanto no <b>Xô Mosca</b> que oferecemos 7 dias de garantia incondicional. 
            Se por qualquer motivo você não ficar 100% satisfeito, nós devolvemos todo o seu dinheiro. Sem perguntas.
          </p>
          <div className="flex items-center gap-2 font-bold text-sm" style={{ color: THEME_GREEN }}>
            <CheckCircle2 size={18} /> RISCO ZERO PARA VOCÊ
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: THEME_GREEN }}>
                <Wind className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight">XÔ MOSCA</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              A solução definitiva para suas refeições. Higiene, segurança e tranquilidade para sua família em um só produto.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6 uppercase tracking-widest text-sm opacity-50">Links</h5>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a></li>
              <li><a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#ofertas" className="hover:text-white transition-colors">Ofertas</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 uppercase tracking-widest text-sm opacity-50">Contato</h5>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li>contato@xomosca.online</li>
              <li>WhatsApp: (11) 99999-9999</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium text-gray-500 uppercase tracking-widest">
          <p>© 2024 XÔ MOSCA - TODOS OS DIREITOS RESERVADOS</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Políticas de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-6 left-6 z-40 hidden md:block"
    >
      <div className="bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4 max-w-[320px]">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
          <img src="https://i.pravatar.cc/100?u=99" alt="User" />
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900">Rodrigo de Curitiba/PR</p>
          <p className="text-xs text-gray-500">acabou de comprar 3 unidades 🎉</p>
        </div>
        <button onClick={() => setIsVisible(false)} className="text-gray-300 hover:text-gray-600">
          <X size={16} />
        </button>
      </div>
    </motion.div>
  );
}

const App = () => {
  const [heroImage, setHeroImage] = useState("https://fond-scarlet-kvsfvepplf.edgeone.app/rrdes.png");
  const [beforeImage, setBeforeImage] = useState("https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=800");
  const [afterImage, setAfterImage] = useState("https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800");

  useEffect(() => {
    // Migration from old key to multi-key if exists
    const legacyHero = localStorage.getItem('xo_mosca_custom_image');
    const savedHero = localStorage.getItem('xo_mosca_hero_image') || legacyHero;
    const savedBefore = localStorage.getItem('xo_mosca_before_image');
    const savedAfter = localStorage.getItem('xo_mosca_after_image');
    
    if (savedHero) setHeroImage(savedHero);
    if (savedBefore) setBeforeImage(savedBefore);
    if (savedAfter) setAfterImage(savedAfter);
  }, []);

  const handleImageUpload = (key: 'hero' | 'before' | 'after') => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        if (key === 'hero') {
          setHeroImage(base64String);
          localStorage.setItem('xo_mosca_hero_image', base64String);
        } else if (key === 'before') {
          setBeforeImage(base64String);
          localStorage.setItem('xo_mosca_before_image', base64String);
        } else if (key === 'after') {
          setAfterImage(base64String);
          localStorage.setItem('xo_mosca_after_image', base64String);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#8CC63F] selection:text-white">
      <Navbar />
      <main>
        {/* Pass state to Hero */}
        <Hero heroImage={heroImage} onUpload={handleImageUpload('hero')} />
        <Benefits />
        <VideoSection />
        
        {/* Antes vs Depois Section with Upload Support */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">A Mudança que você merece</h2>
              <p className="text-gray-500 max-w-2xl mx-auto font-medium">Veja a diferença real na sua mesa ao usar o Xô Mosca.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group overflow-hidden rounded-[32px]">
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1 rounded-full text-xs font-bold z-10 shadow-lg uppercase">SEM XÔ MOSCA</div>
                <img 
                  src={beforeImage} 
                  alt="Mesa antes" 
                  className="w-full h-[400px] object-cover grayscale-[0.5] contrast-125 transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Upload Trigger overlay */}
                <label className="absolute inset-0 z-20 cursor-pointer flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                  <div className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm shadow-xl flex items-center gap-2">
                    <ShoppingBag size={16} /> TROCAR FOTO ANTES
                  </div>
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload('before')} />
                </label>

                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-sm font-bold text-white flex items-center gap-2">
                    <X size={16} className="text-red-500" /> Contaminação, sujeira e irritação constante.
                  </p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-[32px]">
                <div className="absolute top-4 left-4 bg-[#8CC63F] text-white px-4 py-1 rounded-full text-xs font-bold z-10 shadow-lg uppercase">COM XÔ MOSCA</div>
                <img 
                  src={afterImage} 
                  alt="Mesa depois" 
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Upload Trigger overlay */}
                <label className="absolute inset-0 z-20 cursor-pointer flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                  <div className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm shadow-xl flex items-center gap-2">
                    <ShoppingBag size={16} /> TROCAR FOTO DEPOIS
                  </div>
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload('after')} />
                </label>

                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-sm font-bold text-white flex items-center gap-2">
                    <Check size={16} className="text-[#8CC63F]" /> Higiene total, paz e segurança para sua família.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Comparison />
        <Testimonials />
        <Pricing />
        <Guarantee />
      </main>
      <Footer />
      <Popup />
      
      {/* Photo replacement helper for the user */}
      <style>{`
        #root { --xo-mosca-photo: url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800'); }
      `}</style>
      
      {/* Scroll indicator for mobile */}
      <div className="fixed bottom-0 left-0 w-full md:hidden bg-white/80 backdrop-blur-md p-4 flex gap-4 border-t border-gray-100 z-[60]">
        <button 
          onClick={() => document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full py-4 rounded-xl text-white font-black text-lg shadow-lg"
          style={{ backgroundColor: THEME_GREEN }}
        >
          COMPRAR AGORA
        </button>
      </div>
    </div>
  );
};

export default App;
