/* =========================================================
   Cachos & Café - script.js
   ========================================================= */

/* ---------- 0. IMAGENS ----------*/
const IMAGENS = {
  banner: "img/oleos/Banner.jpg",   // Banner da página inicial.
  oleos: "img/oleos/oleos.jpg",    // Imagem do card "Óleos" na página inicial
  lavagem: "lavagem/header.jpg",  // Imagem do card "Lavagem" na página inicial
  cremes: "cremes/Curling creams💕💕.jpg"    // Imagem do card "Cremes" na página inicial
};

/* ---------- 1. PRODUTOS ---------- */
const PRODUTOS = [
  // ÓLEOS E ADICIONAIS
  { cat: "oleos", nome: "Óleo de Coco Extravirgem", desc: "Nutrição intensa e brilho natural para pré-shampoo.", preco: 34.9, cor: "#e8d8bd", forma: "pote", tag: "Mais vendido", img: "img/oleos/Coconut.jpg" },
  { cat: "oleos", nome: "Óleo de Argan Puro", desc: "Sela as pontas, reduz frizz e dá maciez.", preco: 49.9, cor: "#c9a063", forma: "frasco", tag: "Premium", img: "img/oleos/Argan.jpg" },
  { cat: "oleos", nome: "Óleo de Rícino", desc: "Auxilia no fortalecimento e crescimento dos fios.", preco: 29.9, cor: "#8a5a2b", forma: "frasco", tag: "Fortalece", img: "img/oleos/Castor.jpg" },
  { cat: "oleos", nome: "Óleo de Abacate", desc: "Rico em vitaminas, ideal para cabelos ressecados.", preco: 39.9, cor: "#6b7040", forma: "frasco", tag: "Vegano", img: "img/oleos/Avocado.jpg" },
  { cat: "oleos", nome: "Sérum Finalizador", desc: "Brilho espelhado e proteção térmica sem pesar.", preco: 44.9, cor: "#b08a5a", forma: "frasco", tag: "Finalizador", img: "img/oleos/Leave-in.jpg" },
  { cat: "oleos", nome: "Ampola de Nutrição", desc: "Adicional para turbinar a máscara ou o creme.", preco: 19.9, cor: "#4a3222", forma: "bisnaga", tag: "Adicional", img: "img/oleos/Nutrição.jpg" },
  // LAVAGEM
  { cat: "lavagem", nome: "Shampoo Low Poo", desc: "Limpeza suave que preserva a hidratação dos cachos.", preco: 42.9, cor: "#6b7040", forma: "frasco", tag: "Uso diário", img: "lavagem/Lowpoo.jpg" },
  { cat: "lavagem", nome: "Co-Wash Cremoso", desc: "Lava sem espuma, limpa e hidrata ao mesmo tempo.", preco: 46.9, cor: "#d8b98f", forma: "pote", tag: "Sem sulfato", img: "lavagem/Co-wash.jpg" },
  { cat: "lavagem", nome: "Shampoo Nutri Waves", desc: "Remove resíduos e excesso de produtos acumulados.", preco: 52.9, cor: "#8a6b4a", forma: "frasco", tag: "Nutrição", img: "lavagem/shampoo.jpg" },
  { cat: "lavagem", nome: "Condicionador Nutri Waves", desc: "Desembaraça com facilidade e dá maciez.", preco: 38.9, cor: "#a68a64", forma: "frasco", tag: "Desembaraça", img: "lavagem/condicionador.jpg" },
  { cat: "lavagem", nome: "Mascara Nutri Waves", desc: "Nutra o seu cabelo e reconstrua os foliculos.", preco: 49.9, cor: "#4a3222", forma: "frasco", tag: "Profundo", img: "lavagem/mascara.jpg" },
  { cat: "lavagem", nome: "Acidificante Apice", desc: "Ajuste o PH do seu cabelo para auxiliar na maciez e porosidade", preco: 41.9, cor: "#7d8348", forma: "pote", tag: "Acidificante", img: "lavagem/acidificante.jpg" },
  // CREMES
  { cat: "cremes", nome: "Creme de Pentear Nutri Waves", desc: " Desenvolvido principalmente para cabelos ondulados e cachos leves. Focado em nutrir e definir os fios sem pesar, controlando o frizz e garantindo movimento natural.", preco: 45.9, cor: "#c9a063", forma: "pote", tag: "Mais vendido", img: "cremes/Nutri waves.jpg" },
  { cat: "cremes", nome: "Creme de pentear Cantu shea butter", desc: "Um finalizador ultra-hidratante à base de manteiga de karité pura. É ideal para cabelos cacheados e crespos muito secos, ajudando a reter a umidade, alongar os cachos e dar brilho.", preco: 32.9, cor: "#6b7040", forma: "Hidratação", tag: "Fixação", img: "cremes/Cantushea.jpg" },
  { cat: "cremes", nome: "Creme de Pentear widi Care", desc: "Creme de alta performance voltado para a modelagem, nutrição profunda e condicionamento de curvaturas, oferecendo até 48 horas de definição e controle de frizz.", preco: 59.9, cor: "#4a3222", forma: "pote", tag: "Ondulados", img: "cremes/Widi.jpg" },
  { cat: "cremes", nome: "Creme de Pentear Crespo Power", desc: " Formulado especificamente para as necessidades dos cabelos crespos (tipo 4) e porosos. Fornece alta carga de nutrição lipídica (com manteigas e óleos), facilitando o desembaraço e definindo com alta fixação.", preco: 39.9, cor: "#e8d8bd", forma: "bisnaga", tag: "Crespos", img: "cremes/crespo.jpg" },
  { cat: "cremes", nome: "Gelatina Modeladora", desc: "• Um produto de estilização usado para dar alta fixação, memorização de cachos e controle total do frizz. Geralmente é aplicada sozinha ou misturada com cremes de pentear para fazer o penteado durar por mais dias (efeito day after).", preco: 36.9, cor: "#9aa05a", forma: "frasco", tag: "Gel", img: "cremes/Gelatina.jpg" },
  { cat: "cremes", nome: "Leave-In Apice", desc: " Um finalizador sem enxágue multifuncional e leve. Atua protegendo a fibra capilar contra agressões externas e calor, facilitando o pentear e repondo nutrientes essenciais de forma suave diária.", preco: 64.9, cor: "#8a5a2b", forma: "pote", tag: "Leave-in", img: "cremes/leavein.jpg" }
];

