export default function CloseAccount( { onActive } ) {
  return (
      <button
          onClick={ () => { console.log( 'Close Account' );} }
          disabled={ !onActive }
      >
        Close Account
      </button> );
}