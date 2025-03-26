fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".receitas");
    const template = document.getElementById("card-template");

    data.forEach((item) => {
      const cardClone = template.content.cloneNode(true);

      const img = cardClone.querySelector("img");
      const receita = cardClone.querySelector("p");

      img.src = item.img;
      receita.textContent = item.nomeReceita;

      container.appendChild(cardClone);
    });
  })
  .catch((error) => console.error(error));
