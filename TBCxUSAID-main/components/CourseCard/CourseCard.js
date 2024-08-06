class CourseCard extends HTMLElement {
  constructor() {
    super();
  }

  get courseTitle() {
    return this.getAttribute("course-title");
  }

  get courseStatus() {
    return this.getAttribute("course-status");
  }

  get courseLink() {
    return this.getAttribute("course-link");
  }

  get imageLink() {
    return this.getAttribute("image-link");
  }

  render() {
    this.innerHTML = `
    <div class="course-card">
    <div class="course-card-image-container">
      <img
        src="${this.imageLink}"
      />
    </div>
    <div class="course-card-info-container">
      <span class="course-card-course-name">${this.courseTitle}</span>
      <span class="course-card-course-status">
        ${this.courseStatus}
      </span>
    </div>
    <div class="course-card-link-container">
      <div class="course-card-link-group">
        <svg
          preserveAspectRatio="xMidYMid meet"
          data-bbox="1.833 2.667 13.334 10.666"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="1.833 2.667 13.334 10.666"
          height="16"
          width="17"
          data-type="color"
          role="presentation"
          aria-hidden="true"
        >
          <defs></defs>
          <g>
            <path
              fill="#00aef3"
              d="m10.3 2.867 4.667 4.666a.645.645 0 0 1 0 .934L10.3 13.133a.644.644 0 0 1-.933 0 .644.644 0 0 1 0-.933L12.9 8.667H2.5c-.4 0-.667-.267-.667-.667s.267-.667.667-.667h10.4L9.367 3.8a.605.605 0 0 1-.2-.467c0-.2.066-.333.2-.466a.644.644 0 0 1 .933 0Z"
              data-color="1"
            ></path>
          </g>
        </svg>
        <a href="${this.courseLink}" class="course-card-course-link">კურსის დეტალები</a>
      </div>
    </div>
  </div>
  `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("course-card", CourseCard);
