var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('uuid');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Wash Car'
        },
        {
          id: uuid(),
          text: 'Finish work'
        },
        {
          id: uuid(),
          text: 'Leave mail on porch'
        },
        {
          id: uuid(),
          text: 'Pick up Kent'
        }
      ]
    }
  },
  handleAddTodo: function(text){
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    })
    // alert('New todo: ' + text)
  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function(){
    var {todos} = this.state;

    return (
      <div>
          <h1>TodoApp</h1>
          <TodoSearch onSearch={this.handleSearch}/>
          <TodoList todos={todos}/>
          <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
})

module.exports = TodoApp;
