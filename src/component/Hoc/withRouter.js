import {
  useLocation /* other hooks */,
  useSearchParams,
  useParams,
} from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const myParam = useLocation();
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <WrappedComponent
      {...props}
      location={myParam}
      {...{ searchParams, setSearchParams /* other injected props */ }}
      params={params}
    />
  );
};

export default withRouter;
