export default function Withdraw() {
  return (
      <button
          onClick={ () => { console.log( 'Withdraw 50' );} }
          disabled={ false }
      >
        Withdraw 50
      </button> );
}