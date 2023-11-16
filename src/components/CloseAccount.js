export default function CloseAccount( { onActive, dispatch } ) {
  return (
      <button
          onClick={ () => dispatch( { type: 'close', payload: false } ) }
          disabled={ !onActive }
      >
        Close Account
      </button> );
}