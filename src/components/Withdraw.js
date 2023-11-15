export default function Withdraw( { onActive, dispatch } ) {
  return (
      <button
          onClick={ () => dispatch( { type: 'withdraw' } ) }
          disabled={ !onActive }
      >
        Withdraw 50
      </button> );
}