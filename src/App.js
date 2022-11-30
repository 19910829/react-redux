import { useEffect, useState } from "react";
import './App.css';

function App() {
    const [data, setData] = useState([]);
  
    const fetchData = () => {
      fetch(`https://dummyjson.com/products`)
        .then((response) => response.json())
        .then((actualData) => {
          console.log(actualData);
          setData(actualData.products);
          console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
  
    useEffect(() => {
      fetchData();
    }, []);


return (
    <div className="App">
      <tbody>
        <tr>
          <th>Product Name</th>
          <th>price</th>
          <th>discountPercentage</th>
          <th>rating</th>
          <th>stock</th>
          <th>brand</th>
          <th>category</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.discountPercentage}</td>
            <td>{item.rating}</td>
            <td>{item.stock}</td>
            <td>{item.category}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}
export default App;