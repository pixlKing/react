import React from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends React.Component {

	state = {
		author: "pepe",
	}
	handleClick = (event) =>{
		//console.log(this.props.image);
		this.setState({
			author: "pipi"
		});
	}

	render(){
		return (
			<div className="media" onClick={this.handleClick}>
				<div>
					<img
						src={this.props.image}
						alt=""
						width={260}
						height={160}
					/>
					<h3>{this.props.title}</h3>
					<p>{this.state.author}</p>
				</div>
			</div>
		)
	}
}

Media.propTypes = {
	title:  PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	image:  PropTypes.string.isRequired,
	type:   PropTypes.oneOf(['audio','video']),
}

export default Media;