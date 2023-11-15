export default function CloseAccount() {
  return (
      <button
          onClick={ () => { console.log( 'Close Account' );} }
          disabled={ false }
      >
        Close Account
      </button> );
}