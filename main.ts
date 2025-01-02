export class CatFact {
  url = "https://catfact.ninja/";

  async findAPI(url) {
    const response = await fetch(url);
    let data = await response.json();
    // return data;
    // console.log(data);
      printFact(data) {
    const button = document.getElementById("fetchButton") as HTMLButtonElement;
    const fact = document.getElementById("factDisplay") as HTMLBodyElement;
    button?.addEventListener("click", function () {
      button.onclick = () => {
        data.fact;
      };

      // console.log(fact);
    })};
  }
let catFact = new CatFact()
  await catFact.findAPI("https://catfact.ninja/")
}


// let image = document.getElementById("image1") as HTMLImageElement;
// const button = document.getElementById("fetchButton") as HTMLButtonElement;
// button.addEventListener("click", function () {
//   button.onclick = () => {
//     image.src =
//       "https://cdn.shopify.com/s/files/1/0106/1539/0266/files/Collection_Banner_b9a9c9fb-6540-4032-bfaa-5bb6ef163392.jpg?v=1642797548";
//   };
// });
