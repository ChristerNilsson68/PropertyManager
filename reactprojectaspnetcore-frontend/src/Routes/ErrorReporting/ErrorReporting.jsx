import Authorization from '../../components/Authorization/Authorization';

const ErrorReporting = () => {
  if (Authorization(['Administrator', 'Employee']) === false) {
    return <h1>Du har inte tillgång till sidan!</h1>;
  } else {
    return (
      <>
        <h1>Fel på lägenhet eller fastighet hanteras på denna sida</h1>
      </>
    );
  }
};

export default ErrorReporting;
