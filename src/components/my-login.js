/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyLogin extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <div class="Title1">
        <h2>Rentrez vos informations pour vous connecter</h2>
      </div>
      <form class="Login">
        <h3>Connectez vous à votre compte</h3>
        <textarea class="login1" name="Login1" rows=1 cols=40>Entrez votre login</textarea>
        <textarea class="mdp1" name="Mdp1" rows=1 cols=40>Entrez votre mot de passe</textarea>
      </form><br>
      <button class="buttonLogin">Se connecter</button>
      <form class="Register">
      <div class="Title1">
        <h2>Pas encore inscrit?</h2>
      </div>
        <h3>Inscrivez-vous à l'aide du formulaire ci-dessous: Le login et le mot de passe vous servirons par la suite pour vous connecter</h3>
        <textarea class="login2" name="Login2" rows=1 cols=40>Entrez votre login</textarea>
        <textarea class="mdp2" name="Mdp2" rows=1 cols=40>Entrez votre mot de passe</textarea>
      </form><br>
      <button class="buttonRegister">S'enregistrer</button>

    `;
  }
}

window.customElements.define('my-login', MyLogin);