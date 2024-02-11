import {
    useLocation,
    useNavigate,
    useParams
  } from "react-router-dom";


export const BACKEND_URL = "https://local-reports-backend-iqhbv5gqda-uc.a.run.app"; 



  export const withRouter = (Component) =>  {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
    return ComponentWithRouterProp;
  }