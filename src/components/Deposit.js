export default function Deposit( { onActive } ) {
  return (
      <button
          onClick={ () => { console.log( 'Deposit 150' );} }
          disabled={ !onActive }
      >
        Deposit 150
      </button> );
}