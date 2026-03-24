function getData() {
  fetch("https://fakestoreapi.com/products").then((res) => {
    res.json().then((data) => {
      console.log(data);
    });
  });
}

async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
// getData();
getProducts();

let obj = {
  name: "something",
  age: 23,
  city: "Delhi",
  country: "India",
};

// const jsonData = JSON.stringify(obj);
// console.log(jsonData);

// const parsedData = JSON.parse(jsonData);
// console.log(parsedData);
