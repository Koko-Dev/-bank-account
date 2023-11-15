export default function OpenAccount() {
  return (
      <button
          onClick={ () => { console.log( 'Open Account' );} }
          disabled={ false }
      >
        Open Account
      </button> );
}