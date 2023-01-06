import { useContext } from 'react';
import { UserContext } from '../../Context/User.Context';

const Authorization = (props) => {
  const { token } = useContext(UserContext);

  if (token == null) {
    return false;
  } else {
    const payload = token.split('.')[1];
    const dataToken = JSON.parse(atob(payload));
    const claims = dataToken.role;

    let response = false;

    props.forEach((element) => {
      if (claims.find((x) => x === element)) {
        // console.log(`Element: ${element} = true`);
        response = true;
      } else {
        // console.log(`Element: ${element} = false`);
      }
    });
    // console.log(`Final response: ${response}`);
    return response;
  }
};

export default Authorization;
