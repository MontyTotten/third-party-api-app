var React = require('react');

var DroneList = require('./DroneList.jsx')

var App = React.createClass({
	render: function () {
		return (
			<main>
				<h1>Drone Strikes</h1>
				<DroneList />
			</main>
		);
	}
});

module.exports = App;