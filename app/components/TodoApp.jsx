var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        {
          id: 1,
          text: 'Wash Car'
        },
        {
          id: 2,
          text: 'Finish work'
        },
        {
          id: 3,
          text: 'Leave mail on porch'
        },
        {
          id: 4,
          text: 'Pick up Kent'
        }
      ]
    }
  },
  render: function(){
    var {todos} = this.state;

    return (
      <div>
          <h1>TodoApp</h1>
          <TodoList todos={todos}/>
      </div>
    )
  }
})

module.exports = TodoApp;
