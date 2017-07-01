var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  render: function(){
    return (
      <div>
          <h1>TodoApp</h1>
          <TodoList/>
      </div>


    )
  }
})

module.exports = TodoApp;
