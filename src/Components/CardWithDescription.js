class Cardwithdescription extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("article");
        componentRoot.setAttribute("class", "cardWithDescription");

        const cardWithDescriptionLink = document.createElement("a");
        cardWithDescriptionLink.setAttribute("href", "#");

        const imageContainer = document.createElement("div");
        imageContainer.setAttribute("class", "imageContainer");

        const newsDescription = document.createElement("div");

        const newsTitle = document.createElement("h2");
        newsTitle.textContent = this.getAttribute("title");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        newsDescription.appendChild(newsTitle);
        newsDescription.appendChild(newsContent)
        cardWithDescriptionLink.appendChild(imageContainer);
        cardWithDescriptionLink.appendChild(newsDescription)


        componentRoot.append(cardWithDescriptionLink);

        return componentRoot;


    };

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        a {
            display:flex;
            gap: 30px;
            text-decoration: none;
            color: #000;
        }
        .imageContainer {
            width: 245px;
            height: 200px;
            background-image: url("${this.getAttribute("image")}");
            background-position: center;
            background-size: cover;
            border-radius: 10px;
        }
        h2 {
            font-size: 1.25rem;
            font-weight: 600;
            max-width: 450px;
        }
        p {
            font-size: 1rem;
            max-width: 450px;
        }
        `
        return style;
    }
}

customElements.define("card-with-description", Cardwithdescription);