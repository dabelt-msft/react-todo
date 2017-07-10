var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function(){
    var {todos} = this.props;
    var renderTodos = function(){
      return todos.map((todo)=>{
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    }
    return (
      <div>
        <h2>TodoList</h2>
        {renderTodos()}
      </div>
    )
  }
})

module.exports = TodoList;
