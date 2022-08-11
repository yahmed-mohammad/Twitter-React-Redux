import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from '../actions/shared';
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return <div>
    <Fragment>
      <LoadingBar/>
      <div className="container">
        <Nav/>
        {
          props.loading === true ? null : (
            <Routes>
                <Route path="/" exact element={<Dashboard/>}/>
                <Route path="/tweet/:id" exact element={<TweetPage/>}/>
                <Route path="/new" exact element={<NewTweet/>}/>
            </Routes>
          )
        }
      </div>
    </Fragment>
    
    
    </div>;
};

const mapStateToProps = ({authUser}) => ({
  loading: authUser === null
});

export default connect(mapStateToProps)(App);
