export default function PayLoan( { onActive, dispatch, debt } ) {
  return (
      <button
          onClick={ () => dispatch( { type: 'payLoan', payload: false } ) }
          disabled={ !onActive }
      >
        Pay loan
      </button> );
}