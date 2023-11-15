export default function RequestLoan() {
  return (
      <button
          onClick={ () => { console.log( 'Request a loan of 5000' );} }
          disabled={ false }
      >
        Request a loan of 5000
      </button> );
}