import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import brigadeiroMojito from "@/assets/brigadeiro-mojito.png";
import brigadeiroMojito1 from "@/assets/brigadeiro-mojito-1.png";
import brigadeiroMojito2 from "@/assets/brigadeiro-mojito-2.png";
import brigadeiroMojito3 from "@/assets/brigadeiro-mojito-3.png";
import brigadeiroMojito4 from "@/assets/brigadeiro-mojito-4.png";
import brigadeiroMojito5 from "@/assets/brigadeiro-mojito-5.png";
import brigadeiroMojito6 from "@/assets/brigadeiro-mojito-6.png";
import brigadeiroMojito7 from "@/assets/brigadeiro-mojito-7.png";
import brigadeiroMojito8 from "@/assets/brigadeiro-mojito-8.png";
import brigadeiroMojito9 from "@/assets/brigadeiro-mojito-9.png";
import brigadeiroMojito10 from "@/assets/brigadeiro-mojito-10.png";
import brigadeiroMojito11 from "@/assets/brigadeiro-mojito-11.png";
import brigadeiroMojito12 from "@/assets/brigadeiro-mojito-12.png";
const BrigadeiroFlavors = () => {
  const flavors = [{
    name: "Mojito",
    image: brigadeiroMojito
  }, {
    name: "Mojito 1",
    image: brigadeiroMojito1
  }, {
    name: "Mojito 2",
    image: brigadeiroMojito2
  }, {
    name: "Mojito 3",
    image: brigadeiroMojito3
  }, {
    name: "Mojito 4",
    image: brigadeiroMojito4
  }, {
    name: "Mojito 5",
    image: brigadeiroMojito5
  }, {
    name: "Mojito 6",
    image: brigadeiroMojito6
  }, {
    name: "Mojito 7",
    image: brigadeiroMojito7
  }, {
    name: "Mojito 8",
    image: brigadeiroMojito8
  }, {
    name: "Mojito 9",
    image: brigadeiroMojito9
  }, {
    name: "Mojito 10",
    image: brigadeiroMojito10
  }, {
    name: "Mojito 11",
    image: brigadeiroMojito11
  }, {
    name: "Mojito 12",
    image: brigadeiroMojito12
  }];
  return <div className="mb-16">
      <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-12 text-gold-elegant px-[19px] py-0 my-[10px] mx-[25px]">
        🍓 Alguns sabores que você vai aprender:
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {flavors.map((flavor, index) => <Card key={index} className="overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="aspect-square relative">
              <img src={flavor.image} alt={`Brigadeiro ${flavor.name}`} className="w-full h-full object-cover" />
            </div>
          </Card>)}
      </div>
      <div className="text-center mt-8">
        <Button variant="cta" size="lg" className="text-lg rounded-full">
          🍬 Quero garantir meu acesso!
        </Button>
      </div>
    </div>;
};
export default BrigadeiroFlavors;