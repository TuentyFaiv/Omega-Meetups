import headerStyles from '../../assets/css/components/header.scss';

const styles = document.createElement('style');
styles.type = 'text/css';
styles.appendChild(document.createTextNode(headerStyles));

const template = document.createElement('template');
template.innerHTML = `
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
    this.shadowRoot.appendChild(styles);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  _render() {
    if (this.userActive.mail !== (null || undefined)) {
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
