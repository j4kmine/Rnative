import React, {Component} from'react';
import PropTypes from 'prop-types';
import {View,Text,TouchableOpacity} from 'react-native';
 class Glass extends Component <{}>{
	
	render(){
		const {type,value,bean,info} =this.props;
		return(
			
			<Text>Glass {type} {value} {bean} {info.color}</Text>
		

		);
	}
}


Glass.propTypes = {

	type:PropTypes.string.isRequired,
	value:PropTypes.string.isRequired,
	bean:PropTypes.string.isRequired,
	info:PropTypes.object.isRequired
}
export default Glass;