"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const DATA = {
  couple: "Hiago ♥ Kamila",
  subtitle: "1 ano de nós dois",
  heroPhrase: "O destino escreve certo... mas naquele dia, ele caprichou tanto que virou poesia.",
  storyTitle: "Como tudo começou",
  story: `Tudo começou de um jeito muito nosso. Depois do primeiro encontro, não precisou de muita coisa pra perceber que tinha algo diferente rolando ali. Uma semana depois, já tava claro que a gente queria continuar. Você brincando que o beijo ia decidir tudo, eu fingindo calma, mas por dentro já sabia que aquele beijo ia marcar o início de uma parada real.

A gente falou de futuro como se fosse uma conversa qualquer. Um apê em Águas Claras, nossos filhos pagando tudo (coitados, nem sabem). Mas mesmo sendo brincadeira, soava natural, sabe? Como se fosse um plano que fazia sentido pra gente.

Eu quis conhecer sua mãe logo, porque no fundo eu já sabia onde isso ia dar. Nunca deixei você ser só minha ficante porque desde o começo você já era outra coisa pra mim. E aí, com três semanas de namoro, você viajou comigo e com a minha família inteira. Encarou todo mundo e ainda assim ficou do meu lado. Ali eu senti que a gente tinha encaixado de um jeito que não acontece sempre.

Depois veio a parte mais louca e mais certa: a gente começar a morar junto. Parecia cedo pra qualquer pessoa de fora, mas pra gente... apenas aconteceu. Simples. Natural. Criamos uma rotina, fizemos planos, cuidamos das nossas coisas, aprendemos um com o outro.

Adotamos nossa gatinha, nossa filha de quatro patas que completou nossa casa e virou parte da nossa história também. E no meio dessa convivência toda, a gente descobriu que tem muita coisa em comum, mas também várias diferenças, e é isso que faz o equilíbrio funcionar.

A gente briga às vezes, ninguém é perfeito, mas até nessas horas o amor continua ali, firme, do nosso jeito. E esse amor cresce. Cresce mesmo. Todo dia um pouco, do jeito certo, sendo real, sendo nosso.`,
  milestones: [
    { title: "O Primeiro Encontro", text: "Onde um beijo decidiu mais do que a gente imaginava." },
    { title: "A Viagem em 3 Semanas", text: "Você encarou minha família toda e ainda ficou do meu lado." },
    { title: "Nosso Primeiro Lar", text: "Quando morar junto simplesmente fez sentido." }
  ],
  vow: "Um ano depois, eu olho pra gente e penso: valeu cada passo, cada conversa, cada escolha. Não é sobre perfeição, é sobre verdade, e a nossa sempre foi real.",
  gallery: [
    "https://share.icloud.com/photos/04aFZcEhnTN6J7ajmMGJ05wPA",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=60"
  ],
  date: "30/11/2024",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-200/60 via-white to-pink-100 text-gray-900 font-sans px-6 pb-20">
      <header className="text-center py-10">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-5xl font-bold tracking-tight">
          {DATA.couple}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-2 text-lg text-gray-700 italic">
          {DATA.subtitle}
        </motion.p>
      </header>

      <section className="max-w-3xl mx-auto text-center my-12">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed">
          {DATA.heroPhrase}
        </motion.p>
      </section>

      <section className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 border border-rose-100">
        <h2 className="text-2xl font-bold text-rose-600 mb-4 text-center">{DATA.storyTitle}</h2>

        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
          {DATA.story}
        </p>

        <div className="mt-6 text-center">
          <Sparkles className="mx-auto text-rose-500" />
        </div>

        <p className="mt-6 text-gray-700 text-lg italic leading-relaxed text-center">
          {DATA.vow}
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {DATA.milestones.map((m, i) => (
            <div key={i} className="bg-rose-50 p-4 rounded-xl shadow-sm text-center">
              <div className="font-semibold text-rose-600">{m.title}</div>
              <div className="text-sm text-gray-600 mt-2">{m.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-16">
        <h3 className="text-center text-2xl font-bold text-rose-600 mb-6">Nossos Momentos</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {DATA.gallery.map((src, i) => (
            <motion.img key={i} src={src} alt={`galeria-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full h-56 object-cover rounded-2xl shadow-lg"
            />
          ))}
        </div>
      </section>

      <footer className="text-center mt-16 text-gray-700">
        <p className="text-sm">Com amor, Hiago → Kamila • {DATA.date}</p>
        <div className="mx-auto mt-2 w-8 h-8">
          <Heart className="text-rose-500" />
        </div>
      </footer>
    </div>
  );
}
