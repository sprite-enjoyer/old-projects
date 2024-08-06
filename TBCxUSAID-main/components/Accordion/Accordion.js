class Accordion extends HTMLElement {
  constructor() {
    super();

    this.props = Object.fromEntries([...this.attributes].map(this.processProp));
    this.attachShadow({ mode: "open" });
    this.state = {
      open: false,
    };
    this.render();
  }

  processProp(prop) {
    let wordsArr = prop.localName.split("-");
    const firstWord = wordsArr.shift();

    wordsArr = wordsArr.map((word) => {
      const charactersArr = word.split("");
      const firstCharacter = charactersArr.shift();
      return firstCharacter.toUpperCase() + charactersArr.join("");
    });

    const restOfTheWords = wordsArr.join("");
    return [firstWord + restOfTheWords, prop.value];
  }

  initListeners() {
    const topPart = this.shadowRoot.querySelector(".accordion-top-part");
    topPart.addEventListener("click", () => this.toggleAccordion());
  }

  toggleAccordion() {
    this.state.open = !this.state.open;
    const content = this.shadowRoot.querySelector(".accordion-content");
    const arrow = this.shadowRoot.querySelector(".arrow-down");
    if (content) {
      content.classList.toggle("content-shown");
      arrow.classList.toggle("arrow-up");
    }
  }

  render() {
    const { state, props } = this;
    this.shadowRoot.innerHTML = `
    <div class="accordion-container">
      <link rel="stylesheet" href="./components/Accordion/accordion.css" />
      <div class="accordion-top-part">
        <h3 class="accordion-title">${props.accordionTitle}</h3>
          <svg class="arrow-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path  d="M8.14644661,10.1464466 C8.34170876,9.95118446 8.65829124,9.95118446 8.85355339,10.1464466 L12.4989857,13.7981758 L16.1502401,10.1464466 C16.3455022,9.95118446 16.6620847,9.95118446 16.8573469,10.1464466 C17.052609,10.3417088 17.052609,10.6582912 16.8573469,10.8535534 L12.4989857,15.2123894 L8.14644661,10.8535534 C7.95118446,10.6582912 7.95118446,10.3417088 8.14644661,10.1464466 Z">
            </path>
          </svg>
      </div>
      <div class="accordion-content">
          <slot class="accordion-slot" name="${props.slotName}"></slot>
      </div>
    </div>
  `;

    this.initListeners();
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("custom-accordion", Accordion);
