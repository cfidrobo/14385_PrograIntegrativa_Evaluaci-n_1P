customElements.define('contenedor-component', class extends HTMLElement {
  connectedCallback() {
    const template = document.createElement('template');
    template.innerHTML = `
      <div>
        <slot name="header"></slot>
        <slot name="content"></slot>
      </div>
    `;
    const content = document.importNode(template.content, true);
    this.attachShadow({ mode: 'open' }).appendChild(content);
  }
});
