export default function OpenAccount( { dispatch, onActive } ) {
  return (
      <button
          onClick={ () => dispatch( { type: 'open' } ) }
          disabled={ onActive }
      >
        Open Account
      </button> );
}