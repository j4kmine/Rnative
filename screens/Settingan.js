import React , {Component}  from 'react';
import { Container, Header, Content,H3,Footer, Left,Body,Right,Button,Icon,Card,CardItem,List, ListItem, Text } from 'native-base';
export default  class Settingan extends Component <{}>{		
	render(){
		return(
			  <Container style={{justifyContent:"center",alignSelf:  "center"  }} >
				<Content>
					<H3 style={styles.subtitle}>Settings</H3>
				</Content>
			</Container>
		);
	}


}
const styles ={
	subtitle:{
		textAlign:'center' 
	}
}
