
class SiteHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        header {
          background-color: pink;
          color: #333;
          text-align: center;
          padding: 1.5rem;
          
        }
        ::slotted(h1) {
          margin: 0;
          font-size: 2rem;
          color: #080005;
        }
        ::slotted(p) {
          margin: 6px 0 0 0;
          font-size: 1rem;
          color: #555;
        }
      </style>
      <header>
        <slot name="titulo">
          <h1>Interação Web - Trabalhos</h1>
        </slot>
        <slot name="subtitulo"></slot>
      </header>
    `;
  }
}
customElements.define('site-header', SiteHeader);

class SiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="main-nav">
        <ul>
          <li><a href="index.html">Apresentação</a></li>
          <li><a href="editor.html">Trabalho 1</a></li>
          <li><a href="pag2.html">Trabalho 2</a></li>
          <li><a href="#">Trabalho 3</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('site-nav', SiteNav);

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p class="rodape">Aluna: Alexsia Mattos</p>
        <p class="rodape">Matrícula: 2025016176</p>
      </footer>
    `;
  }
}
customElements.define('site-footer', SiteFooter);