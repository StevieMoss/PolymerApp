import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `gummi-app`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class GummiApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'gummi-app',
      },
    };
  }
}

window.customElements.define('gummi-app', GummiApp);
