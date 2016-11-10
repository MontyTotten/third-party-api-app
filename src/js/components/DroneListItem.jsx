var React = require('react');

var DroneDetails = require('./DroneDetails.jsx');

var DroneListItem = React.createClass({

	getInitialState: function () {
		return {
			detailsVisible: false
		}
	},

	render: function () {
		var details;

		// var { number, country, deaths } = this.props.data;

		var data = this.props.data;
		var number = data.number;
		var country = data.country;
		var deaths = data.deaths;

		if (this.state.detailsVisible) {
			details = <DroneDetails data={data} />
		}

		return (
			<div onClick={this.handleDetailsClick}>
				<p>{number}. {country}</p>
				<p>Deaths: {deaths}</p>
				{details}
			</div>
		);
	},

	handleDetailsClick: function () {
		this.setState({
			detailsVisible: !this.state.detailsVisible
		});
	}
});

module.exports = DroneListItem;