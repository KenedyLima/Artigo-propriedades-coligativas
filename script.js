const experimentoVideos = document.querySelector(".experimentoVideos");
const buttons = document.querySelectorAll(".button");
const videoCounter = 0;

buttons.forEach((element) => {
  element.addEventListener("click", function (e) {
    const button = e.target.closest(".button");
    if (button) {
      const videoNumber = Number(button.id);
      console.log(button.id);
    }
  });
});

window.addEventListener("load", function () {
  this.alert(
    "Turma 122, Edificações. Grupo composto por: Beatriz Pimentel, Amanda Batista, Layla Araújo, Jemima Rayssa  e Jeferson Kenedy."
  );
});