/* ---------- 2. IMAGENS / ILUSTRAÇÕES ---------- */
// Usa a foto se houver; senão usa a ilustração SVG
function imagemOuSVG(src, fallback, alt) {
  return src ? `<img src="${src}" alt="${alt}" loading="lazy">` : fallback;
}

function produtoSVG(cor, forma) {
  const tampa = "#4a3222";
  let corpo = "";
  if (forma === "pote") {
    corpo = `
      <rect x="45" y="65" width="110" height="80" rx="12" fill="${cor}" stroke="#4a3222" stroke-width="3"/>
      <rect x="40" y="45" width="120" height="28" rx="8" fill="${tampa}"/>
      <rect x="62" y="90" width="76" height="34" rx="6" fill="#fbf6ec" opacity=".85"/>
      <circle cx="100" cy="107" r="9" fill="#6b7040"/>`;
  } else if (forma === "bisnaga") {
    corpo = `
      <path d="M55 35 H145 L135 150 H65 Z" fill="${cor}" stroke="#4a3222" stroke-width="3" stroke-linejoin="round"/>
      <rect x="82" y="15" width="36" height="24" rx="5" fill="${tampa}"/>
      <rect x="72" y="70" width="56" height="40" rx="6" fill="#fbf6ec" opacity=".85"/>
      <circle cx="100" cy="90" r="9" fill="#6b7040"/>`;
  } else {
    corpo = `
      <rect x="62" y="55" width="76" height="100" rx="16" fill="${cor}" stroke="#4a3222" stroke-width="3"/>
      <rect x="84" y="32" width="32" height="26" rx="4" fill="${tampa}"/>
      <rect x="90" y="18" width="20" height="16" rx="3" fill="#6b7040"/>
      <rect x="72" y="85" width="56" height="42" rx="6" fill="#fbf6ec" opacity=".85"/>
      <circle cx="100" cy="106" r="10" fill="#6b7040"/>`;
  }
  return `<svg viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Produto">
    <ellipse cx="100" cy="158" rx="60" ry="8" fill="#000" opacity=".12"/>${corpo}</svg>`;
}

