# 🎬 LohanFlix

Interface front-end de uma plataforma de streaming fictícia, inspirada no visual do Netflix. O projeto é totalmente estático, construído com HTML, CSS e JavaScript puro — sem frameworks ou dependências externas.

---

## 📁 Estrutura de Arquivos

```
lohanflix/
├── index.html    # Estrutura e marcação das páginas
├── style.css     # Estilos, temas e animações
└── script.js     # Lógica de navegação entre páginas
```

---

## 🖥️ Páginas

### Seleção de Perfis
Tela inicial onde o usuário escolhe qual perfil deseja usar. Exibe até 4 perfis cadastrados (Lohan, Ana, Carlos, Kids) e um botão para adicionar novos perfis (funcionalidade pendente).

### Página de Browse
Tela principal do streaming, exibida após a seleção do perfil. Contém:
- **Header fixo** com logo, navegação (Início, Séries, Filmes, Novidades, Minha Lista) e o mini-avatar do perfil ativo
- **Hero banner** com destaque para um título em evidência, tags de gênero, descrição e botões de ação ("Assistir" e "Mais Informações")
- **Seções de conteúdo** em carrossel horizontal:
  - Em Alta
  - Continuar Assistindo
  - Filmes Populares
- **Footer** com copyright

---

## ⚙️ Funcionalidades (script.js)

| Função | Descrição |
|---|---|
| `selectProfile(name, id)` | Aplica a animação de transição e navega da tela de perfis para o browse, carregando o avatar e nome do perfil selecionado no header |
| `goBack()` | Retorna da página de browse para a seleção de perfis, também com animação de transição |

A navegação entre páginas usa um **overlay de transição** com fade, controlado pela classe CSS `active` no elemento `#transitionOverlay`.

---

## 🎨 Design e Estilo (style.css)

- **Tema escuro** com fundo `#0a0a0a` e vermelho `#E50914` como cor de destaque
- **Tipografia:** `Bebas Neue` (títulos/logo) e `Outfit` (corpo), ambas do Google Fonts
- **Efeitos visuais:**
  - Ruído granulado sutil no fundo via SVG inline (`body::before`)
  - Glow ambiente vermelho no topo da página (`body::after`)
  - Hover nos cards com overlay e ícone de play
  - Texto decorativo gigante (`LOHAN`) no hero como elemento de fundo
- **Variáveis CSS** centralizadas em `:root` para fácil customização de cores
- **Responsividade:** layout adaptado para telas menores com media queries

---

## 🚀 Como Usar

Por ser um projeto puramente estático, basta abrir o `index.html` no navegador:

```bash
# Opção 1: abrir diretamente
open index.html

# Opção 2: rodar um servidor local (recomendado)
npx serve .
# ou
python -m http.server 8080
```

---

## 🔧 Possíveis Melhorias Futuras

- Implementar a funcionalidade de **adicionar e gerenciar perfis**
- Tornar os cards clicáveis com página de detalhes do título
- Adicionar **barra de busca** funcional
- Integrar com uma API real de filmes/séries (ex: TMDB)
- Persistir o perfil selecionado com `localStorage`
- Adicionar responsividade completa para mobile

---

## 📄 Licença

Projeto de uso pessoal/educacional. Todos os nomes de séries e filmes exibidos pertencem aos seus respectivos detentores de direitos.
