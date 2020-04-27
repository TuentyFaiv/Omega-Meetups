import ListInfoStyle from '../../assets/css/components/listInfo.scss';

const styles = document.createElement('style');
styles.type = 'text/css';
styles.appendChild(document.createTextNode(ListInfoStyle));

const template = document.createElement('template');

template.innerHTML = `
  <div class="layout">
    <div class="cardList communities">
      <p class="cardList--title">Próximos eventos</p>
      <div class="separator"></div>
        <div class="cardList--cardInfo">
          <div class="cardList--cardInfo__bullet">
            <p>°</p>
          </div>
          <div class="cardList--cardInfo__body">
            <p class="title">Nombre del evento</p>
            <p class="text">Nombre de la comunidad</p>
            <p class="text">16:00 hrs.</p>
          </div>
          <div class="cardList--cardInfo__link">
            <a href="#">Ver más</a>
          </div>
        </div>
        <div class="cardList--cardInfo">
          <div class="cardList--cardInfo__bullet">
            <p>°</p>
          </div>
          <div class="cardList--cardInfo__body">
            <p class="title">Nombre del evento</p>
            <p class="text">Nombre de la comunidad</p>
            <p class="text">16:00 hrs.</p>
          </div>
          <div class="cardList--cardInfo__link">
            <a href="#">Ver más</a>
          </div>
        </div><div class="cardList--cardInfo">
        <div class="cardList--cardInfo__bullet">
          <p>°</p>
        </div>
        <div class="cardList--cardInfo__body">
          <p class="title">Nombre del evento</p>
          <p class="text">Nombre de la comunidad</p>
          <p class="text">16:00 hrs.</p>
        </div>
        <div class="cardList--cardInfo__link">
          <a href="#">Ver más</a>
        </div>
      </div>
    </div>
    <div class="cardList upcoming-events">
      <p class="cardList--title">Comunidades</p>
      <div class="separator"></div>
        <div class="cardList--cardInfo">
          <div class="cardList--cardInfo__bullet">
            <p>°</p>
          </div>
          <div class="cardList--cardInfo__body">
            <p class="title">Nombre de la comunidad</p>
            <p class="text">Sinopsis de la comunidad</p>
          </div>
          <div class="cardList--cardInfo__link">
            <a href="#">Ver más</a>
          </div>
        </div>
        <div class="cardList--cardInfo">
          <div class="cardList--cardInfo__bullet">
            <p>°</p>
          </div>
          <div class="cardList--cardInfo__body">
            <p class="title">Nombre de la comunidad</p>
            <p class="text">Sinopsis de la comunidad</p>
          </div>
          <div class="cardList--cardInfo__link">
            <a href="#">Ver más</a>
          </div>
        </div>
        <div class="cardList--cardInfo">
          <div class="cardList--cardInfo__bullet">
            <p>°</p>
          </div>
          <div class="cardList--cardInfo__body">
            <p class="title">Nombre de la comunidad</p>
            <p class="text">Sinopsis de la comunidad</p>
          </div>
          <div class="cardList--cardInfo__link">
            <a href="#">Ver más</a>
          </div>
        </div>
        <div class="cardList--cardInfo">
          <div class="cardList--cardInfo__bullet">
            <p>°</p>
          </div>
          <div class="cardList--cardInfo__body">
            <p class="title">Nombre de la comunidad</p>
            <p class="text">Sinopsis de la comunidad</p>
          </div>
          <div class="cardList--cardInfo__link">
            <a href="#">Ver más</a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

class ListInfo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(styles);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('o-listinfo', ListInfo);
