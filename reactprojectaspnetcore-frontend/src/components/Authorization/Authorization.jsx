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
    const expire = dataToken.exp;

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

    var expireDate = new Date(expire);
    const now = Date.now().valueOf() / 1000;
    if (typeof expireDate !== 'undefined' && expireDate < now) {
      response = false;
    }

    return response;
  }
};

export default Authorization;
