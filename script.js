// ===== 0. TEXTOS DO SITE (PT/BR e EN) =====
// Cada texto fixo da página tem uma chave (data-i18n no HTML).
const TEXTOS = {
  pt: {
    titulo_pagina: "Gabriel Carvalho Soares | Portfólio",
    descricao_pagina: "Portfólio Profissional de Gabriel Carvalho Soares",
    pular: "Pular para o conteúdo",
    nav_aria: "Principal", nav_sobre: "Sobre", nav_projetos: "Projetos", nav_experiencias: "Experiências",
    nav_habilidades: "Habilidades", nav_contato: "Contato",
    menu: "Menu", tema_claro: "Modo claro", tema_escuro: "Modo escuro",
    switch_texto: "PT/BR", switch_aria: "Idioma: português (Brasil). Clique para mudar para inglês.",
    cargo: "Estudante de Ciência da Computação | Desenvolvedor", tag_embarcado: "Software Incorporado",
    ver_projetos: "Ver projetos", falar: "Falar comigo", redes_aria: "Redes profissionais", alt_foto: "Foto de perfil",
    h_sobre: "Sobre mim",
    h_projetos: "Projetos", filtros_aria: "Filtrar projetos por tecnologia",
    tempo_aria: "Linha do tempo dos projetos, do mais antigo ao mais recente", carrossel_aria: "Projetos",
    anterior: "Anterior", proximo: "Próximo", todos: "Todos", codigo: "Código", demo: "Demonstração",
    projeto_alt: "Projeto {titulo} em funcionamento",
    h_experiencias: "Experiências",
    h_habilidades: "Habilidades", h_linguagens: "Linguagens", h_ferramentas: "Ferramentas", h_conceitos: "Conceitos",
    hab_git: "Git e GitHub", hab_algoritmos: "Algoritmos", hab_estruturas: "Estruturas de Dados", hab_soft: "Soft Skills em Comunicação",
    h_contato: "Contato", contato_intro: "Fale comigo por um dos canais abaixo ou envie uma mensagem pelo formulário.",
    contato_aria: "Meios de contato", curriculo: "Baixar currículo",
    lbl_nome: "Nome", lbl_email: "E-mail", lbl_mensagem: "Mensagem", enviar: "Enviar mensagem",
    rodape: "© 2026 Gabriel Carvalho Soares. Todos os direitos reservados.",
    erro_vazio: "Preencha este campo.", erro_nome: "Digite seu nome.",
    erro_email: "Digite um e-mail válido, como nome@exemplo.com.",
    erro_mensagem: "Escreva uma mensagem com pelo menos 10 caracteres.",
    st_corrigir: "Corrija os campos destacados.",
    st_nao_config: "O envio ainda não foi configurado. Use os ícones de contato acima.",
    st_enviando: "Enviando...", st_ok: "Mensagem enviada! Obrigado pelo contato.",
    st_falha: "Não foi possível enviar agora. Tente novamente ou use os ícones de contato acima."
  },
  en: {
    titulo_pagina: "Gabriel Carvalho Soares | Portfolio",
    descricao_pagina: "Professional portfolio of Gabriel Carvalho Soares",
    pular: "Skip to content",
    nav_aria: "Main", nav_sobre: "About", nav_projetos: "Projects", nav_experiencias: "Experience",
    nav_habilidades: "Skills", nav_contato: "Contact",
    menu: "Menu", tema_claro: "Light mode", tema_escuro: "Dark mode",
    switch_texto: "EN", switch_aria: "Language: English. Click to switch to Portuguese.",
    cargo: "Computer Science Student | Developer", tag_embarcado: "Embedded Software",
    ver_projetos: "View projects", falar: "Contact me", redes_aria: "Professional networks", alt_foto: "Profile photo",
    h_sobre: "About me",
    h_projetos: "Projects", filtros_aria: "Filter projects by technology",
    tempo_aria: "Project timeline, from oldest to most recent", carrossel_aria: "Projects",
    anterior: "Previous", proximo: "Next", todos: "All", codigo: "Code", demo: "Demo",
    projeto_alt: "Project {titulo} in action",
    h_experiencias: "Experience",
    h_habilidades: "Skills", h_linguagens: "Languages", h_ferramentas: "Tools", h_conceitos: "Concepts",
    hab_git: "Git and GitHub", hab_algoritmos: "Algorithms", hab_estruturas: "Data Structures", hab_soft: "Communication Soft Skills",
    h_contato: "Contact", contato_intro: "Reach me through any of the channels below or send a message using the form.",
    contato_aria: "Contact methods", curriculo: "Download résumé",
    lbl_nome: "Name", lbl_email: "Email", lbl_mensagem: "Message", enviar: "Send message",
    rodape: "© 2026 Gabriel Carvalho Soares. All rights reserved.",
    erro_vazio: "Please fill in this field.", erro_nome: "Please enter your name.",
    erro_email: "Please enter a valid email, like name@example.com.",
    erro_mensagem: "Please write a message with at least 10 characters.",
    st_corrigir: "Please fix the highlighted fields.",
    st_nao_config: "Sending is not set up yet. Please use the contact icons above.",
    st_enviando: "Sending...", st_ok: "Message sent! Thank you for reaching out.",
    st_falha: "Could not send right now. Please try again or use the contact icons above."
  }
};

