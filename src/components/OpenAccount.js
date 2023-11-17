export default function OpenAccount( { dispatch, onActive } ) {
  return (
      <button
          onClick={ () => dispatch( { type: 'open', payload: 500 } ) }
          disabled={ onActive }
      >
        Open Account
      </button> );
}