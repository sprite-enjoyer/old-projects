class PartnersCarousel extends HTMLElement {
  carouselPage = 0;
  imgLinks = [];
  intervalID = -1;

  constructor() {
    super();
  }

  get partnerImageLinks() {
    return this.getAttribute("partner-image-links");
  }

  initIntersectionObserver() {
    function handleIntersection(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.startCarousel();
        } else {
          this.stopCarousel();
        }
      });
    }

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      handleIntersection.bind(this),
      options
    );
    observer.observe(this);
  }

  get intervalRunning() {
    return this.intervalID !== -1;
  }

  intervalFunction = () => {
    this.carouselPage = (this.carouselPage + 1) % 3;
    this.updatePartners();
  };

  startCarousel() {
    if (this.intervalRunning) return;
    this.intervalID = setInterval(this.intervalFunction, 5000);
  }

  stopCarousel() {
    clearInterval(this.intervalID);
    this.intervalID = -1;
  }

  updatePartners() {
    const partnerImagesContainer =
      document.getElementsByClassName("partners-carousel")[0];
    const oldImages = [].slice.call(
      document.getElementsByClassName("carousel-image")
    );
    if (oldImages)
      oldImages.forEach((element) => {
        element.classList.add("carousel-image-fade-out");
      });

    setTimeout(() => {
      partnerImagesContainer.innerHTML =
        this.carouselPage != 2
          ? `
    <img class="carousel-image incoming-carousel-image" src="${
      this.imgLinks[this.carouselPage * 3]
    }" />
    <img class="carousel-image incoming-carousel-image" src="${
      this.imgLinks[this.carouselPage * 3 + 1]
    }" />
    <img class="carousel-image incoming-carousel-image" src="${
      this.imgLinks[this.carouselPage * 3 + 2]
    }" />`
          : `
    <div></div>
    <img class="carousel-image incoming-carousel-image" src="${
      this.imgLinks[this.carouselPage * 3]
    }" />
    <div></div>`;

      const newImages = [].slice.call(
        document.getElementsByClassName("incoming-carousel-image")
      );

      setTimeout(() => {
        newImages.forEach((element) =>
          element.classList.remove("incoming-carousel-image")
        );
      }, 500);
    }, 500);
  }

  initListeners() {
    const leftButton = document.getElementsByClassName(
      "carousel-left-arrow"
    )[0];
    const rightButton = document.getElementsByClassName(
      "carousel-right-arrow"
    )[0];

    const [firstButton, secondButton, thirdButton] =
      document.getElementsByClassName("carousel-button");

    const carouselClickHandlerTemplate = (callback) => {
      this.stopCarousel();
      callback();
      this.updatePartners();
      this.startCarousel();
    };

    leftButton.onclick = () => {
      carouselClickHandlerTemplate(() => {
        const nextCarouselPage = (this.carouselPage + 1) % 3;
        this.carouselPage = nextCarouselPage < 0 ? 2 : nextCarouselPage;
      });
    };

    rightButton.onclick = () => {
      carouselClickHandlerTemplate(
        () => (this.carouselPage = (this.carouselPage + 1) % 3)
      );
    };

    const carouselButtonGroupButtonClickHandler = (page) => {
      carouselClickHandlerTemplate(() => (this.carouselPage = page));
    };

    firstButton.onclick = () => carouselButtonGroupButtonClickHandler(0);
    secondButton.onclick = () => carouselButtonGroupButtonClickHandler(1);
    thirdButton.onclick = () => carouselButtonGroupButtonClickHandler(2);
  }

  connectedCallback() {
    this.render();
    this.startCarousel();
    this.initIntersectionObserver();
    this.initListeners();
  }

  render() {
    this.imgLinks = JSON.parse(this.partnerImageLinks);
    this.innerHTML = `
    <button title="arrow carousel-left-arrow" class="arrow carousel-left-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 41">
        <path style="fill:var(--small-ui-background-color)" d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path>
      </svg>
    </button>
    <div class="carousel-middle">
      <h3 class="partners-section-title">პროექტის პარტნიორები</h3>
      <div class="carousel-images-and-buttons-container">
        <div class="partners-carousel">
            <img  class="carousel-image" src="${
              this.imgLinks[this.carouselPage * 3]
            }" />
            <img class="carousel-image" src="${
              this.imgLinks[this.carouselPage * 3 + 1]
            }" />
            <img class="carousel-image" src="${
              this.imgLinks[this.carouselPage * 3 + 2]
            }" />
        </div>
        <div class="carousel-button-group">
          <button title="carousel-button1" class="carousel-button"></button>
          <button title="carousel-button2" class="carousel-button"></button>
          <button title="carousel-button3" class="carousel-button"></button>
        </div>
      </div>
    </div>
    <button title="arrow carousel-right-arrow" class="arrow carousel-right-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 41">
        <path style="fill:var(--small-ui-background-color)" d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path>
      </svg>
    </button>
    `;
  }
}

customElements.define("partners-carousel", PartnersCarousel);
