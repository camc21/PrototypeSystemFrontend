import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LoginDataService } from "../services/LoginDataService";
import { useSelector, useDispatch } from "react-redux";

function showButtonLoginAction(){
  const dispatch = useDispatch();
  dispatch(showButtonLoginAction(true));
}

const withAuth = (WrappedComponent) => {

  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    const pathname = Router.asPath;

    useEffect(async () => {
      console.log(pathname);
      const accessToken = localStorage.getItem("accessToken");
      // if no accessToken was found,then we redirect to "/" page.
      if (!accessToken) {
        Router.replace("/");
      } else {
        LoginDataService.validateToken().then(response => {
          console.log(response.data);
          // we call the api that verifies the token.
          const data = {verified: response.data}; /*await verifyToken(accessToken);*/
          // if token was verified we set the state.
          if (data.verified) {
            setVerified(data.verified);
          } else {
            // If the token was fraud we first remove it from localStorage and then redirect to "/"
            localStorage.removeItem("accessToken");
            showButtonLoginAction();
            Router.replace("/");
          }
        })
      }
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;