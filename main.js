/* ============================================================================
 *  EDIT YOUR INFO HERE  —  你只需要修改下面这个 SITE 对象即可更新整个主页
 * ============================================================================
 *  - 加新论文：在 publications 数组最前面加一项即可
 *  - 加链接：把 links 里对应字段填上 URL（留空 "" 则不显示该按钮）
 *  - 换头像：把 avatar 设为图片路径，例如 "assets/photo.jpg"（留空则用首字母图标）
 * ========================================================================== */
const SITE = {
  name: "Gengsheng Li",
  nameCn: "",                       // 可填中文名，如 "李庚晟"；留空则不显示
  role: "Ph.D. Student",            // TODO: 按实际身份修改（如 Master's Student / Researcher）
  affiliationHtml:
    'Institute of Automation, Chinese Academy of Sciences',
  tagline:
    "Post-training of large language and vision-language models, with a focus on reinforcement learning and on-policy distillation.",
  avatar: "",                       // 例如 "assets/photo.jpg"；留空显示 "GL" 首字母头像

  // 自己名字的所有写法，用于在作者列表里自动加粗
  meNames: ["Gengsheng Li", "G Li"],

  links: {
    email: "ligengsheng2024@ia.ac.cn",
    scholar: "https://scholar.google.com/citations?user=uvBL9UMAAAAJ",
    github: "https://github.com/Gengsheng-Li",  // 从 R-Diverse 仓库推断，请确认是否为你本人账号
    arxiv: "",                        // 例如 "https://arxiv.org/a/li_g_1"
    orcid: "",                        // 例如 "https://orcid.org/0000-0000-0000-0000"
    twitter: "",                      // 例如 "https://x.com/yourname"
    linkedin: "",
    cv: "",                           // 例如 "assets/CV.pdf"
  },

  // Google Scholar 指标（会变化，记得偶尔更新；不想显示就把 showScholarStats 设为 false）
  showScholarStats: true,
  scholarStats: { citations: 34, hIndex: 2, i10Index: 1 },

  bio:
    "I am a Ph.D. student at the Institute of Automation, Chinese Academy of Sciences (CASIA), " +
    "and the University of Chinese Academy of Sciences (UCAS). My research centers on post-training " +
    "for large language models (LLMs) and vision-language models (VLMs), with a focus on reinforcement " +
    "learning, on-policy (self-) distillation, and self-evolution. " +
    "I am currently an intern at Tencent Hunyuan, working on on-policy (self-) distillation for LLM post-training.",

  interests: [
    "Large Language Models",
    "Vision-Language Models",
    "Post-training",
    "Reinforcement Learning",
    "On-Policy Distillation",
    "Self-Evolution",
  ],

  news: [
    { date: "2026.06.14", html: 'Released <em>On-Policy Distillation with Curriculum Turn-level Guidance for Multi-turn Agents</em> on <a href="https://arxiv.org/abs/2606.15912">arXiv</a>.' },
    { date: "2026.05.21", html: 'Released <em>Visual-Advantage On-Policy Distillation for Vision-Language Models</em> on <a href="https://arxiv.org/abs/2605.21924">arXiv</a>.' },
    { date: "2026.05.08", html: 'Released <em>Rubric-based On-policy Distillation</em> on <a href="https://arxiv.org/abs/2605.07396">arXiv</a>.' },
    { date: "2026.05", html: '<em>R-Diverse: Mitigating Diversity Illusion in Self-Play LLM Training</em> is accepted at <strong>ICML 2026</strong>.' },
    { date: "2026.04", html: '<em>Unifying Group-Relative and Self-Distillation Policy Optimization via Sample Routing</em> (SRPO) reached <strong>#5</strong> on the global alphaXiv trending list.' },
    { date: "2026.04.02", html: 'Released <em>Unifying Group-Relative and Self-Distillation Policy Optimization via Sample Routing</em> on <a href="https://arxiv.org/abs/2604.02288">arXiv</a>.' },
    { date: "2026.03", html: 'Started my internship at <strong>Tencent Hunyuan</strong> (Tencent Project Up / 青云计划).' },
    { date: "2026.02.13", html: 'Released <em>R-Diverse: Mitigating Diversity Illusion in Self-Play LLM Training</em> on <a href="https://arxiv.org/abs/2602.13103">arXiv</a>.' },
  ],

  // 论文：authors 里出现的 meNames 会自动加粗。citations 填 0 则不显示徽章。
  // note 可选（如共同一作说明）；links 里的第一个会成为标题的链接。
  // status 可选：会显示为彩色徽章。常见写法：
  //   "Preprint" / "Under review" / "Submitted to NeurIPS 2026" / "Accepted at ICLR 2027" / "Published"
  // 含 accept/publish 显示绿色，含 review/submit 显示橙色，其余灰色。
  publications: [
    {
      title: "On-Policy Distillation with Curriculum Turn-level Guidance for Multi-turn Agents",
      authors: "Gengsheng Li*, Mao Zheng*, Mingyang Song*, Ruiqi Liu, Tianyu Yang, Jie Sun, Qiyong Zhong, Haiyun Guo, Junfeng Fang, Dan Zhang, Jinqiao Wang",
      note: "* Equal contribution",
      venue: "arXiv preprint",
      status: "Under review at EMNLP 2026",
      year: 2026,
      citations: 0,
      links: { Paper: "https://arxiv.org/abs/2606.15912", Code: "https://github.com/Zzzz-166/Guided-OPD" },
    },
    {
      title: "Visual-Advantage On-Policy Distillation for Vision-Language Models",
      authors: "Ruiqi Liu*, Xiaolei Lv*, Gengsheng Li, Ximo Zhu, Zhiheng Wang, Zhengbo Zhang, Junkai Chen, Zhiheng Li, Bo Li, Jun Gao, Shu Wu",
      note: "* Equal contribution",
      venue: "arXiv preprint",
      status: "Under review at NeurIPS 2026",
      year: 2026,
      citations: 0,
      links: { Paper: "https://arxiv.org/abs/2605.21924" },
    },
    {
      title: "Rubric-based On-policy Distillation",
      authors: "Junfeng Fang*, Zhepei Hong*, Mao Zheng, Mingyang Song, Gengsheng Li, Houcheng Jiang, Dan Zhang, Haiyun Guo, Xiang Wang, Tat-Seng Chua",
      note: "* Equal contribution",
      venue: "arXiv preprint",
      status: "Under review at NeurIPS 2026",
      year: 2026,
      citations: 2,
      links: { Paper: "https://arxiv.org/abs/2605.07396", Code: "https://github.com/Peregrine123/ROPD_official" },
    },
    {
      title: "Unifying Group-Relative and Self-Distillation Policy Optimization via Sample Routing",
      authors: "Gengsheng Li*, Tianyu Yang*, Junfeng Fang, Mingyang Song, Mao Zheng, Haiyun Guo, Dan Zhang, Jinqiao Wang, Tat-Seng Chua",
      note: "* Equal contribution",
      venue: "arXiv preprint",
      status: "Under review at COLM 2026",
      year: 2026,
      citations: 26,
      links: { Paper: "https://arxiv.org/abs/2604.02288" },
    },
    {
      title: "R-Diverse: Mitigating Diversity Illusion in Self-Play LLM Training",
      authors: "Gengsheng Li*, Jinghan He*, Shijie Wang, Dan Zhang, Ruiqi Liu, Renrui Zhang, Zijun Yao, Junfeng Fang, Haiyun Guo, Jinqiao Wang",
      note: "* Equal contribution",
      venue: "ICML",
      status: "Accepted",
      year: 2026,
      citations: 4,
      links: { Paper: "https://arxiv.org/abs/2602.13103", Code: "https://github.com/Gengsheng-Li/R-Diverse" },
    },
    {
      title: "Optimizing Federated Learning on Non-IID Data with Clustering and Model Sharing",
      authors: "Qufei Zhang*, Yunshuang Wang*, Gengsheng Li, Barry Cardiff, Pasika Ranaweera",
      note: "* Equal contribution",
      venue: "EuCNC & 6G Summit",
      status: "Published",
      year: 2025,
      citations: 2,
      links: {},
    },
  ],

  education: [
    {
      school: "Institute of Automation, Chinese Academy of Sciences (CASIA)",
      degree: "Ph.D. in Pattern Recognition and Intelligent Systems",
      period: "Aug 2024 – Present",
      detail: [
        "Admitted via recommendation · GPA 3.85",
        "Advised by Prof. Jinqiao Wang, Prof. Haiyun Guo, and Prof. Shiming Xiang",
      ],
    },
    {
      school: "University College Dublin (UCD) & Beijing University of Technology (BJUT)",
      degree: "B.Eng. in Internet of Things Engineering",
      period: "Sep 2020 – Jul 2024",
      detail: "GPA 3.91 · First Class Honours (UCD)",
    },
    {
      school: "North Carolina State University (NCSU)",
      degree: "Summer Research Intern, GEARS Program",
      period: "Jun 2022 – Aug 2022",
      detail: "Advised by Prof. Huaiyu Dai",
    },
  ],

  experience: [
    {
      org: "Tencent · Hunyuan, Large Language Model Department",
      role: "Post-training Algorithm Intern (Tencent Project Up / 青云计划)",
      period: "Mar 2026 – Present",
      detail: "On-policy RL and distillation for LLM post-training (SRPO, Guided-OPD).",
    },
    {
      org: "ModelBest (面壁智能), Applied Algorithms Department",
      role: "MLLM Algorithm Intern",
      period: "May 2025 – Jul 2025",
      detail: "Adaptive GRPO for cross-distribution generalization of VLMs in in-cabin passenger recognition.",
    },
  ],

  honors: [
    { year: "2026", text: "Merit Student, CASIA" },
    { year: "2025", text: "Merit Student, UCAS" },
    { year: "2024", text: "Beijing Municipality Outstanding Graduate" },
    { year: "2024", text: "First Class Honours Degree, University College Dublin" },
    { year: "2024", text: "Honors Bachelor's Degree, Beijing University of Technology" },
    { year: "2024", text: "Outstanding Final Year Project, UCD" },
  ],

  lastUpdated: "June 2026",
};

