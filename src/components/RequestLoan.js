export default function RequestLoan( { onActive, dispatch, debt } ) {
  const hasLoan = debt;
  return (
      <button
          onClick={ () => hasLoan
                          ? ''
                          : dispatch( { type: 'loanRequest', payload: true } ) }
          disabled={ !onActive }
      >
        Request a loan of 5000
      </button> );
}