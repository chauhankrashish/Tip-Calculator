import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [bill, SetBill] = useState();
  const [select, SetSelect] = useState(.20);
  const [customer, SetCustomer] = useState();
  const [tipCalutale, SetTipCalutale] = useState([]);
  const [listCount, setListCount] = useState(0)
  const [tips, setTips] = useState([])
  const [totaltips, setTotalTips] = useState(0)



  const tip = Math.floor(+bill * +select);

  const addCustomerAndTip = () => {

    setTips([...tips, tip]);
    SetTipCalutale([...tipCalutale, (`${customer} is offering tip of ${tip} Rs`)]);
    SetBill(" ");
    SetCustomer(" ");
  }

  function showDetails() {
    const newlength = tipCalutale.length;
    setListCount(newlength)
    const totaltip = () => {
      let sum = 0;
      tips.map((e) => {
        return sum = sum + e;
      })
      setTotalTips(sum)

    }
    totaltip();
  }
  return (
    <div className='main-div'>
      <div className="App">
        <header>
          <h1>Tip Calculator</h1>
          <span>Build in React Ashish Chauhan</span>
        </header>
        {/* bill amount  */}
        <div className='bill-amount'>
          <label for="#">Enter Your Bill Amount </label> <br />
          <input type="number" className='bill' placeholder='Enter Total Bill Amount' value={bill} onChange={e => SetBill(e.target.value)}></input>
        </div>
        {/* Choose % */}
        <div className='input-Section'>
          <label for="cars">How was the services </label>
          <select id="tip" value={select} onChange={e => SetSelect(e.target.value)}>
            <option value=".20">Excellent 20% </option>
            <option value=".10">Moderate 10% </option>
            <option value=".05">Bad 5%</option>
          </select>
        </div>
        {/* customer name  */}
        <div className='add-customer'>
          <input type="text" value={customer} className='customer' placeholder='Customer Name' onChange={e => SetCustomer(e.target.value)}></input>  <br />
          <button type="submit" className='add-customer-btn' onClick={addCustomerAndTip}>Add Customer</button>
        </div>
        {/* show customer list  */}
        <div className='customer-list'>
          <h2>Customer List</h2>
          <hr />
          <ul className='list'>
            {
              tipCalutale.map((ele) => (
                <li>{ele}</li>
              ))
            }
          </ul>
        </div>
        {/* customer table data  */}
        <div className='tip-customer'>
          <button id='tip-and-customer' onClick={showDetails}>Calculate Tip & Customer</button>
          <div className='data-table'>
            <table>
              <tr>
                <th>Total Customer</th>
                <th>Total Tip Amount</th>
              </tr>
              <tr>
                <td>{listCount}</td>
                <td>{totaltips}</td>
              </tr>
            </table>
          </div>
        </div>
        {/* footer  */}
        <footer >
          <p>&#169; 2023 Tip-calculator</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
