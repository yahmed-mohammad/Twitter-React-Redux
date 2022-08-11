import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from '../actions/shared';
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return <div>
    <LoadingBar/>
      {props.loading === true ? null : <TweetPage match={{
        params: {id: "2mb6re13q842wu8n106bhk"}
      }}/>}
    </div>;
};

const mapStateToProps = ({authUser}) => ({
  loading: authUser === null
});

export default connect(mapStateToProps)(App);
