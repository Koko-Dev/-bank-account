import { useReducer } from 'react';
import OpenAccount from './components/OpenAccount';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import RequestLoan from './components/RequestLoan';


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
          <Deposit />
        </p>
        <p>
          <Withdraw />
        </p>
        <p>
          <RequestLoan />
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
