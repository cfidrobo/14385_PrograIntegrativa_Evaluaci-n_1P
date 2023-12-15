class contador_component extends HTMLElement {
  constructor() {
    super();
    this._counter = 0;
  }

  connectedCallback() {
    this.render();
    this.attachListeners();
  }

  render() {
    this.innerHTML = `
      <p style="font-size: 50px;">Contador: ${this._counter}</p>
      <div style="display: flex; justify-content: space-around;">
        <button id="increment" style="font-size: 35px;">+</button>
        <button id="decrement" style="font-size: 35px;">-</button>
      </div>
    `;
  }

  attachListeners() {
    this.querySelector('#increment').addEventListener('click', () => {
      this._counter++;
      this.render();
    });

    this.querySelector('#decrement').addEventListener('click', () => {
      this._counter--;
      this.render();
    });
  }
}

customElements.define('counter-component', contador_component);
