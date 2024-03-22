import { API_URL, URL_TESTIMONIALS } from "../../../constants/api";

import { getDataApi } from "../../../utils/getDataApi";

import { ROOT_INDEX5 } from "../../../constants/root";

import "./Five.css";

class Five {
  async render() {
    const dataTestimonials = await getDataApi.getData(
      API_URL + URL_TESTIMONIALS
    );
    // id, text, imgPerson
    let htmlTestimonials = "";

    dataTestimonials.forEach(({ id, text, imgPerson }) => {
      htmlTestimonials += `
                <li class="testimonials__gallery_icon">
                    <div class="testimonials__gallery_text">
                        <div class="testimonials__text">${text}</div>
                        <div class="testimonials__img">
                            <img src="${imgPerson}" alt="${id}">
                        </div>
                    </div>
                </li>
            `;
    });

    const htmlContentScFive = `
            <div class="scfive__item">
                <div class="scfive__testimonials_text">
                    <h2>TESTIMONIALS</h2>
                    <div class="text_head_left">Customers's quotes</div>
                    <div class="testimonials_text_left">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an.</div>
                </div>
            </div>
            <div class="scfive__item">
                <div class="scfive__testimonials_gallery scfive__item_pagination">
                    <ul class="testimonials__gallery">
                        ${htmlTestimonials}
                        
                    </ul>
                </div>
            </div>
        `;

    const htmlWrapper = `
        <div class="scfive__container">
           ${htmlContentScFive}
        </div>
    `;

    ROOT_INDEX5.innerHTML = htmlWrapper;
  }

  eventListener() {
    const sliderContent = document.querySelector(".scfive__item_pagination");
    const itemsPerPage = 1;
    let currentPage = 0;
    const items = Array.from(sliderContent.getElementsByTagName("li"));

    function showPage(page) {
      const startIndex = page * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      items.forEach((item, index) => {
        item.classList.toggle(
          "closed",
          index < startIndex || index >= endIndex
        );
      });
      updateActiveButtonStates();
      updatePageTransparentStates();
    }

    function createPageButtons() {
      const totalPages = Math.ceil(items.length / itemsPerPage);
      const paginationContainer = document.createElement("div");
      const paginationDiv = document.body.appendChild(paginationContainer);
      paginationContainer.classList.add("testimonials__gallery");
      const paginationCircle = document.createElement("div");
      const paginationDivCircle =
        paginationContainer.appendChild(paginationCircle);
      paginationDivCircle.classList.add("testimonials__gallery_circles");

      for (let i = 0; i < totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.addEventListener("click", () => {
          currentPage = i;
          showPage(currentPage);
          updateActiveButtonStates();
        });
        sliderContent.appendChild(paginationContainer);
        paginationDivCircle.appendChild(pageButton);
        pageButton.classList.add("gallery_circle");
      }
    }

    function updateActiveButtonStates() {
      const pageButtons = document.querySelectorAll(
        ".testimonials__gallery .gallery_circle"
      );
      pageButtons.forEach((button, index) => {
        if (index === currentPage) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
    }

    function updatePageTransparentStates() {
      const pageTransparent = document.querySelectorAll(
        ".testimonials__gallery_icon"
      );
      pageTransparent.forEach((transparent, index) => {
        if (index === currentPage + 1) {
          transparent.classList.remove("closed");
          transparent.classList.add("transparent");
        } else {
          transparent.classList.remove("transparent");
        }
      });
    }

    createPageButtons();
    showPage(currentPage);
  }
}

export default new Five();
