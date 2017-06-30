var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation
require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');
//app css
require('style-loader!css-loader!sass-loader!applicationStyles');
$(document).foundation();

ReactDOM.render(
    <p>Boilerplate Project</p>,
    document.getElementById('app')
);
