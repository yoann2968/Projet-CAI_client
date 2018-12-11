import { html, LitElement } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';


class MyProfDetail extends LitElement {

  render() {
    return html`
      <style>
      img {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;
        width: 50px;
        float: left;
      }
      img:hover {
        box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
      }
      </style>
      ${SharedStyles}

      <div><a href="javascript:window.location.reload()"><img src="/src/img/back.png"></a>
      
      <h2>${this.professeur}, ${this.details.age} ans</h2></div>
      <section></section>
      <section>
      <p><b>Matière enseignée : </b>${this.details.matiere}</p>
      </section>
      <section>
      <p>Propose <b>${this.details.places}</b> places dans son cours, à <b>${this.details.prix}</b>€/h</p>
      </section>
      <section>
      <p><b>Lieu : </b><br><i>${this.details.adresse},<br>${this.details.ville}</i></p>
      </section>
      <section>
      <p><b>Avis : </b><br><i>${this.showAvis()}</i></p>
      </section>
      <section>
      <p><b>Contact : </b><br><i>${this.showContact()}</i></p>
      </section>
      `;
  }

  constructor(){

    super();
    this.professeur = "test";
    this.details = new Array();
    this.details.avis = new Array();
    this.details.contact = new Array();
  }

  static get properties() {
    return {
      professeur : {
        type: String,
        observer: '_onChange',
      },
      details : {
        type: Object,
      },
    };
  }

  async _onChange() {
    if(this.professeur=="test"){return;}
    var fileName = String(this.professeur.toLowerCase()).replace(/ /g,"_");
    const url = `../data/Professeur/${fileName}.json`;
    try {
      const response = await fetch(url);
      this.details = await response.json();
    }
    catch (err) {
    }
  }

  connectedCallback(){
    super.connectedCallback();
    
    this._onChange();
  }

  showAvis(){
    if(this.professeur == "test"){return;}
    return this.details.avis.map((item) => html`"${item}"<br>`);
  }

  showContact(){
    if(this.professeur == "test"){return;}
    return html`${this.details.contact[0]}<br>
                <a href="mailto:${this.details.contact[1]}">${this.details.contact[1]}</a>`;
  }

}

// Associate the new class with an element name
window.customElements.define('my-prof-detail', MyProfDetail);