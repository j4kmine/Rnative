import React, {Component} from 'react';
import{View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import Glass from './Glass';
export default class Coffe extends Component <{}>{	
	constructor(){
		super();
		this.state ={
			number:0,
			text:"Hallo"

		};
	}
	componentDidMount(){
		setInterval(()=>this.setState({
			number:this.state.number +1,
			text:"hallo dunia"
		}),1000);

	}
	handleClick(){
		this.setState({
			number:this.state.number +1,
			text:"hallo dunia"
		})

	}
	render(){
		const info = {
			color:"Black",
			name:"robuj"
		};
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text>header</Text>
				</View>
					<View style={styles.body}>
						<Text style={styles.bodyText}>{this.state.number}</Text>
						<Text>{this.state.text}</Text>
						<Text>Glass</Text><Glass type="manda" value="exp" volume={1} bean="green" info={info}/>
						<TouchableOpacity onPress={()=>this.handleClick()}>
							<Text>click</Text>
						</TouchableOpacity>
					</View>
			</View>

		

		);
	}
}
const styles =StyleSheet.create({
container:{
	flex:1
},
header:{
	flex:0.2,
	backgroundColor: 'green'
},
body:{
	flex: 3,
	backgroundColor: 'blue',
	justifyContent: 'center'  
},
bodyText:{
	alignSelf: 'center' ,
	fontWeight: 'bold',
	color: '#fff' ,
	fontSize: 20
}


});