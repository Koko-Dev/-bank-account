export default function Deposit() {
  return (
      <button
          onClick={ () => { console.log( 'Deposit 150' );} }
          disabled={ false }
      >
        Deposit 150
      </button> );
}