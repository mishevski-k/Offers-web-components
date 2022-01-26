import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('oap-offers')
class OAPOffers extends LitElement
{
    static styles = css`

    /* @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); */

    *
    {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

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
        font-family: 'Montserrat', sans-serif;
    }

    .offer-card
    {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        cursor: pointer;
        background-color: rgb(233, 231, 231);
        
    }
    
    .offer-card:hover
    {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transition: 0.40s ease-in;
        transform: scale(1.006);
    }

    .offer-card .offer-card-banner
    {
        position: relative;
    }

    .offer-card .offer-card-banner img
    {
        width: 100%;
        height: 100%;
        border-radius: 5px 5px 0 0;
    }

    .offer-card .offer-card-banner .offer-card-reward
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

    .offer-card .offer-card-banner .offer-card-reward h1
    {
        z-index: 99;
        font-size: 1.1rem;
        font-weight: 900;
    }

    .offer-card .offer-card-banner .offer-card-reward::before
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

    .offer-card .offer-card-details
    {
        padding: 2rem clamp(0px, 1rem, 2rem);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 30vh;
    }

    .offer-card .offer-card-details > *
    {
        margin: 0.3rem 0;
    }

    .offer-card .offer-card-details .offer-card-title
    {
        font-size: 1.3rem;
        color: #6a5acd;
    }

    .offer-card .offer-card-details .offer-card-description
    {
        font-weight: 500;
        font-size: 1rem;
        color: grey;
    }

    .offer-card .offer-card-details .offer-card-link
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

    .offer-card .offer-card-details .offer-card-link:hover
    {
        background-color: #cd5700;
        transition: 0.40s ease-in;
    }

    @media only screen and (max-width: 768px)
    {
        .offer-card .offer-card-details
        {
            height: 25vh;
        }
    }

    @media only screen and (max-width: 500px)
    {
        .offer-card .offer-card-banner .offer-card-reward
        {
            height: 4rem;
            width: 4rem;
        }

        .offer-card .offer-card-banner .offer-card-reward h1 
        {
            font-size: 0.8rem
        }

        .offer-card .offer-card-banner .offer-card-reward::before
        {
            font-size: 1.9rem;
        }
    }
    `;

    constructor()
    {
        super();
        this.fetchData();
    }

    @property()
    private data;
    @property({type: Array})
    private items: any[] = [];

    fetchData()
    {
        fetch('https://ekstrapoint.com/api/v2/achievement?limit=50&ids=2266,2268,2267,2059,2060,2061&language=en&country=INT')
            .then(res => res.json())
            .then(data => {
                this.data = data;
                this.items = this.data.items;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render()
    {   
        return html`
            ${this.items.map(element => html
                `
                <div class="offer-card"> 
                    <div class="offer-card-banner">
                        <img src="${element.stateContent[0].image.originalImageUrl}">
                        <div class="offer-card-reward">
                            <h1>${element.rewards[0].value}</h1>
                        </div>
                    </div>
                    <div class="offer-card-details">
                        <h1 class="offer-card-title">${element.stateContent[0].title}</h1>
                        <h2 class="offer-card-description">${element.stateContent[0].description}</h2>
                    </div>
                </div>
                `)}
        `;
        
    }

}