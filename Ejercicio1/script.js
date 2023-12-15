class SaludoComponent extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: 'open' });
  
      const container = document.createElement('div');
  
      const exerciseTitle = document.createElement('div');
      exerciseTitle.textContent = 'Ejercicio 1: Creación de Componente Simple';
      exerciseTitle.classList.add('exercise-title');
  
      const paragraph = document.createElement('p');
  
      paragraph.textContent = '¡Hola, Mundo!';
  
      container.appendChild(exerciseTitle);
  
      container.appendChild(paragraph);
  
      shadow.appendChild(container);
    }
  }
  
  customElements.define('saludo-component', SaludoComponent);
  