import { GetAPI } from "./fetcher";
import { CatFact } from "./fetcher";

//Get the info from API
const getAPI = new GetAPI();
await getAPI.findAPI("https://catfact.ninja/");

//Print the fact in the correct place
const catfact = new CatFact();
await catfact.printFact(getAPI.data);

// let image = document.getElementById("image1") as HTMLImageElement;
// const button = document.getElementById("fetchButton") as HTMLButtonElement;
// button.addEventListener("click", function () {
//   button.onclick = () => {
//     image.src =
//       "https://cdn.shopify.com/s/files/1/0106/1539/0266/files/Collection_Banner_b9a9c9fb-6540-4032-bfaa-5bb6ef163392.jpg?v=1642797548";
//   };
// });
