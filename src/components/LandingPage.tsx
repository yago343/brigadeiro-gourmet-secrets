import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Shield, Clock, Award, ChefHat, Heart, Sparkles } from "lucide-react";
import designImage from "@/assets/design-sem-nome-1.png";
import ebookMockup from "@/assets/ebook-mockup.jpg";
import specialFlavors from "@/assets/special-flavors.jpg";
import chefMatheus from "@/assets/chef-matheus.jpg";
import ImageCarousel from "@/components/ImageCarousel";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import BrigadeiroFlavors from "@/components/BrigadeiroFlavors";
import testimonial1 from "@/assets/testimonial-1.jpg";
import whatsappIntroClass from "@/assets/whatsapp-intro-class.jpg";
const LandingPage = () => {
  return <div className="min-h-screen bg-background text-foreground">
      
      {/* [A] ATENÇÃO - Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-chocolate-rich via-background to-card opacity-95" />
        <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.02\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"3\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }} />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gold-elegant text-chocolate-rich font-semibold px-4 py-2 text-sm">
              ✨ LANÇAMENTO ESPECIAL - 60% OFF
            </Badge>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cream-warm to-gold-elegant bg-clip-text text-transparent leading-tight">
              Está cansada de perder ingredientes tentando acertar o ponto do brigadeiro?
            </h1>
            
            <div className="mb-8 p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-gold-elegant/20 shadow-2xl">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-gold-elegant mb-4">
                NÃO ERRE O PONTO NUNCA MAIS!
              </h2>
              <div className="flex flex-wrap justify-center gap-4 text-lg font-medium">
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-success-sweet" />
                  Mais de 70 receitas testadas
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-success-sweet" />
                  Precificação completa
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-success-sweet" />
                  Videoaula passo a passo
                </span>
              </div>
            </div>

            <div className="mb-8">
              <ImageCarousel />
            </div>

            
          </div>
        </div>
      </section>

      {/* [I] INTERESSE - Depoimentos e Benefícios */}
      <section className="bg-card/50 py-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-gold-elegant">
              📱 Veja o que as alunas estão falando
            </h2>
            <div className="mb-12">
              <TestimonialCarousel />
            </div>
          </div>

          {/* Simulação de depoimentos WhatsApp */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {["Finalmente consegui fazer brigadeiros que derretem na boca! Já vendi R$ 800 só no primeiro mês 😍", "As receitas são perfeitas! Meus clientes sempre pedem mais. Obrigada Matheus! 🙏", "Nunca mais errei o ponto! O e-book salvou meu negócio de doces 💖"].map((text, index) => <Card key={index} className="bg-card/90 border-l-4 border-l-success-sweet p-6 shadow-lg backdrop-blur-sm px-[21px] py-0">
                <CardContent className="p-0 py-[3px]">
                  <p className="text-foreground mb-3">{text}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-8 h-8 bg-success-sweet rounded-full flex items-center justify-center text-white font-bold">
                      A
                    </div>
                    <span>Aluna verificada ✅</span>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mb-12">
            <h3 className="font-display text-2xl md:text-4xl font-bold mb-8 text-gold-elegant py-0 my-0 mx-[24px] px-[26px]">
              💬 Esse e-book é pra você que quer:
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[{
            icon: <Sparkles className="w-8 h-8 text-gold-elegant" />,
            title: "Fazer brigadeiros inovadores",
            desc: "que surpreendem"
          }, {
            icon: <Award className="w-8 h-8 text-gold-elegant" />,
            title: "Entregar produtos",
            desc: "com qualidade profissional"
          }, {
            icon: <Heart className="w-8 h-8 text-gold-elegant" />,
            title: "Aumentar lucros",
            desc: "com criatividade como diferencial"
          }, {
            icon: <Star className="w-8 h-8 text-gold-elegant" />,
            title: "Ter receitas exclusivas",
            desc: "que ninguém mais tem"
          }].map((item, index) => <Card key={index} className="text-center p-6 hover:scale-105 transition-transform duration-300 bg-card/80 backdrop-blur-sm border-gold-elegant/20">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center">
            
          </div>
        </div>
      </section>

      {/* [D] DESEJO - Conteúdo, Prova Social e Autoridade */}
      <section className="bg-background py-0">
        <div className="container mx-auto px-4">
          
          {/* Bônus Especial */}
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-success-sweet text-white font-semibold px-6 py-2 text-lg">
              🎓 BÔNUS ESPECIAL
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-gold-elegant">
              Além do e-book, você ganha acesso a uma aula introdutória gratuita
            </h2>
            <div className="mb-6">
              <img src={whatsappIntroClass} alt="Acesso à aula introdutória gratuita" className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg" />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              mostrando passo a passo como fazer o brigadeiro perfeito.
            </p>
          </div>

          {/* Sabores Especiais */}
          <BrigadeiroFlavors />

          {/* Autoridade - TV Globo */}
          <div className="mb-16 text-center">
            
          </div>

          {/* Galeria Visual - Imagem estatica */}
          <div className="mb-16">
            <img src={designImage} alt="Galeria de Brigadeiros Gourmet" className="w-full rounded-3xl shadow-2xl" />
          </div>

          {/* Conteúdo do E-book */}
          <div className="mb-16">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-12 text-gold-elegant py-0 px-[47px]">
              📦 Conteúdo que você vai receber:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {["+70 receitas testadas e validadas", "Precificação completa", "Videoaula introdutória", "Validade e conservação", "Técnicas de ponto ideal", "Itens e marcas recomendadas", "Como enrolar corretamente", "Como faturar até R$2.500/mês"].map((item, index) => <div key={index} className="flex items-center gap-3 p-4 bg-card/50 rounded-lg">
                  <Check className="w-6 h-6 text-success-sweet flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* [A] AÇÃO - Oferta, Garantia e Conversão */}
      <section className="bg-gradient-to-br from-card to-background px-0 mx-0 my-0 py-0">
        <div className="container mx-auto px-0">
          
          {/* Oferta Limitada */}
          <div className="text-center mb-16">
            
            
            <div className="max-w-4xl mx-auto">
              <div className="md:flex items-center justify-center gap-12 mb-8 px-[35px] py-0 mx-[12px]">
                {/* Capa do produto - mais destacada */}
                <div className="flex-shrink-0 mb-8 md:mb-0">
                  <div className="relative">
                    <img src={ebookMockup} alt="E-book O Brigadeiro Perfeito" className="w-64 md:w-80 mx-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300" />
                    <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold animate-bounce">
                      60% OFF
                    </div>
                  </div>
                </div>
                
                {/* Informações de preço */}
                <div className="text-center md:text-left">
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-gold-elegant">
                    E-book O Brigadeiro Perfeito
                  </h3>
                  <div className="mb-6 px-[5px]">
                    <p className="text-xl text-muted-foreground line-through mb-2">De: R$47,00</p>
                    <p className="text-5xl md:text-7xl font-bold text-success-sweet mb-2">R$19,00</p>
                    <Badge className="bg-gold-elegant text-chocolate-rich font-bold text-lg px-4 py-2">ECONOMIA DE R$28,00</Badge>
                  </div>
                  
                  <div className="space-y-3 mb-6 text-left">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-success-sweet" />
                      <span>+70 receitas testadas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-success-sweet" />
                      <span>Videoaula introdutória</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-success-sweet" />
                      <span>Precificação completa</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button variant="cta" size="lg" className="text-xl rounded-full shadow-2xl py-[6px] px-0 mx-0">
                🧁 Garantir com preço promocional!
              </Button>
            </div>
          </div>

          {/* Garantia */}
          <div className="mb-16">
            <Card className="max-w-3xl mx-auto text-center p-8 bg-card/80 backdrop-blur-sm border-gold-elegant/20">
              <CardContent className="p-0">
                <Shield className="w-16 h-16 text-success-sweet mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold mb-4 text-gold-elegant">
                  🔒 Garantia e confiança
                </h3>
                <p className="text-lg">
                  Seu investimento está 100% protegido por 7 dias, conforme a lei. 
                  Se o e-book não for o que prometemos, peça seu reembolso e será feito sem complicações.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sobre o Criador */}
          <div className="mb-16">
            <Card className="max-w-4xl mx-auto p-8 bg-card/80 backdrop-blur-sm border-gold-elegant/20">
              <CardContent className="p-0">
                <div className="md:flex items-center gap-8">
                  <div className="flex-shrink-0 mb-6 md:mb-0">
                    <img src={chefMatheus} alt="Chef Matheus" className="w-48 h-48 object-cover rounded-full mx-auto shadow-2xl" />
                  </div>
                  <div className="text-center md:text-left">
                    <Badge className="mb-4 bg-gold-elegant text-chocolate-rich font-semibold">
                      👨‍🍳 SOBRE O CRIADOR
                    </Badge>
                    <h3 className="font-display text-2xl font-bold mb-4 text-gold-elegant">
                      Muito prazer, eu sou o Matheus
                    </h3>
                    <p className="text-lg mb-4">
                      Caiçara, 23 anos, apaixonado por confeitaria. Criei esse material para ajudar 
                      as pessoas a lucrarem com doces mesmo começando do zero.
                    </p>
                    <p className="text-xl font-semibold text-success-sweet">
                      Hoje já são mais de 7.000 alunas espalhadas por todo o Brasil e mundo afora!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-12 text-gold-elegant">
              ❓ Dúvidas Frequentes
            </h3>
            <div className="max-w-3xl mx-auto space-y-4">
              {["Por quanto tempo terei acesso ao e-book?", "A aula foi gravada?", "Como tirar minhas dúvidas?", "Posso dar de presente?", "É confiável?", "Como acessar o conteúdo?", "Tem atualizações grátis?", "Posso pagar com Pix ou cartão?"].map((question, index) => <Card key={index} className="p-4 hover:bg-card/80 transition-colors cursor-pointer">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{question}</span>
                      <span className="text-gold-elegant">+</span>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center">
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              "Fácil de entender, né? Se você não quer perder o valor promocional, é só clicar no botão abaixo!"
            </p>
            <Button variant="cta" size="lg" className="text-2xl rounded-full shadow-2xl py-0 px-0">
              🎯 Quero aproveitar o desconto agora!
            </Button>
            
            {/* Primeira imagem de depoimento destacada */}
            <div className="mt-12 max-w-md mx-auto">
              <img src={testimonial1} alt="Depoimento em destaque" className="w-full rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="py-12 bg-chocolate-rich text-center">
        <div className="container mx-auto px-4">
          <p className="text-lg mb-4">© 2025 Matheus – Todos os direitos reservados</p>
          <div className="flex justify-center gap-6 mb-6 text-sm">
            <a href="#" className="hover:text-gold-elegant transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-gold-elegant transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gold-elegant transition-colors">Suporte</a>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <Badge className="bg-success-sweet text-white">🔒 Compra Segura</Badge>
            <Badge className="bg-gold-elegant text-chocolate-rich">💳 Pagamento via Yampi</Badge>
            <Badge className="bg-caramel text-white">📥 Entrega digital imediata</Badge>
          </div>
        </div>
      </footer>
    </div>;
};
export default LandingPage;