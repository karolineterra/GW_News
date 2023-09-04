class Mainnews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("article");
        componentRoot.setAttribute("class", "mainNews");

        const mainNewsLink = document.createElement("a");
        mainNewsLink.setAttribute("href", "#");

        const mainNewsImageContainer = document.createElement("div");
        mainNewsImageContainer.setAttribute("class", "imageContainer"); 

        const mainNewsTitle = document.createElement('h1');
        mainNewsTitle.textContent = this.getAttribute("title");

        mainNewsLink.append(mainNewsImageContainer);
        mainNewsLink.append(mainNewsTitle);

        componentRoot.append(mainNewsLink)
        return componentRoot;
    };

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        a {
            text-decoration: none;
            color: #000;
        }
        .imageContainer {
            width: 613px;
            height: 385px;
            background-image: url("${this.getAttribute("image")}");
            background-position: center;
            background-size: cover;
            border-radius: 10px;
        }
        h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 1.75rem;
            max-width: 613px;
        }`
        return style;
    }
}

customElements.define("main-news", Mainnews);

