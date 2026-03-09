# Configurações do Portfolio

Este arquivo documenta as configurações e best practices do portfolio.

## 📋 File Structure

```
src/
├── pages/
│   ├── index.astro          # Homepage com About + Skills + Projects
│   ├── projects.astro       # Página de galeria de projetos
│   ├── sites.astro          # Sites estáticos desenvolvidos
│   ├── why-hire-me.astro    # Proposição de valor
│   ├── philosophy.astro     # Filosofia de desenvolvimento
│   └── projects/            # Case studies individual
│       ├── novuscfc-detailed.astro
│       ├── chatbot-detail.astro
│       └── local-lore-ai-detail.astro
├── components/
│   ├── ProjectsPage.tsx     # Gallery interativa (React)
│   └── SiteCard.tsx         # Card component
├── js/
│   └── index.js             # Scripts de interação
└── global.css               # Estilos globais com Tailwind
```

## 🎨 Design System

### Cores
- **Background**: `neutral-800` (primary), `neutral-900` (dark)
- **Accent**: `emerald-400` (success), `blue-400` (info), `red-400` (error)
- **Text**: `white` (primary), `neutral-300` (secondary), `neutral-500` (tertiary)

### Tipografia
- **Headings**: Bold, tracking-widest uppercase para sections
- **Body**: Font-light, opacity-70 para contraste suave
- **Code/Tech**: `bg-neutral-700`, `text-[10px]`, uppercase

### Componentes
- **Cards**: `border border-neutral-700`, `rounded-2xl`, `bg-neutral-900/70`
- **Buttons**: Minimal, border apenas para secondary
- **Inputs**: Não aplicável (portfolio estático)

## 🏗️ Arquitetura

### Frontend
- **Framework**: Astro 5.x com React integration
- **Styling**: TailwindCSS v4.2 via Vite plugin
- **Type Safety**: TypeScript full strict mode
- **Components**: Astro + React (hybrid rendering)

### Performance
- Astro renderiza estático (.astro) = zero JS unnecessário
- React components carregam com `client:load` apenas quando needed
- Lazy loading de imagens
- CSS purged pela build

### SEO & Meta
- Open Graph tags presente
- Meta descriptions
- Semantic HTML (h1, article, nav, etc)

## 🚀 Deployment

```bash
# Build
npm run build        # Gera ./dist/

# Preview
npm run preview      # Testa build localmente

# Deploy
# Fazer upload ./dist/ para GitHub Pages ou Vercel
```

### GitHub Pages
```
Package.json: "homepage": "https://kaykyone.github.io"
Fazer push para main branch
GitHub Actions auto-deploy
```

## 📈 Monitoramento

Considerar adicionar:
- Google Analytics (acompanhar visitas, bounce rate, páginas mais lidas)
- Lighthouse CI (garantir performance)
- Error tracking com Sentry (se tiver JS complexo)

## ✨ Future Enhancements

- [ ] Blog section com artigos técnicos
- [ ] Dark mode toggle (já tem dark mode, mas permitir light)
- [ ] Filtros interativos em /projects com busca
- [ ] Newsletter signup
- [ ] Analytics dashboard privado
- [ ] Guestbook/comentários

## 📝 Manutenção

### Content Updates
1. Adicionar novo projeto? → Criar página em `src/pages/projects/`
2. Modificar skills? → Editar seção skills em `src/pages/index.astro`
3. Nova experiência? → Adicionar em timeline de experiência

### Performance Checks
- Monthly lighthouse audits
- Monitor Core Web Vitals
- Check para unused CSS/JS
