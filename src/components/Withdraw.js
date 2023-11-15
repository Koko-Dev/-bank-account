export default function Withdraw({onActive}) {
  return (
      <button
          onClick={ () => { console.log( 'Withdraw 50' );} }
          disabled={ !onActive }
      >
        Withdraw 50
      </button> );
}