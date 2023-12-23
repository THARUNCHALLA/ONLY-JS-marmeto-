const mensButton = document.getElementById("mensButton")
const womensButton = document.getElementById("womensButton");
const kidsButton = document.getElementById("kidsButton")
let count = 0
let category;
const first = async () => {
  const response = await fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json");
  const data = await response.json();
  return data;
}
const displayProducts = (data) => {
  const kid = document.getElementById("kid");
  kid.innerHTML = "";
  let heading = document.createElement("h1");
  const jk = data.map((each) => {
    const container = document.createElement("div")
    container.classList.add("main")
    kid.appendChild(container);
    var Heading = document.createElement("img");
    Heading.src = each.image;
    Heading.classList.add("image")
    container.appendChild(Heading);
    const inside = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.textContent = each.title
    h1.classList.add("title")
    inside.appendChild(h1)
    inside.classList.add("inside")
    const li = document.createElement("li")
    li.textContent = `. ${each.vendor}`
    li.classList.add("li")
    inside.appendChild(li)
    container.appendChild(inside)
    const INSIDE = document.createElement("div");
    INSIDE.classList.add("inside")
    let money = document.createElement("h1");
    money.textContent = `Rs ${each.price}`
    money.classList.add("money")
    INSIDE.appendChild(money)
    let offer = document.createElement("h1");
    offer.textContent = each.compare_at_price
    offer.classList.add("offer")
    INSIDE.appendChild(offer)
    let Percentage = document.createElement("h1");
    Percentage.textContent = "50% off"
    Percentage.classList.add("percentage")
    INSIDE.appendChild(Percentage)
    container.appendChild(INSIDE)
    const Last = document.createElement("div")
    container.appendChild(Last)
    const BTN = document.createElement("button")
    BTN.classList.add("BUTTON")
    BTN.textContent = "Add to cart"
    Last.appendChild(BTN)
    data = []
  });

}

first().then(data => {
  const Mens = data.categories[0];
  const Women = data.categories[1];
  const Kids = data.categories[2];
  console.log(data)

  displayProducts(Mens.category_products);
  mensButton.style.background = "orange"
  mensButton.addEventListener("click", () => {
    currentCategory = 'Mens';
    mensButton.style.background = "orange"
    displayProducts(Mens.category_products);
  });

  womensButton.addEventListener("click", () => {
    currentCategory = 'Women';
    mensButton.style.background = ""
    womensButton.style.background = "orange"
    displayProducts(Women.category_products);
  });

  kidsButton.addEventListener("click", () => {
    currentCategory = 'Kids';
    mensButton.style.background = ""
    womensButton.style.background = ""
    kidsButton.style.background = "orange"
    displayProducts(Kids.category_products);
  });
}).catch(error => {
  console.error("Error:", error);
});