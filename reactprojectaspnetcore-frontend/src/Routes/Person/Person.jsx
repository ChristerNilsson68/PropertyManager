import Authorization from '../../components/Authorization/Authorization';

const Person = () => {
  if (Authorization(['Administrator']) === false) {
    return <h1>Du har inte tillgång till sidan!</h1>;
  } else {
    return (
      <>
        <h1>Person sidan</h1>
      </>
    );
  }
};

export default Person;
