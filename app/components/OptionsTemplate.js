import React from 'react';

export default React.createClass({
	render: function() {
		var searchResult = this.props.data;
		return (
				<div>{searchResult}</div>
		);
	}
});