// Idioma atual (lembra a última escolha do visitante; o padrão é português)
let idioma = "pt";
try { if (localStorage.getItem("idioma") === "en") idioma = "en"; } catch (e) {}

const t = chave => TEXTOS[idioma][chave];
// Aceita um texto simples ou um objeto { pt: "...", en: "..." }
const tr = valor => (valor && typeof valor === "object" && !Array.isArray(valor)) ? valor[idioma] : valor;

// ===== 1. PROJETOS ==============================================
const projetos = [
  {
    titulo: "PlantGuard",
    descricao: {
      pt: [
        "Cultivar plantas manualmente, sem um conhecimento prévio ou o monitoramento adequado, pode resultar em um solo inadequado para a planta ou até a morte dela.",
        "Desenvolvi, em conjunto com outros 4 estudantes, um sistema Arduino que monitora a temperatura e umidade do solo de acordo com a planta cultivada, retorna um feedback do estado atual e rega automaticamente de acordo com a necessidade do solo."
      ],
      en: [
        "Growing plants manually, without prior knowledge or proper monitoring, can result in unsuitable soil for the plant or even its death.",
        "Together with 4 other students, I developed an Arduino system that monitors soil temperature and moisture according to the cultivated plant, gives feedback on its current state and automatically waters it according to the soil's needs."
      ]
    },
    data: "2026-07",   // TROQUE pela data real: "AAAA-MM" (ex.: "2026-06") ou só "AAAA"
    imagem: "img/plantguard.gif",   // coloque aqui o print ou GIF do projeto funcionando
    imagemAlt: {
      pt: "PlantGuard em funcionamento: sistema Arduino com sensores simulados monitorando e regando (ativando o relé da irrigação) o solo monitorado",
      en: "PlantGuard in action: Arduino system with simulated sensors monitoring the soil and watering it (activating the irrigation relay)"
    },
    tags: ["C++", "Arduino"],
    codigo: "https://github.com/gabrielcarvalhosoa/PlantGuard", // link do repositório
    demo: ""                                             // deixe vazio se não houver demo
  },
];

// Ordem cronológica: do mais antigo ao mais recente (usa o campo "data" de cada projeto)
projetos.sort((a, b) => a.data.localeCompare(b.data));

const lista = document.getElementById("lista-projetos");
const filtros = document.getElementById("filtros");
const linhaTempo = document.getElementById("linha-tempo");
let filtroAtual = "";   // tecnologia selecionada no filtro ("" = todos)

