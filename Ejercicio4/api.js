class user_list_component extends HTMLElement {
    connectedCallback() {
      this.getDataFromAPI();
    }
  
    async getDataFromAPI() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        
        const users = await response.json();
        this.displayUserList(users);
      } catch (error) {
        console.error(error);
        this.showError();
      }
    }
  
    displayUserList(users) {
      // Lógica para mostrar la lista de usuarios de manera atractiva (puede ser una lista, tarjetas, etc.)
      const userListContainer = document.createElement('div');
      
      users.forEach((user, index) => {
        const userCard = document.createElement('div');
        // Asignar un color significativo basado en el índice del usuario
        const color = this.getUserColor(index);
        userCard.style.backgroundColor = color;
  
        userCard.innerHTML = `
          <h2 style="color: ${color};">${user.name}</h2>
          <p>Email: ${user.email}</p>
          <p>Username: ${user.username}</p>
          <hr>
        `;
        userListContainer.appendChild(userCard);
      });
  
      this.appendChild(userListContainer);
    }
  
    getUserColor(index) {
      // Función para asignar colores significativos basados en el índice del usuario
      const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightsalmon', 'lightsteelblue'];
      return colors[index % colors.length];
    }
  
    showError() {
      // Lógica para manejar errores y mostrar mensajes claros al usuario
      const errorContainer = document.createElement('div');
      errorContainer.innerHTML = '<p>Hubo un error en la solicitud de datos.</p>';
      this.appendChild(errorContainer);
    }
  }
  
  customElements.define('user-list-component', user_list_component);
  