function categoriaSVG(tipo) {
  const miolo = (cor, forma) => produtoSVG(cor, forma).replace(/<\/?svg[^>]*>/g, "");
  if (tipo === "oleos") {
    return `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(10,10)">${miolo("#c9a063", "frasco")}</g>
      <g transform="translate(100,0) scale(.9)">${miolo("#6b7040", "frasco")}</g>
      <circle cx="255" cy="45" r="14" fill="#6b7040" opacity=".6"/><circle cx="270" cy="75" r="9" fill="#c9a063"/></svg>`;
  }
  if (tipo === "lavagem") {
    return `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0,5)">${miolo("#6b7040", "frasco")}</g>
      <g transform="translate(95,10)">${miolo("#d8b98f", "pote")}</g>
      <circle cx="40" cy="30" r="10" fill="none" stroke="#fff" stroke-width="3" opacity=".8"/>
      <circle cx="260" cy="40" r="14" fill="none" stroke="#fff" stroke-width="3" opacity=".8"/>
      <circle cx="275" cy="80" r="7" fill="none" stroke="#fff" stroke-width="3" opacity=".8"/></svg>`;
  }
  return `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0,10)">${miolo("#c9a063", "pote")}</g>
      <g transform="translate(95,0)">${miolo("#e8d8bd", "bisnaga")}</g>
      <circle cx="265" cy="50" r="22" fill="none" stroke="#4a3222" stroke-width="7"/>
      <circle cx="265" cy="50" r="9" fill="none" stroke="#4a3222" stroke-width="5"/></svg>`;
}

// LOGO: xícara de café com fumaça em formato de cacho
function logoSVG() {
  return `<svg class="logo-svg" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cachos & Café">
    <path d="M28 33 C22 29 34 25 28 21 C24 17 30 10 36 12 C41 14 40 21 35 20 C32 19 32 16 34 15"
          fill="none" stroke="#b7bd7a" stroke-width="2.8" stroke-linecap="round"/>
    <path d="M42 33 C38 30 46 27 42 24 C40 22 43 19 46 21"
          fill="none" stroke="#b7bd7a" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M14 37 H50 V45 C50 53 44 58 32 58 C20 58 14 53 14 45 Z" fill="#d8b98f"/>
    <path d="M50 40 H54 C59 40 59 50 52 50 H49" fill="none" stroke="#d8b98f" stroke-width="3" stroke-linecap="round"/>
    <path d="M9 61 H55" stroke="#f5ecdc" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`;
}

/* ---------- 3. HEADER E FOOTER ---------- */
const PAGINAS = [
  ["index.html", "Início"],
  ["oleos.html", "Óleos"],
  ["lavagem.html", "Lavagem"],
  ["cremes.html", "Cremes"],
  ["contato.html", "Contato"]
];

function montarHeaderFooter() {
  const atual = location.pathname.split("/").pop() || "index.html";
  const links = PAGINAS.map(([href, nome]) =>
    `<a href="${href}" class="${atual === href ? "ativo" : ""}">${nome}</a>`).join("");

  const header = document.getElementById("header");
  if (header) header.outerHTML = `
    <header class="header">
      <a href="index.html" class="logo">${logoSVG()}<span class="logo-texto">Cachos <em>&amp;</em> Café</span></a>
      <nav class="nav">${links}</nav>
      <div class="acoes">
        <div class="temas" title="Escolher tema">
          <button class="t-bege" data-tema="bege" aria-label="Tema bege"></button>
          <button class="t-caramelo" data-tema="caramelo" aria-label="Tema caramelo"></button>
          <button class="t-escuro" data-tema="escuro" aria-label="Tema preto"></button>
        </div>
        <a href="carrinho.html" class="carrinho" aria-label="Abrir carrinho">🛒 <span id="contador">0</span></a>
      </div>
    </header>`;

  const footer = document.getElementById("footer");
  if (footer) footer.outerHTML = `
    <footer class="footer">
      <p><strong>Cachos &amp; Café</strong> · Cuidando dos seus cachos com carinho 🌿</p>
      <p style="margin-top:.5rem">${PAGINAS.map(([h, n]) => `<a href="${h}">${n}</a>`).join("")}<a href="carrinho.html">Carrinho</a></p>
      <p style="margin-top:.8rem;font-size:.85rem;opacity:.7">© ${new Date().getFullYear()} Cachos &amp; Café. Todos os direitos reservados.</p>
    </footer>
    <div class="toast" id="toast"></div>`;
}