// ===== CARROSSEL =====
let indice = 0;   // posição do card em destaque
const posicao = document.getElementById("posicao");
const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");

// Calcula a distância de cada card até o central e entrega ao CSS
function atualizarCarrossel() {
  const cards = [...lista.children];
  cards.forEach((card, i) => {
    const offset = i - indice;        // negativo = esquerda, positivo = direita
    const dist = Math.abs(offset);
    card.style.setProperty("--offset", offset);
    card.style.setProperty("--abs", dist);
    card.classList.toggle("ativo", dist === 0);
    card.classList.toggle("oculto", dist > 2);
    // links só ficam acessíveis pelo teclado no card central
    card.querySelectorAll("a").forEach(a => (a.tabIndex = dist === 0 ? 0 : -1));
  });
  [...linhaTempo.querySelectorAll("button")].forEach((b, i) => {
    b.classList.toggle("ativo", i === indice);
    b.setAttribute("aria-current", i === indice ? "true" : "false");
  });
  posicao.textContent = cards.length ? `${indice + 1} / ${cards.length}` : "";
  botaoAnterior.disabled = indice === 0;
  botaoProximo.disabled = indice >= cards.length - 1;
}

function irPara(novo) {
  indice = Math.max(0, Math.min(novo, lista.children.length - 1));  // para nas pontas
  atualizarCarrossel();
}

botaoAnterior.addEventListener("click", () => irPara(indice - 1));
botaoProximo.addEventListener("click", () => irPara(indice + 1));

// Setas do teclado (quando o foco estiver dentro do carrossel)
document.querySelector(".carrossel").addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") irPara(indice - 1);
  if (e.key === "ArrowRight") irPara(indice + 1);
});

// Deslizar o dedo no celular
let inicioX = null;
lista.addEventListener("touchstart", e => { inicioX = e.touches[0].clientX; }, { passive: true });
lista.addEventListener("touchend", e => {
  if (inicioX === null) return;
  const dx = e.changedTouches[0].clientX - inicioX;
  if (Math.abs(dx) > 50) irPara(indice + (dx < 0 ? 1 : -1));
  inicioX = null;
});

// Cria um elemento com texto
function criar(tag, texto, classe) {
  const el = document.createElement(tag);
  if (texto) el.textContent = texto;
  if (classe) el.className = classe;
  return el;
}

function criarLink(texto, url) {
  const a = criar("a", texto);
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener";
  return a;
}

// Desenha os cards; "filtro" mostra só os projetos com aquela tag; "manter" preserva o card atual
function desenharProjetos(filtro, manter) {
  filtroAtual = filtro;
  lista.innerHTML = "";
  const visiveis = projetos.filter(p => !filtro || p.tags.includes(filtro));
  visiveis.forEach((p, i) => {
    const card = criar("article", "", "projeto");
    const titulo = tr(p.titulo);

    if (p.imagem) {
      const img = document.createElement("img");
      img.src = p.imagem;
      img.alt = tr(p.imagemAlt) || t("projeto_alt").replace("{titulo}", titulo);
      img.className = "projeto-midia";
      img.addEventListener("error", () => img.remove());   // sem arquivo, o card fica sem imagem
      card.append(img);
    }
    card.append(criar("p", formatarData(p.data), "data"), criar("h3", titulo));

    const descricao = tr(p.descricao);
    const paragrafos = Array.isArray(descricao) ? descricao : [descricao];
    paragrafos.forEach(texto => card.append(criar("p", texto)));

    const tags = criar("ul", "", "tags");
    p.tags.forEach(tag => tags.append(criar("li", tag)));
    card.append(tags);

    const links = criar("div", "", "links");
    if (p.codigo) links.append(criarLink(t("codigo"), p.codigo));
    if (p.demo) links.append(criarLink(t("demo"), p.demo));
    card.append(links);

    // Clicar em um card lateral o traz para o centro (sem abrir os links dele)
    card.addEventListener("click", e => {
      if (!card.classList.contains("ativo")) { e.preventDefault(); irPara(i); }
    }, true);

    lista.append(card);
  });

  desenharLinhaDoTempo(visiveis);
  indice = manter ? Math.min(indice, Math.max(visiveis.length - 1, 0)) : 0;
  atualizarCarrossel();
}

