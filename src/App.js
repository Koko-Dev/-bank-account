import { useReducer } from 'react';
import OpenAccount from './components/OpenAccount';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import RequestLoan from './components/RequestLoan';
import PayLoan from './components/PayLoan';
import CloseAccount from './components/CloseAccount';


const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  deposit: 0,
  withdraw: 0,
  payLoan: 0,
  closeAccount: false,
  openAccount: false,
  debt: false,
};

function reducer( state, action ) {
  
  switch ( action.type ) {
    case 'open':
      return {
        ...state, openAccount: true, balance: action.payload, isActive: true,
      };
    case 'deposit':
      return {
        ...state, balance: state.balance + action.payload
      };
    case 'withdraw':
      return {
        ...state,
        balance: state.balance >= 50
                 ? state.balance - 50
                 : state.balance
      };
    case 'loanRequest':
      return {
        ...state,
        debt: action.payload,
        balance: state.debt
                 ? state.balance
                 : state.balance + 5000,
        loan: 5000
      };
    case 'payLoan':
      return {
        ...state,
        debt: action.payload,
        balance: state.balance >= 5000
                 ? state.balance - 5000
                 : state.balance,
        loan: state.loan === 5000 && state.balance >= 5000
              ? state.loan = 0
              : state.loan
      };
    case 'close':
      return {
        ...state,
        openAccount: false,
        balance: 0,
        isActive: action.payload,
        debt: false,
        loan: 0,
        deposit: 0,
        closeAccount: true,
        payLoan: 0,
      };
    
    default:
      throw new Error( 'Action unknown' );
  }
}


function App() {
  const [
    {
      balance, loan, isActive, deposit, withdraw, payLoan, closeAccount, openAccount, debt,
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
          <RequestLoan dispatch={ dispatch } onActive={ isActive } debt={ debt } />
        </p>
        <p>
          <PayLoan dispatch={ dispatch } onActive={ isActive } debt={ debt } />
        </p>
        <p>
          <CloseAccount dispatch={ dispatch } onActive={ isActive } />
        </p>
      </div> );
}

export default App;