/* ---------- 4. TEMA (bege / caramelo / preto) ---------- */
const TEMAS = ["bege", "caramelo", "escuro"];

function aplicarTema(tema) {
  if (!TEMAS.includes(tema)) tema = "bege";
  document.documentElement.setAttribute("data-theme", tema);
  document.querySelectorAll(".temas button").forEach(b =>
    b.classList.toggle("ativo", b.dataset.tema === tema));
  try { localStorage.setItem("tema", tema); } catch (e) { }
}
function iniciarTema() {
  let salvo = "bege";
  try { salvo = localStorage.getItem("tema") || "bege"; } catch (e) { }
  aplicarTema(salvo);
  document.querySelectorAll(".temas button").forEach(b =>
    b.addEventListener("click", () => aplicarTema(b.dataset.tema)));
}

/* ---------- 5. CARRINHO ---------- */
const moeda = v => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
let memoria = []; // reserva caso o navegador bloqueie o localStorage

function lerCarrinho() {
  try { return JSON.parse(localStorage.getItem("carrinhoItens")) || []; }
  catch (e) { return memoria; }
}
function salvarCarrinho(itens) {
  memoria = itens;
  try { localStorage.setItem("carrinhoItens", JSON.stringify(itens)); } catch (e) { }
  atualizarContador();
}
function atualizarContador() {
  const c = document.getElementById("contador");
  if (c) c.textContent = lerCarrinho().reduce((s, i) => s + i.qtd, 0);
}
function mostrarToast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}
function adicionar(nome) {
  const p = PRODUTOS.find(x => x.nome === nome);
  if (!p) return;
  const itens = lerCarrinho();
  const existente = itens.find(i => i.nome === nome);
  if (existente) existente.qtd++;
  else itens.push({ nome: p.nome, preco: p.preco, cor: p.cor, forma: p.forma, img: p.img, qtd: 1 });
  salvarCarrinho(itens);
  mostrarToast(`✔ ${nome} adicionado ao carrinho!`);
}

function iniciarPaginaCarrinho() {
  const area = document.getElementById("carrinhoArea");
  if (!area) return;

  function render() {
    const itens = lerCarrinho();
    if (itens.length === 0) {
      area.innerHTML = `
        <h1 class="titulo">Meu carrinho</h1>
        <div class="vazio-carrinho">
          <p>Seu carrinho está vazio 🛒</p>
          <a href="index.html#categorias" class="btn">Ver produtos</a>
        </div>`;
      return;
    }
    const total = itens.reduce((s, i) => s + i.preco * i.qtd, 0);
    area.innerHTML = `
      <h1 class="titulo">Meu carrinho</h1>
      <div class="lista-carrinho">
        ${itens.map((i, idx) => `
          <div class="item-carrinho">
            <div class="item-img">${imagemOuSVG(i.img, produtoSVG(i.cor, i.forma), i.nome)}</div>
            <div class="item-info"><h3>${i.nome}</h3><span>${moeda(i.preco)} cada</span></div>
            <div class="qtd">
              <button data-acao="menos" data-i="${idx}" aria-label="Diminuir">−</button>
              <span>${i.qtd}</span>
              <button data-acao="mais" data-i="${idx}" aria-label="Aumentar">+</button>
            </div>
            <strong class="subtotal">${moeda(i.preco * i.qtd)}</strong>
            <button class="remover" data-acao="remover" data-i="${idx}" aria-label="Remover">🗑</button>
          </div>`).join("")}
      </div>
      <div class="resumo">
        <span>Total:</span><strong>${moeda(total)}</strong>
        <button class="btn" id="finalizar">Finalizar compra</button>
      </div>`;
  }

  area.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    if (b.id === "finalizar") {
      salvarCarrinho([]);
      area.innerHTML = `<h2 class="compra-ok">Compra realizada!</h2>`;
      return;
    }
    const idx = parseInt(b.dataset.i, 10);
    const itens = lerCarrinho();
    if (!itens[idx]) return;
    if (b.dataset.acao === "mais") itens[idx].qtd++;
    if (b.dataset.acao === "menos") itens[idx].qtd--;
    if (b.dataset.acao === "remover") itens[idx].qtd = 0;
    salvarCarrinho(itens.filter(i => i.qtd > 0));
    render();
  });
  render();
}