// Botões de filtro: "Todos" + uma tag para cada tecnologia usada
function desenharFiltros() {
  filtros.innerHTML = "";
  const todas = [...new Set(projetos.flatMap(p => p.tags))];
  [{ rotulo: t("todos"), valor: "" }, ...todas.map(x => ({ rotulo: x, valor: x }))].forEach(({ rotulo, valor }) => {
    const b = criar("button", rotulo, "botao-pequeno");
    b.type = "button";
    b.setAttribute("aria-pressed", valor === filtroAtual);
    b.addEventListener("click", () => {
      filtros.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b));
      desenharProjetos(valor);
    });
    filtros.append(b);
  });
}

// ===== 2. MODO CLARO / ESCURO ==========================================
const botaoTema = document.getElementById("botao-tema");

function atualizarTextoTema() {
  const escuro = document.documentElement.dataset.theme === "dark";
  const texto = t(escuro ? "tema_claro" : "tema_escuro");
  botaoTema.querySelector(".rotulo").textContent = texto;
  botaoTema.setAttribute("aria-label", texto);
}

botaoTema.addEventListener("click", () => {
  const novo = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = novo;
  try { localStorage.setItem("tema", novo); } catch (e) {}
  atualizarTextoTema();
});

// ===== 3. MENU NO CELULAR ============================================
const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", aberto);
});
// Fecha o menu ao clicar em um link
menu.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
  })
);

// ===== 4. LINHA DO TEMPO DOS PROJETOS ===================================
function formatarData(data) {
  const [ano, mes] = data.split("-");
  if (!mes) return ano;
  return new Date(ano, mes - 1).toLocaleDateString(idioma === "pt" ? "pt-BR" : "en-US", { month: "short", year: "numeric" });
}

function desenharLinhaDoTempo(visiveis) {
  linhaTempo.innerHTML = "";
  visiveis.forEach((p, i) => {
    const item = criar("li");
    const b = criar("button");
    b.type = "button";
    b.append(criar("span", formatarData(p.data), "tl-data"), criar("span", tr(p.titulo)));
    b.addEventListener("click", () => irPara(i));   // clicar na data leva o carrossel ao projeto
    item.append(b);
    linhaTempo.append(item);
  });
}

// ===== 5. EXPERIÊNCIAS (da mais recente para a mais antiga) =============
const experiencias = [
  {
    instituicao: "PUC Minas",
    cargo: { pt: "Graduação em Ciência da Computação", en: "Bachelor's degree in Computer Science" },
    periodo: { pt: "Fev/2026 – 2029", en: "Feb/2026 – 2029" },
    descricao: {
      pt: "Participação em diversas e variadas oficinas como Algoritmos e Estruturas de Dados I e II, Soft Skills em Comunicação, Banco de Dados, etc.",
      en: "Participation in several workshops and courses such as Algorithms and Data Structures I and II, Communication Soft Skills, Databases, etc."
    }
  }
];

const listaExperiencias = document.getElementById("lista-experiencias");

function desenharExperiencias() {
  listaExperiencias.innerHTML = "";
  experiencias.forEach(exp => {
    const item = criar("li", "", "experiencia");
    item.append(
      criar("p", tr(exp.periodo), "data"),
      criar("h3", tr(exp.cargo)),
      criar("p", tr(exp.instituicao), "instituicao"),
      criar("p", tr(exp.descricao))
    );
    listaExperiencias.append(item);
  });
}

// ===== 6. FORMULÁRIO DE CONTATO (envio por e-mail com EmailJS) ==========================
const EMAILJS = {
  publicKey: "uc5ufTyLCyQnUphZd",
  serviceId: "service_3grg3pf",
  templateId: "template_swjvqsq"
};

