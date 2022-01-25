import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('oap-offers-wrapper')
class OAPOffersWrapper extends LitElement
{
    static styles = css`
        :host
        {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
            gap: 1.5rem;
            align-items: center;
            width: 100%;
            padding: 0.2rem;
            margin: 0;
            box-sizing: border-box;
        }
    `;

    render()
    {
        return html`
            <slot></slot>
        `;
    }
}