class Cardwithtitle extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("article");
        componentRoot.setAttribute("class", "cardWithTitle");

        const cardLink = document.createElement('a');
        cardLink.href = "#";

        const imageContainer = document.createElement('div');
        imageContainer.setAttribute("class", "imageContainer");

        const cardTitle = document.createElement('h2');
        cardTitle.textContent = this.getAttribute('title');

        cardLink.append(imageContainer);
        cardLink.append(cardTitle);

        componentRoot.append(cardLink);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        article {
        }
        .imageContainer {
            width: 215px;
            height: 163px;
            background-image: url("${this.getAttribute("image")}");
            background-position: center;
            background-size: cover;
            border-radius: 10px;
        }
        a {
            text-decoration: none;
            color: #000;
        }
        h2 {
            font-size: 1rem;
            font-weight: 600;
            max-width: 211px;
        }`

        return style;
    }
}

customElements.define("card-with-title", Cardwithtitle);