import HeaderEventStyle from '../../assets/css/components/headerEvent.scss';
// import banner from '../assets/images/banner.png';
import logoMaster from '../../assets/images/logo-master.png';

const styles = document.createElement('style');
styles.type = 'text/css';
styles.appendChild(document.createTextNode(HeaderEventStyle));

const template = document.createElement('template');

template.innerHTML = `
  <div class="hero-event">
    <div class="hero-event--info">
      <div>
        <img class="logoCommunity" src="" alt="Brand Logo">
        <p>Nombre de comunidad</p>
      </div>
      <h1>Coffe & Code</h1>
      <input type="button" value="Asistir" class="primary-button">
    </div>
  </div>
`;

class HeaderEvent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(styles);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('.logoCommunity').src = logoMaster;
  }

}

customElements.define('o-header-event', HeaderEvent);
