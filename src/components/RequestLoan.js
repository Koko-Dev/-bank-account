export default function RequestLoan({ onActive}) {
  return (
      <button
          onClick={ () => { console.log( 'Request a loan of 5000' );} }
          disabled={ !onActive }
      >
        Request a loan of 5000
      </button> );
}