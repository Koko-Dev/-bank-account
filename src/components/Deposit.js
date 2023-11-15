export default function Deposit( { onActive, dispatch } ) {
  return (
      <button
          onClick={ () => dispatch( { type: 'deposit' } ) }
          disabled={ !onActive }
      >
        Deposit 150
      </button> );
}