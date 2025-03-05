import { InteractionStatus } from "@azure/msal-browser";
import { LOGIN_REQUEST } from "../auth-config";
import { useMsal } from "@azure/msal-react";
import { useEffect } from "react";
import { Hourglass } from "react-loader-spinner";

export const Login = () => {
  const { instance, inProgress } = useMsal();

  useEffect(() => {
    const login = async () => {
      if (inProgress === InteractionStatus.None) {
        instance.loginRedirect(LOGIN_REQUEST);
      }
    };

    login();
  }, [inProgress, instance]);
  return (
    <Hourglass
      visible={true}
      height="30"
      width="30"
      ariaLabel="hourglass-loading"
      wrapperStyle={{
        position: "fixed",
        top: "50%",
        left: "50%",
      }}
      wrapperClass=""
      colors={["#306cce", "#72a1ed"]}
    />
  );
};
