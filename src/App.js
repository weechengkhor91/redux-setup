import React from 'react';
import './App.less';
import Posts from "../../../cra-redux/cra-redux/src/components/Posts";
import PostsForm from "../../../cra-redux/cra-redux/src/components/PostsForm/postsform";

function App() {
    return (

        <div className="App">
            <PostsForm/>
            <Posts/>
        </div>
    );
}

export default App;
