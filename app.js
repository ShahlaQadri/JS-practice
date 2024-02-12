const Button = document.querySelector("button");
const Div = document.querySelector(".div");
const Box= document.querySelector(".box");

const product=[
  {productName: 'Jacket', price: 2999, size: 'L'},
  {productName:'Jeans',price: 1500, size:'M' },
  {productName:'Shirt', price:1999, size:'XL'}
];

Button.addEventListener("click", () => {
  let output='';
  product.forEach(item => {
  output+=`<p>productName: ${item.productName},  price: ${item.price},
  size: ${item.size}</p>`;
});
//Div.appendChild(output);
console.log(output);
});








