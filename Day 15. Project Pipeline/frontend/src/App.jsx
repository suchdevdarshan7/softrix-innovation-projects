import { useEffect, useState } from 'react'


function App() {
  const [customers, setCustomers] = useState([]);


  async function getCustomers() {

    try {
      const response = await fetch('http://localhost:5000/v1/api/customers');
      const data = await response.json();
      setCustomers(data);

    }
    catch (error) {
      console.log(error.message);
    }
  }



  return (

    <div className="container">

      <button onClick={getCustomers}> Get Customers </button>


      <table border={1}>
        <tr>
          <th>Name</th>
          <th>Phone</th>
        </tr>
        {customers && customers?.map(customer => (
          <tr key={customer._id}>
            <td>{customer.first_name}</td>
            <td>{customer.phone}</td>
          </tr>
        ))}
      </table>
      {!customers && <p>No customers found.</p>}
    </div>
  )
}

export default App
