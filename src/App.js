const initialState = {
  balance: 0, loan: 0, isActive: false,
};


function App() {
  return (
      <div className='App'>
        <h1>useReducer Bank Account</h1>
        <p>Balance: X</p>
        <p>Loan: X</p>
        
        <p>
          <button>Open Account</button>
        </p>
        <p>
          <button>Deposit 150</button>
        </p>
        <p>
          <button>Withdraw 50</button>
        </p>
        <p>
          <button>Request a loan of 5000</button>
        </p>
        <p>
          <button>Pay loan</button>
        </p>
        <p>
          <button>Close Account</button>
        </p>
      </div> );
}

export default App;
