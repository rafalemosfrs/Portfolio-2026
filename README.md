# 🌌 Portfólio Rafael Lemos

Portfólio pessoal de **Rafael Lemos**, Desenvolvedor Fullstack de Fortaleza, CE.

O projeto apresenta minha trajetória, habilidades, experiências, formação, certificados e projetos reais em uma interface moderna inspirada em **espaço, universo e Interestelar**. A proposta visual combina atmosfera cósmica, glassmorphism, animações suaves e uma navegação fluida para destacar meu trabalho com desenvolvimento web.

---

## 🚀 Demonstração

🔗 **Portfólio online:** [https://rafael-lemos.vercel.app](https://rafael-lemos.vercel.app)

---

## ✨ Principais recursos

- Interface responsiva para desktop, tablet e mobile
- Tema visual dark inspirado em espaço e ficção científica
- Background cósmico animado com estrelas e nebulosas
- Cards com efeito glassmorphism
- Animações com Framer Motion
- Seções organizadas para apresentação profissional
- Projetos com preview em imagem, links de deploy e repositórios
- Botão flutuante de WhatsApp fixo no canto inferior direito
- Download direto do currículo
- Download direto do certificado Full Stack
- Formulário visual de contato pronto para integração futura
- SEO básico e estrutura semântica

---

## 🛠️ Tecnologias utilizadas

- **React**
- **JavaScript**
- **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**
- **React Intersection Observer**
- **Vercel**

---

## 🛰️ Seções do site

- **Início:** apresentação principal, animação de digitação e botões de ação
- **Sobre:** resumo profissional e diferenciais da trajetória
- **Skills:** habilidades técnicas, ferramentas, boas práticas e soft skills
- **Projetos:** lista de projetos reais com imagem, descrição, tags, deploy e código
- **Experiência:** timeline com experiências principais e anteriores
- **Formação:** graduação, curso complementar e idiomas
- **Certificados:** certificado Full Stack com botão de download
- **Missão:** processo de trabalho apresentado como uma jornada
- **Diferenciais:** pontos fortes em performance, produto, código e visão fullstack
- **Contato:** e-mail, LinkedIn, GitHub e formulário visual
- **Footer:** links rápidos, contatos e créditos

---

## 💼 Projetos em destaque

- **Busca por Região**  
  Consulta a API do IBGE para exibir municípios por estado.

- **Landing Page Dentista**  
  Landing page moderna e responsiva para consultório odontológico.

- **Landing Page Solar**  
  Página comercial para energia solar com foco em conversão e performance.

- **Site para Engenharia Solar**  
  Site institucional moderno para empresa de engenharia elétrica e energia solar.

- **Linkfour**  
  Aplicação fullstack inspirada no Linktree, com área logada, backend e banco de dados.

- **AlineCunhaBeauty**  
  Landing page elegante e responsiva para salão de beleza.

- **Tcno Certificadora Digital**  
  SPA para certificadora digital com rotas, FAQ, página 404 e CTAs para WhatsApp.

- **Projeto Sabres**  
  Site completo para time de futebol americano com calendário e área logada.

- **ConecTEA - Espaço do Autista**  
  Projeto acadêmico em parceria com o Espaço do Autista.

---

## 📁 Estrutura do projeto

```txt
public/
├── assets/
│   └── img/
│       ├── alinecunhabeauty.jpg
│       ├── busca-por-regiao.jpg
│       ├── conectea.jpeg
│       ├── engenharia-solar.jpg
│       ├── landing-page-dentista.jpg
│       ├── landing-page-solar.jpg
│       ├── linkfour.jpg
│       ├── projeto-sabres.jpg
│       └── tcno-certificadora.jpg
├── favicon.ico
├── RafaelLemos-Certificado.pdf
└── RafaelLemos-Curriculo_Final.pdf

src/
├── assets/
├── components/
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Differentials.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Mission.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   └── ui/
│       ├── CosmicBackground.jsx
│       ├── Footer.jsx
│       ├── Header.jsx
│       └── WhatsAppButton.jsx
├── data/
│   └── siteData.js
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

---

## ⚙️ Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/rafalemosfrs/NewPortfolio.git

# Entre na pasta do projeto
cd NewPortfolio

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Depois acesse:

```txt
http://localhost:5173
```

---

## 📦 Build de produção

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

---

## 🖼️ Imagens dos projetos

As imagens usadas nos cards dos projetos ficam em:

```txt
public/assets/img/
```

Os caminhos são definidos no arquivo:

```txt
src/data/siteData.js
```

Exemplo:

```js
image: "/assets/img/linkfour.jpg"
```

Como os arquivos estão dentro da pasta `public`, o caminho começa direto com `/assets`.

---

## 📄 Currículo e certificado

Os arquivos PDF ficam na pasta `public`:

```txt
public/RafaelLemos-Curriculo_Final.pdf
public/RafaelLemos-Certificado.pdf
```

No arquivo `src/data/siteData.js`, eles são referenciados assim:

```js
resumeUrl: "/RafaelLemos-Curriculo_Final.pdf"
```

E no certificado:

```js
certificateUrl: "/RafaelLemos-Certificado.pdf"
```

Esses caminhos permitem download direto pelos botões do site.

---

## 🌐 Deploy

O projeto está hospedado na **Vercel**.

🔗 [https://rafael-lemos.vercel.app](https://rafael-lemos.vercel.app)

---

## 📬 Contato

- **E-mail:** [rafaelemosfr@gmail.com](mailto:rafaelemosfr@gmail.com)
- **LinkedIn:** [linkedin.com/in/rafalemosfrs](https://linkedin.com/in/rafalemosfrs)
- **GitHub:** [github.com/rafalemosfrs](https://github.com/rafalemosfrs)
- **Portfólio:** [rafael-lemos.vercel.app](https://rafael-lemos.vercel.app)

---

## 🪐 Inspiração visual

A identidade visual do projeto foi pensada para transmitir tecnologia, profundidade e evolução, com elementos inspirados em espaço, órbitas, estrelas, nebulosas e na atmosfera contemplativa de Interestelar.

> “Do not go gentle into that good night”  
> Interestelar

---

## 👨‍💻 Autor

Desenvolvido com 💙 por **Rafael Lemos**.

---

## 📄 Licença

Este projeto está sob a licença **MIT**.  
Sinta-se livre para usar como referência e inspiração.
