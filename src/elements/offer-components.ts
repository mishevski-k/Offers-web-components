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

        :host
        {
            width: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            border-radius: 5px;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            cursor: pointer;
            background-color: rgb(233, 231, 231);
            font-family: 'Montserrat', sans-serif;
        }
        
        :host(:hover)
        {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            transition: 0.40s ease-in;
            transform: scale(1.006);
        }

        :host .oap-offer-banner
        {
            position: relative;
        }

        :host .oap-offer-banner img
        {
            width: 100%;
            height: 100%;
            border-radius: 5px 5px 0 0;
        }

        :host .oap-offer-banner .oap-offer-reward
        {
            background-color: #FF9F90;
            width:  5rem;
            height: 5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            border: 10px solid #cd5700;
            box-shadow: 4px 3px 5px -3px rgba(0,0,0,0.51) inset;
            position: absolute;
            font-weight: 700;
            color: rgb(250, 196, 115);
            bottom: 10%;
            left: 50%;
            transform: translate(-50%, 50%);    
        }

        :host .oap-offer-banner .oap-offer-reward h1
        {
            z-index: 99;
            font-size: 1.1rem;
            font-weight: 900;
        }

        :host .oap-offer-banner .oap-offer-reward::before
        {
            content: "EP";
            width: 100%;
            height: 100%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 0;
            left: 0;
            color: #cd5700;
            font-size: 2.3rem;
            z-index: 1;
            background-color: rgba(0,0,0, 0.4);
            border-radius: 50%;
        }

        :host .oap-offer-details
        {
            padding: 2rem clamp(0px, 1rem, 2rem);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 30vh;
        }

        :host .oap-offer-details > *
        {
            margin: 0.3rem 0;
        }

        :host .oap-offer-details .oap-offer-title
        {
            font-size: 1.3rem;
            color: #6a5acd;
        }

        :host .oap-offer-details .oap-offer-description
        {
            font-weight: 500;
            font-size: 1rem;
            color: grey;
        }

        :host .oap-offer-details .oap-offer-link
        {
            background-color: #FF9F00;
            text-decoration: none;
            color: #FFF;
            border-radius: 25px;
            padding: 0.5rem;
            font-weight: 700;
            font-size: 1.1rem;
            cursor: pointer;
        }

        :host .oap-offer-details .oap-offer-link:hover
        {
            background-color: #cd5700;
            transition: 0.40s ease-in;
        }

        @media only screen and (max-width: 768px)
        {
            :host .oap-offer-details
            {
                height: 25vh;
            }
        }

        @media only screen and (max-width: 500px)
        {
            :host .oap-offer-banner .oap-offer-reward
            {
                height: 4rem;
                width: 4rem;
            }

            :host .oap-offer-banner .oap-offer-reward h1 
            {
                font-size: 0.8rem
            }

            :host .oap-offer-banner .oap-offer-reward::before
            {
                font-size: 1.9rem;
            }
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