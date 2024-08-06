if (header.clientWidth < 900) {
  const FAQsectionBottomLink = document.querySelector(
    "#FAQ-section-heading a "
  );
  FAQsectionBottomLink.remove();

  const FAQsection = document.querySelector("#FAQ-section");
  FAQsection.appendChild(FAQsectionBottomLink);
}
