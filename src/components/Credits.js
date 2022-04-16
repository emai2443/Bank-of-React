import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Credits(props) {
  const [credit, setCredit] = useState([]);
  const [data, setNewData] = useState([
    {
      amount: 0,
      discription: "",
      data: "",
    },
  ]);

  useEffect(() => {
    if (props.login) {
      fetch("https://moj-api.herokuapp.com/credits")
        .then((res) => res.json())
        .then((data) => setCredit(data));
    }
  }, [props.login]);

  credit.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse();
  const display = credit.map((c, index) => (
    <div key={index} className="credit">
      <li className="date">{new Date(c.date).toLocaleDateString()}</li>
      <li>{c.description}</li>
      <li>{c.amount}</li>
    </div>
  ));

  function handleSubmit(e) {
    e.preventDefault();
    if (data.description && data.amount && data.date) {
      setCredit([...credit, data]);
      props.onChange(data.amount);
    }
  }

  async function descriptionChange(e) {
    console.log(e.target.value);
    await setNewData({
      ...data,
      description: e.target.value,
      date: new Date().toISOString().toString(),
    });
  }

  async function amountChange(e) {
    await setNewData({
      ...data,
      amount: e.target.value,
      date: new Date().toISOString().toString(),
    });
  }

  return (
    <div>
      <div className="links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/userProfile" className="nav-link">
          User Profile
        </Link>
        <Link to="/Debits" className="nav-link">
          Debits
        </Link>
      </div>
      <h1 className="title">Credits</h1>
      <h3 className="creds">By: Eric Mai </h3>
      <div className="balance">Balance: ${props.accountBalance}</div>
      <div className="credits">{display}</div>
      <form className="form_style" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="description">Description</label>
          <input type="text" name="description" onChange={descriptionChange} />
        </div>
        <div className="input">
          <label htmlFor="amount">Amount</label>
          <input type="number" name="amount" onChange={amountChange} />
        </div>
        <button>Add Credit</button>
      </form>
    </div>
  );
}
export default Credits;
