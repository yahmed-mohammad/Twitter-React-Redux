import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from '../actions/shared';
import Dashboard from "./Dashboard";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return <div>{props.loading === true ? null : <Dashboard/>}</div>;
};

const mapStateToProps = ({authUser}) => ({
  loading: authUser === null
});

export default connect(mapStateToProps)(App);