/* ============================================================================
 *  Rendering logic — 一般不需要改下面的内容
 * ========================================================================== */
const ICONS = {
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
  scholar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>',
  arxiv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M16 13H8M16 17H8M10 9H8"/></svg>',
  orcid: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0ZM7.37 4.38a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9Zm-.72 3.04h1.45v10.04H6.65V7.42Zm3.56 0h3.9c3.71 0 5.34 2.65 5.34 5.02 0 2.58-2.02 5.02-5.32 5.02h-3.92V7.42Zm1.45 1.3v7.44h2.3c2.36 0 3.59-1.44 3.59-3.72 0-2.02-1.09-3.72-3.72-3.72h-2.17Z"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  cv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M16 13H8M16 17H8M10 9H8"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
};

const LINK_META = {
  email: { label: "Email", icon: "email", href: (v) => "mailto:" + v },
  scholar: { label: "Google Scholar", icon: "scholar" },
  github: { label: "GitHub", icon: "github" },
  arxiv: { label: "arXiv", icon: "arxiv" },
  orcid: { label: "ORCID", icon: "orcid" },
  twitter: { label: "X", icon: "twitter" },
  linkedin: { label: "LinkedIn", icon: "linkedin" },
  cv: { label: "CV", icon: "cv" },
};

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}
function escapeReg(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

function statusClass(status) {
  const t = status.toLowerCase();
  if (t.includes("accept") || t.includes("publish") || t.includes("camera")) return "s-accepted";
  if (t.includes("review") || t.includes("submit")) return "s-review";
  return "s-preprint";
}

function initials(name) {
  return name.trim().split(/\s+/).filter(Boolean).slice(0, 2)
    .map((w) => w[0].toUpperCase()).join("");
}

function highlightAuthors(authors, meNames) {
  let html = escapeHtml(authors);
  meNames.forEach((n) => {
    const re = new RegExp("\\b" + escapeReg(n) + "\\b", "g");
    html = html.replace(re, '<span class="me">' + escapeHtml(n) + "</span>");
  });
  return html;
}

function renderSocial(links) {
  return Object.keys(LINK_META)
    .filter((k) => links[k])
    .map((k) => {
      const meta = LINK_META[k];
      const href = meta.href ? meta.href(links[k]) : links[k];
      const ext = k !== "email";
      return `<a class="social" href="${escapeHtml(href)}"${ext ? ' target="_blank" rel="noopener"' : ""}>${ICONS[meta.icon]}<span>${meta.label}</span></a>`;
    })
    .join("");
}

function renderHero() {
  const s = SITE;
  const avatar = s.avatar
    ? `<img class="avatar" src="${escapeHtml(s.avatar)}" alt="${escapeHtml(s.name)}" />`
    : `<div class="avatar avatar--mono">${initials(s.name)}</div>`;

  const stats = s.showScholarStats
    ? `<div class="stats">
        <div class="stat"><div class="stat__num">${s.scholarStats.citations}</div><div class="stat__label">Citations</div></div>
        <div class="stat"><div class="stat__num">${s.scholarStats.hIndex}</div><div class="stat__label">h-index</div></div>
        <div class="stat"><div class="stat__num">${s.scholarStats.i10Index}</div><div class="stat__label">i10-index</div></div>
      </div>`
    : "";

  const affil = [s.role, s.affiliationHtml].filter(Boolean).join(" · ");

  document.getElementById("hero").innerHTML = `
    ${avatar}
    <div class="hero__info">
      <h1 class="hero__name">${escapeHtml(s.name)}${s.nameCn ? `<span class="hero__name-cn">${escapeHtml(s.nameCn)}</span>` : ""}</h1>
      <p class="hero__tagline">${escapeHtml(s.tagline)}</p>
      <p class="hero__affil">${affil}</p>
      <div class="hero__links">${renderSocial(s.links)}</div>
      ${stats}
    </div>`;
}

function renderAbout() {
  const s = SITE;
  document.getElementById("about").innerHTML = `
    <h2 class="section__title reveal">About</h2>
    <p class="about__bio reveal">${escapeHtml(s.bio)}</p>
    <div class="interests reveal">
      ${s.interests.map((i) => `<span class="tag">${escapeHtml(i)}</span>`).join("")}
    </div>`;
}

function renderNews() {
  const s = SITE;
  if (!s.news || !s.news.length) { document.getElementById("news").remove(); return; }
  document.getElementById("news").innerHTML = `
    <h2 class="section__title reveal">News</h2>
    <ul class="news reveal">
      ${s.news.map((n) => `<li class="news__item"><span class="news__date">${escapeHtml(n.date)}</span><span class="news__text">${n.html}</span></li>`).join("")}
    </ul>`;
}

function renderPublications() {
  const s = SITE;
  const byYear = {};
  s.publications.forEach((p) => { (byYear[p.year] = byYear[p.year] || []).push(p); });
  const years = Object.keys(byYear).sort((a, b) => b - a);

  const groups = years.map((y) => {
    const items = byYear[y].map((p) => {
      const linkKeys = Object.keys(p.links || {});
      const titleHref = linkKeys.length ? p.links[linkKeys[0]] : null;
      const title = titleHref
        ? `<a href="${escapeHtml(titleHref)}" target="_blank" rel="noopener">${escapeHtml(p.title)}</a>`
        : escapeHtml(p.title);
      const cite = p.citations
        ? `<span class="pub__cite">${ICONS.link}${p.citations} citation${p.citations > 1 ? "s" : ""}</span>`
        : "";
      const links = linkKeys
        .map((k) => `<a class="pub__link" href="${escapeHtml(p.links[k])}" target="_blank" rel="noopener">${escapeHtml(k)} ↗</a>`)
        .join("");
      const note = p.note ? `<p class="pub__note">${escapeHtml(p.note)}</p>` : "";
      const status = p.status ? `<span class="pub__status ${statusClass(p.status)}">${escapeHtml(p.status)}</span>` : "";
      return `<article class="pub reveal">
          <h3 class="pub__title">${title}</h3>
          <p class="pub__authors">${highlightAuthors(p.authors, s.meNames)}</p>
          ${note}
          <p class="pub__meta"><span class="pub__venue">${escapeHtml(p.venue)}</span> · <span>${p.year}</span> ${status} ${cite}</p>
          <div class="pub__links">${links}</div>
        </article>`;
    }).join("");
    return `<div class="pub-group"><div class="pub-group__year reveal">${y}</div>${items}</div>`;
  }).join("");

  document.getElementById("publications").innerHTML = `
    <h2 class="section__title reveal">Publications</h2>
    ${groups}`;
}

function renderEntries(targetId, title, items, titleKey, subKey) {
  const el = document.getElementById(targetId);
  if (!el) return;
  if (!items || !items.length) { el.remove(); return; }
  el.innerHTML = `
    <h2 class="section__title reveal">${escapeHtml(title)}</h2>
    ${items.map((it) => `<div class="entry reveal">
        <div class="entry__title">${escapeHtml(it[titleKey])}</div>
        <div class="entry__period">${escapeHtml(it.period)}</div>
        <div class="entry__sub">${escapeHtml(it[subKey])}</div>
        ${(it.detail ? (Array.isArray(it.detail) ? it.detail : [it.detail]) : []).map((d) => `<div class="entry__detail">${escapeHtml(d)}</div>`).join("")}
      </div>`).join("")}`;
}

function renderEducation() { renderEntries("education", "Education", SITE.education, "school", "degree"); }

function renderExperience() { renderEntries("experience", "Experience", SITE.experience, "org", "role"); }

function renderHonors() {
  const s = SITE;
  const el = document.getElementById("honors");
  if (!el) return;
  if (!s.honors || !s.honors.length) { el.remove(); return; }
  el.innerHTML = `
    <h2 class="section__title reveal">Honors &amp; Awards</h2>
    <ul class="honors reveal">
      ${s.honors.map((h) => `<li class="honors__item"><span class="honors__year">${escapeHtml(h.year)}</span><span class="honors__text">${escapeHtml(h.text)}</span></li>`).join("")}
    </ul>`;
}

function renderFooter() {
  const s = SITE;
  const scholar = s.links.scholar
    ? ` · <a href="${escapeHtml(s.links.scholar)}" target="_blank" rel="noopener">Google Scholar</a>`
    : "";
  document.getElementById("footer").innerHTML =
    `© ${new Date().getFullYear()} ${escapeHtml(s.name)} · Last updated ${escapeHtml(s.lastUpdated)}${scholar}`;
}

function initThemeToggle() {
  const btn = document.getElementById("themeToggle");
  const apply = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    btn.innerHTML = theme === "dark" ? ICONS.sun : ICONS.moon;
  };
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  apply(saved || (prefersDark ? "dark" : "light"));
  btn.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    apply(next);
  });
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  els.forEach((el) => obs.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("js");
  document.getElementById("navBrand").textContent = SITE.name;
  document.title = SITE.name;
  renderHero();
  renderAbout();
  renderNews();
  renderEducation();
  renderExperience();
  renderPublications();
  renderHonors();
  renderFooter();
  initThemeToggle();
  initReveal();
});
