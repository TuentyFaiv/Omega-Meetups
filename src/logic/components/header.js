const template = document.createElement('template');
template.innerHTML = `
  <style>
    .header,
    .header-logo,
    .header-buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header {
      width: calc(100% - 20px);
      height: 50px;
      background-color: gray;
      padding: 0 10px;
    }

    .header-logo img {
      width: 200px;
      height: 40px;
      object-fit: cover;
      margin: 5px 20px 5px 0;
    }

    .header-logo input {
      width: 35vw;
      height: 35px;
      border: none;
      border-radius: 8px;
      padding: 0 10px;
      outline: 0;
    }
    
    .header-buttons button {
      width: 120px;
      height: 35px;
      margin: 0 10px;
      background-color: black;
      color: white;
      border: none;
      border-radius: 5px;
      outline: 0;
    }

    .header-buttons button:hover,
    .header-user:hover {
      cursor: pointer;
    }

    .header-buttons button:active {
      transform: scale(.95);
    }

    .header-user {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 40px;
      margin: 0 0 0 10px;
    }
  </style>
  <header class="header">
    <div class="header-logo">
      <img class="logo" src="" alt="Brand Logo" />
      <input type="text" placeholder="buscar"/>
    </div>
    <div class="header-buttons">
      <button id="create-event">Crear evento</button>
      <button id="login">Iniciar sesión</button>
    </div>
  </header>
`;

class HeaderApp extends HTMLElement {

  set imageLogo(image) {
    this.brandLogo = image;
    this.shadowRoot.querySelector('.logo').src = this.brandLogo;
  }

  set user(user) {
    this.userActive = user;
    this._render();
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  _render() {
    if (this.userActive.mail != (null || undefined)) {
      this.shadowRoot.querySelector('.header-buttons').removeChild(this.shadowRoot.querySelector('button'));
      this.shadowRoot.querySelector('.header-buttons').innerHTML = `
        <button id="create-event">Crear evento</button>
        <img class="header-user" src="${this.userActive.photo}" alt="${this.userActive.name}"/>
      `;
    } else {
      return;
    }
  }

  toLogin() {

  }

  createNewEvent() {

  }

  openUserModal() {

  }
}

customElements.define('header-app', HeaderApp);