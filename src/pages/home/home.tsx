import { getCookie } from "cookies-next";
import { Navigate } from "react-router-dom";

export default function Home() {
  const authToken = getCookie("auth-token") as string;

  if (!authToken) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

