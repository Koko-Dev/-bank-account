import { useReducer } from 'react';
import OpenAccount from './components/OpenAccount';


const initialState = {
  balance: 0, loan: 0, isActive: false,
};

function reducer(state, action) {

}


function App() {
  const { balance, loan, isActive } = useReducer(reducer, initialState)
  return (
      <div className='App'>
        <h1>useReducer Bank Account</h1>
        <p>Balance: X</p>
        <p>Loan: X</p>
        
        <p>
          <OpenAccount />
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
