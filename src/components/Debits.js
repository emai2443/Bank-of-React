// src/components/Debits.js
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Debits = (props) => {

  const [debit, setDebit] = useState([]);
  const [data, setNewData] = useState([{
      amount: 0,
      description: "",
      date: ""
  }]);

  useEffect(() => {
    if (props.login) {
      fetch("https://moj-api.herokuapp.com/debits")
        .then(res => res.json())
        .then(data => setDebit(data))
    }
  }, [props.login])

  debit.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse();
  const display = debit.map((d, index) => (
    <div key={index} className='debit'>
      <li className='date'>{new Date(d.date).toLocaleDateString()}</li>
      <li>{d.description}</li>
      <li>{d.amount}</li>
    </div>
  ));

  function handleSubmit(e) {
      e.preventDefault()
      if (data.description && data.amount && data.date) {
          setDebit([...debit, data])
          props.onChange("-" + data.amount) 
      }
  }

  async function descriptionChange(e) {
      console.log(e.target.value)
      await setNewData({
        ...data,
        description: e.target.value, 
        date: new Date().toISOString().toString(),
      });
  }

  async function amountChange(e) {
      await setNewData({ 
        ...data, amount: e.target.value, 
        date: new Date().toISOString().toString(),
      });
  }

  return (
  <div>
    <div>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/userProfile" className="nav-link">
        User Profile
      </Link>
      <Link to="/Credits" className="nav-link">
        Credits
      </Link>
    </div>
    <h1 className='titles'>Debits</h1>
    <h3 className="creds">By: Richard Vazquez</h3>
    <div className='balance'>Balance: ${props.accountBalance}</div>
    <div className='debits'>{display}</div>
    <form className="form_style" onSubmit={handleSubmit}>
      <div className='input'>
        <label htmlFor="description">Description</label>
        <input type="text" name="description" onChange={descriptionChange} />
      </div>
      <div className='input'>
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" onChange={amountChange} />
      </div>
      <button>Add Debit</button>
    </form>
  </div>
);


}

export default Debits;