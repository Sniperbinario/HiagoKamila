// app/page.jsx

export default function HomePage() {
  const gallery = Array.from({ length: 10 }, (_, i) => `/images/FOTO${i + 1}.JPG`);

  return (
    <main style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Nossa História ❤️
      </h1>

      <section style={{ fontSize: "18px", lineHeight: "1.6" }}>
        <p>
          A gente começou uma semana depois do primeiro encontro. E nesse encontro
          rolou um monte de coisa, você falando que o beijo ia decidir se a gente
          ia começar ou não, eu rindo e entrando na sua onda. A gente já tava falando
          até de comprar um apartamento em Águas Claras e dos nossos filhos pagando tudo,
          como se fosse normal falar disso no primeiro encontro.
        </p>

        <p>
          Logo eu quis conhecer sua mãe, porque desde o começo eu já sabia que você
          não ia ser minha ficante. Nunca deixei você ser minha ficante, porque eu já
          sentia que tinha algo a mais.
        </p>

        <p>
          Com três semanas de namoro você já viajou comigo e conheceu minha família na
          formatura do meu irmão. Encarou na boa, ficou do meu lado, e dali a gente
          nunca mais desgrudou.
        </p>

        <p>
          Poucos meses depois a gente começou a morar junto. Simples assim. Pra muita gente
          parece cedo, mas pra gente foi natural. A gente só quis e pronto.
        </p>

        <p>
          Adotamos nossa gatinha, montamos nossa casa, fizemos nossa rotina. Temos muita
          coisa parecida, mas também temos várias diferenças, e é isso que faz a gente se
          completar do nosso jeito.
        </p>

        <p>
          Às vezes a gente se desentende, normal. Mas a real é que a gente se ama muito,
          e esse amor só cresce.
        </p>

        <br />

        <h2 style={{ marginTop: "40px" }}>O que eu sinto por nós ✨</h2>

        <p>
          No fim das contas, o que eu mais gosto é viver tudo isso com você.
          O dia normal, o dia caótico, o dia perfeito e até o dia meio torto.
          Tudo fica mais leve quando é você que tá do meu lado.
        </p>

        <p>
          É doido pensar que tudo começou num beijo que “ia decidir tudo”, e hoje eu olho
          pra nossa vida e penso que não tinha como ser diferente. A gente se escolheu,
          e continua se escolhendo todo dia, no nosso jeito, no nosso ritmo, do nosso modo
          torto e perfeito.
        </p>

        <p>
          E é isso que eu quero: continuar vivendo a vida com você. Cuidando, rindo,
          insistindo, aprendendo, crescendo e amando. Porque, sinceramente… nada no
          mundo faz mais sentido do que construir a minha história com você.
        </p>
      </section>

      <h2 style={{ marginTop: "50px", textAlign: "center" }}>Nossas Memórias 📸</h2>

      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {gallery.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Foto ${i + 1}`}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          />
        ))}
      </div>
    </main>
  );
}