/* ---------- 6. PÁGINAS DE PRODUTOS ---------- */
function iniciarProdutos() {
  const main = document.querySelector("[data-categoria]");
  if (!main) return;
  const cat = main.dataset.categoria;
  const grid = document.getElementById("grid");
  const busca = document.getElementById("busca");
  const ordem = document.getElementById("ordem");
  const vazio = document.getElementById("vazio");
  const lista = PRODUTOS.filter(p => p.cat === cat);

  function render() {
    const termo = busca.value.toLowerCase().trim();
    let itens = lista.filter(p => (p.nome + p.desc).toLowerCase().includes(termo));
    if (ordem.value === "menor") itens.sort((a, b) => a.preco - b.preco);
    if (ordem.value === "maior") itens.sort((a, b) => b.preco - a.preco);
    if (ordem.value === "nome") itens.sort((a, b) => a.nome.localeCompare(b.nome));

    grid.innerHTML = itens.map(p => `
      <article class="produto">
        <div class="produto-img">${imagemOuSVG(p.img, produtoSVG(p.cor, p.forma), p.nome)}</div>
        <div class="produto-corpo">
          <span class="tag">${p.tag}</span>
          <h3>${p.nome}</h3>
          <p>${p.desc}</p>
          <span class="preco">${moeda(p.preco)}</span>
          <button class="btn" data-nome="${p.nome}">Adicionar ao carrinho</button>
        </div>
      </article>`).join("");
    vazio.hidden = itens.length > 0;
  }

  grid.addEventListener("click", e => {
    const btn = e.target.closest("button[data-nome]");
    if (btn) adicionar(btn.dataset.nome);
  });
  busca.addEventListener("input", render);
  ordem.addEventListener("change", render);
  render();
}

/* ---------- 7. BANNER E CARDS DE CATEGORIA (página inicial) ---------- */
function iniciarBanner() {
  const bg = document.getElementById("heroBg");
  if (bg && IMAGENS.banner) {
    bg.style.backgroundImage = `url("${IMAGENS.banner}")`;
    bg.classList.remove("sem-imagem");
  }
}
function iniciarArtes() {
  document.querySelectorAll("[data-art]").forEach(el => {
    const t = el.dataset.art;
    el.innerHTML = imagemOuSVG(IMAGENS[t], categoriaSVG(t), t);
  });
}

/* ---------- 8. ANIMAÇÃO AO ROLAR ---------- */
function iniciarReveal() {
  const itens = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { itens.forEach(i => i.classList.add("visivel")); return; }
  const obs = new IntersectionObserver(entradas => {
    entradas.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("visivel"); obs.unobserve(e.target); }
    });
  }, { threshold: .15 });
  itens.forEach(i => obs.observe(i));
}

/* ---------- 9. FORMULÁRIO DE CONTATO ---------- */
function iniciarFormulario() {
  const form = document.getElementById("formContato");
  if (!form) return;
  const msg = document.getElementById("formMsg");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const texto = form.mensagem.value.trim();
    msg.className = "form-msg";
    if (nome.length < 2) { msg.textContent = "Informe seu nome."; msg.classList.add("erro"); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { msg.textContent = "Informe um e-mail válido."; msg.classList.add("erro"); return; }
    if (texto.length < 10) { msg.textContent = "Escreva uma mensagem com pelo menos 10 caracteres."; msg.classList.add("erro"); return; }
    msg.textContent = `Obrigado, ${nome}! Recebemos sua mensagem e responderemos em breve. 💚`;
    msg.classList.add("ok");
    form.reset();
  });
}

/* ---------- INICIALIZAÇÃO ---------- */
document.addEventListener("DOMContentLoaded", () => {
  montarHeaderFooter();
  iniciarTema();
  atualizarContador();
  iniciarBanner();
  iniciarArtes();
  iniciarProdutos();
  iniciarPaginaCarrinho();
  iniciarFormulario();
  iniciarReveal();
});