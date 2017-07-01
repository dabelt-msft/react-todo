var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function(){
    return (
      <div>
        <h2>TodoList</h2>
        <Todo/>
      </div>
    )
  }
})

module.exports = TodoList;
