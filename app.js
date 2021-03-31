const ul_list = document.querySelectorAll(".nav-list ul li a");

ul_list.forEach((item) => {
  item.addEventListener("click", () => {
    ul_list.forEach((element) => {
      if (element.classList.contains("active"))
        element.classList.toggle("active");
    });
    item.classList.toggle("active");
  });
});
