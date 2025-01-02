export class GetAPI {
  url = "https://catfact.ninja/";

  async findAPI(url) {
    const response = await fetch(url);
    let data = await response.json();
    return data;
    // console.log(data);
  }
}
export class CatFact {
  async printFact(data) {
    const button = document.getElementById("fetchButton") as HTMLButtonElement;
    const fact = document.getElementById("factDisplay") as HTMLBodyElement;
    button?.addEventListener("click", function () {
      button.onclick = () => {
        fact;
        console.log(fact);
      };

      // console.log(fact);
    });
  }
}
