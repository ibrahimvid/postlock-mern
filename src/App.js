import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/header.component';
import EditPost from './components/edit-post.component';
import NewPost from './components/new-post.component';
import Posts from './components/posts.component';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Route path='/' exact component={Posts} />
        <Route path='/edit/:id' component={EditPost} />
        <Route path='/new' component={NewPost} />
      </Router>
    </div>
  );
}

export default App;
