import './App.css';

function App() {
  const products = [
    {name: "Apple", price: "200000", country: "USA"},
    {name: "Pixel", price: "180000", country: "USA"},
    {name: "Xiaomi", price: "30000", country: "CHINA"},
    {name: "Vestel", price: "35000", country: "Turkiye"},
    {name: "Samsung", price: "26000", country: "Korea"},
    {name: "Walton", price: "200000", country: "Bangladesh"},
    {name: "Nothing", price: "250000", country: "USA"},
  ]
  return (
    <div className="App">
      {
         products.map(product => <Product name = {product.name} price = {product.price} country= {product.country}></Product>)
      }
      {/* <Product name = "apple" price = "233333" country= "usa"></Product> */}
    </div>
  );
}


function Product(props){
  const {name, price, country} = props;
  return(
    <div className='products'> 
        <h1>Product Name : {name}</h1>
        <h2>Product Price : {price}</h2>
        <h2>Product Price : {country}</h2>
    </div>
  )
}

export default App;
