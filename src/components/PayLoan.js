export default function PayLoan() {
  return (
      <button
          onClick={ () => { console.log( 'Pay loan' );} }
          disabled={ false }
      >
        Pay loan
      </button> );
}