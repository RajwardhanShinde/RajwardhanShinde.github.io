// const navSlide = () => {
//   const ham = document.querySelector(".menu-toggler");
//   ham.addEventListener("click", () => {
//     ham.classList.toggle("openn");
//   });
// };
// navSlide();

$(document).ready(function () {
  $(".menu-toggler").on("click", function () {
    $(this).toggleClass("open");
    $(this).toggleClass("openn");
    $(".top-nav").toggleClass("open");
  });

  $(".top-nav .nav-link").on("click", function () {
    $(".menu-toggler").removeClass("open");
    $(".menu-toggler").removeClass("openn");
    $(".top-nav").removeClass("open");
  });
  $('nav a[href*="#"]').on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100,
      },
      1800
    );
  });
});

AOS.init({
  easing: "ease-in",
  duration: 1000,
  once: true,
});
