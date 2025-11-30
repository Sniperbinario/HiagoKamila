"use client";
import React from "react";
import { motion } from "framer-motion";

// Ícones inline
const HeartIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden {...props}>
    <path
      fill="currentColor"
      d="M12 21s-7.5-4.9-10-8.1C-0.1 7.5 3.6 3 7.3 4.6 9 5.4 10.3 7.1 12 9c1.7-1.9 3-3.6 4.7-4.4 3.7-1.6 7.4 2.9 5.3 8.3C19.5 16.1 12 21 12 21z"
    />
  </svg>
);

const SparklesIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...props}>
    <path
      fill="currentColor"
      d="M12 2l1.9 4.3L18 8l-4.1 1.7L12 14l-1.9-4.3L6 8l4.1-1.7L12 2zm8 14l1.2 2.7L22 21l-2.3.9L17.4 24 16 21.1 14 20l2.2-1.6L17 16l3 0z"
    />
  </svg>
);

// ====== DADOS ======
const DATA = {
  couple: "Hiago ♥ Kamila",
  subtitle: "1 ano de nós dois",
  heroPhrase:
    "O destino escreve certo... mas naquele dia, ele caprichou tanto que virou poesia.",

  storyTitle: "Como tudo começou",

  // ====== SEU TEXTO EXATO ======
  story: `A gente começou uma semana depois do primeiro encontro. E nesse encontro rolou um monte de coisa, você falando que o beijo ia decidir se a gente ia começar ou não, eu rindo e entrando na sua onda. A gente já tava falando até de comprar um apartamento em Águas Claras e dos nossos filhos pagando tudo, como se fosse normal falar disso no primeiro encontro.

Logo eu quis conhecer sua mãe, porque desde o começo eu já sabia que você não ia ser minha ficante. Nunca deixei você ser minha ficante, porque eu já sentia que tinha algo a mais.

Com três semanas de namoro você já viajou comigo e conheceu minha família na formatura do meu irmão. Encarou na boa, ficou do meu lado, e dali a gente nunca mais desgrudou.

Poucos meses depois a gente começou a morar junto. Simples assim. Pra muita gente parece cedo, mas pra gente foi natural. A gente só quis e pronto.

Adotamos nossa gatinha, montamos nossa casa, fizemos nossa rotina. Temos muita coisa parecida, mas também temos várias diferenças, e é isso que faz a gente se completar do nosso jeito.

Às vezes a gente se desentende, normal. Mas a real é que a gente se ama muito, e esse amor só cresce.`,

  milestones: [
    { title: "O Primeiro Encontro", text: "O beijo que decidiu tudo." },
    {
      title: "A Viagem em 3 Semanas",
      text: "Você encarou minha família toda e ficou do meu lado.",
    },
    {
      title: "Nosso Primeiro Lar",
      text: "Morar junto só... aconteceu. Do nosso jeito.",
    },
  ],

  // ====== FOTOS 1 A 10 ======
  gallery: Array.from({ length: 10 }, (_, i) => `/images/FOTO${i + 1}.JPG`),

  date: "30/11/2025",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-200/60 via-white to-pink-100 text-gray-900 font-sans px-6 pb-20">

      {/* HEADER */}
      <header className="text-center py-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold tracking-tight"
        >
          {DATA.couple}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-2 text-lg text-gray-700 italic"
        >
          {DATA.subtitle}
        </motion.p>
      </header>

      {/* PHRASE */}
      <section className="max-w-3xl mx-auto text-center my-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed"
        >
          {DATA.heroPhrase}
        </motion.p>
      </section>

      {/* STORY */}
      <section className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 border border-rose-100">
        <h2 className="text-2xl font-bold text-rose-600 mb-4 text-center">
          {DATA.storyTitle}
        </h2>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          {DATA.story.split("\n\n").map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="mt-6 text-center">
          <SparklesIcon className="mx-auto text-rose-500" />
        </div>

        {/* MILESTONES */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {DATA.milestones.map((m, i) => (
            <div
              key={i}
              className="bg-rose-50 p-4 rounded-xl shadow-sm text-center"
            >
              <div className="font-semibold text-rose-600">{m.title}</div>
              <div className="text-sm text-gray-600 mt-2">{m.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-4xl mx-auto mt-16">
        <h3 className="text-center text-2xl font-bold text-rose-600 mb-6">
          Nossos Momentos
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {DATA.gallery.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`foto-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full h-56 object-cover rounded-2xl shadow-lg"
            />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center mt-16 text-gray-700">
        <p className="text-sm">
          Com amor, Hiago → Kamila • {DATA.date}
        </p>
        <div className="mx-auto mt-2 w-8 h-8">
          <HeartIcon className="text-rose-500" />
        </div>
      </footer>
    </div>
  );
}