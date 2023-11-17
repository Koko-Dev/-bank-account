export default function Deposit( { onActive, dispatch } ) {
  return (
      <button
          onClick={ () => dispatch( { type: 'deposit', payload: 150 } ) }
          disabled={ !onActive }
      >
        Deposit 150
      </button> );
}