const formulario = document.getElementById("formulario");
const statusForm = document.getElementById("status-formulario");
const camposForm = [...formulario.querySelectorAll("input, textarea")];
let ultimoStatus = null;   // guarda o aviso atual para traduzi-lo se o idioma mudar

function mensagemDeErro(campo) {
  const v = campo.value.trim();
  if (!v) return t("erro_vazio");
  if (campo.name === "name" && v.length < 2) return t("erro_nome");
  if (campo.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return t("erro_email");
  if (campo.name === "message" && v.length < 10) return t("erro_mensagem");
  return "";
}

function validar(campo) {
  const erro = mensagemDeErro(campo);
  document.getElementById("erro-" + campo.id).textContent = erro;
  campo.setAttribute("aria-invalid", erro ? "true" : "false");
  return !erro;
}

function avisar(chave, tipo) {
  ultimoStatus = chave ? { chave, tipo } : null;
  statusForm.textContent = chave ? t(chave) : "";
  statusForm.className = "status " + (tipo || "");
}

camposForm.forEach(c => c.addEventListener("blur", () => validar(c)));   // valida ao sair do campo

formulario.addEventListener("submit", async e => {
  e.preventDefault();
  const resultados = camposForm.map(validar);          // valida todos para mostrar todos os erros
  if (resultados.includes(false)) {
    avisar("st_corrigir", "falha");
    camposForm[resultados.indexOf(false)].focus();
    return;
  }
  if (typeof emailjs === "undefined" || EMAILJS.publicKey.startsWith("SUA_")) {
    avisar("st_nao_config", "falha");
    return;
  }
  const botao = formulario.querySelector("button[type=submit]");
  botao.disabled = true;
  avisar("st_enviando");
  try {
    await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, formulario, { publicKey: EMAILJS.publicKey });
    avisar("st_ok", "ok");
    formulario.reset();
  } catch (erro) {
    avisar("st_falha", "falha");
  } finally {
    botao.disabled = false;
  }
});

// ===== 7. IDIOMA DO SITE (switch PT/BR | EN) ======================================
const botaoIdioma = document.getElementById("botao-idioma");

function aplicarIdioma(novo) {
  idioma = novo;
  const D = TEXTOS[novo];
  try { localStorage.setItem("idioma", novo); } catch (e) {}

  document.documentElement.lang = novo === "pt" ? "pt-BR" : "en";
  document.title = D.titulo_pagina;
  document.querySelector('meta[name="description"]').content = D.descricao_pagina;

  // Textos fixos do HTML
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = D[el.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => el.setAttribute("aria-label", D[el.dataset.i18nAria]));
  document.querySelectorAll("[data-i18n-alt]").forEach(el => { el.alt = D[el.dataset.i18nAlt]; });
  document.querySelector(".carrossel").setAttribute("aria-roledescription", novo === "pt" ? "carrossel" : "carousel");

  // Seção "Sobre mim": um bloco de texto por idioma
  document.querySelectorAll("[data-idioma-conteudo]").forEach(div => { div.hidden = div.dataset.idiomaConteudo !== novo; });

  // Switch do cabeçalho
  botaoIdioma.setAttribute("aria-checked", novo === "en");
  botaoIdioma.dataset.idioma = novo;

  // Conteúdo gerado por JavaScript
  atualizarTextoTema();
  desenharFiltros();
  desenharProjetos(filtroAtual, true);
  desenharExperiencias();

  // Mensagens do formulário que já estão na tela
  camposForm.filter(c => c.getAttribute("aria-invalid") === "true").forEach(validar);
  if (ultimoStatus) avisar(ultimoStatus.chave, ultimoStatus.tipo);
}

botaoIdioma.addEventListener("click", () => aplicarIdioma(idioma === "pt" ? "en" : "pt"));
aplicarIdioma(idioma);
