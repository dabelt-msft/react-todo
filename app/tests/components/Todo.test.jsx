var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });


  it('should call onToggle prop with id on click', () => {
    var todoData = {
      id: 199,
      text: 'write todo.test.jsx test',
      completed: true
    }
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>)
    var $el = $(ReactDOM.findDOMNode(todo));
    //uses $el[0] is $el is <Todo> and the root of <Todo/> is the first div with the onClick event which fires onToggle
    TestUtils.Simulate.click($el[0]);

    //spy is used to spy on onToggle, and in this case it is used to make sure that
    //onToggle was called with 199.
    expect(spy).toHaveBeenCalledWith(199)
  })
});
