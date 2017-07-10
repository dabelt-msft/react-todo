var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

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
  handleAddTodo: function(text){
    alert('New todo: ' + text)
  },
  render: function(){
    var {todos} = this.state;

    return (
      <div>
          <h1>TodoApp</h1>
          <TodoList todos={todos}/>
          <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
})

module.exports = TodoApp;
