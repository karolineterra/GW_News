class Cardright extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("article");
        componentRoot.setAttribute("class", "cardRight");

        const linkCard = document.createElement('a');
        linkCard.setAttribute('href', '#');
        const cardImage = document.createElement("div");
        cardImage.setAttribute("class", "cardImage");

        const cardTitle = document.createElement("h2");
        cardTitle.textContent = this.getAttribute("title");

        linkCard.append(cardImage);
        linkCard.append(cardTitle);
        componentRoot.append(linkCard);
        return componentRoot;
    };

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        .cardRight a {
            color: #000;
            text-decoration:none;
            display: flex;
            gap: 15px;
        }
        .cardImage {
            width: 200px;
            height: 120px;
            background-image: url("${this.getAttribute("image")}");
            background-position: center;
            background-size: cover;
            border-radius: 10px;
        }
        h2 {
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: 1rem;
            max-width: 276px;
        }`
        return style;
    }
}

customElements.define("card-right", Cardright);