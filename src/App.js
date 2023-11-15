import { useReducer } from 'react';
import OpenAccount from './components/OpenAccount';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import RequestLoan from './components/RequestLoan';
import PayLoan from './components/PayLoan';
import CloseAccount from './components/CloseAccount';


const initialState = {
  balance: 0, loan: 0, isActive: false, deposit: 0, withdraw: 0, payLoan: 0, closeAccount: false, openAccount: false,
};

function reducer( state, action ) {
  
  switch ( action.type ) {
    case 'open':
      return {
        ...state, openAccount: true, balance: 400, isActive: true,
      };
    case 'deposit':
      return {
        ...state, balance: state.balance + 150
      };
    case 'withdraw':
      return {
        ...state,
        balance: state.balance >= 50
                 ? state.balance - 50
                 : state.balance
      };
    
    default:
      throw new Error( 'Action unknown' );
  }
}


function App() {
  const [
    {
      balance, loan, isActive, deposit, withdraw, payLoan, closeAccount, openAccount,
    }, dispatch
  ] = useReducer( reducer, initialState );
  return (
      <div className='App'>
        <h1>useReducer Bank Account</h1>
        <p>Balance: { balance }</p>
        <p>Loan: { loan }</p>
        
        <p>
          <OpenAccount dispatch={ dispatch } onActive={ isActive } />
        </p>
        <p>
          <Deposit dispatch={ dispatch } onActive={ isActive } />
        </p>
        <p>
          <Withdraw dispatch={ dispatch } onActive={ isActive } />
        </p>
        <p>
          <RequestLoan onActive={ isActive } />
        </p>
        <p>
          <PayLoan onActive={ isActive } />
        </p>
        <p>
          <CloseAccount onActive={ isActive } />
        </p>
      </div> );
}

export default App;
