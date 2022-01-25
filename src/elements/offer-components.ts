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

@customElement("oap-offer-card")
class OAPOfferCard extends LitElement
{
    static styles = css`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

        *
        {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
    `;

    @property()
    offerImage = "https://intro-web-dev.media-ed-online.com/topic-12/img/hw-icon-placeholdergen.png";
    @property()
    offerRewardValue = "0";
    @property()
    offerTitle = "No Title Found";
    @property()
    offerDescription = "No Description is present";
    @property()
    offerButtonText = "";
    @property()
    OfferButtonURL = "";

    ifOfferHasButton()
    {
        if(this.offerButtonText != "" && this.OfferButtonURL != "")
        {
            return html`<a class="oap-offer-link" href="${this.OfferButtonURL}">${this.offerButtonText}</a>`;
        }
        else
        {
            return html``;
        }
    }

    render()
    {
        return html`
            <div class="oap-offer-banner">
                <img src="${this.offerImage}">
                <div class="oap-offer-reward">
                    <h1>${this.offerRewardValue}</h1>
                </div>
            </div>
            <div class="oap-offer-details">
                <h1 class="oap-offer-title">${this.offerTitle}</h1>
                <h2 class="oap-offer-description">${this.offerDescription}</h2>
                ${this.ifOfferHasButton()}
            </div>
        `;
    }

}