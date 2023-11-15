export default function PayLoan({onActive}) {
  return (
      <button
          onClick={ () => { console.log( 'Pay loan' );} }
          disabled={ !onActive }
      >
        Pay loan
      </button> );
}