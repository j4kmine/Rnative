import React, {Component} from 'react';
import { Container, Header, Content,Footer, Left,Body,Right,Button,Icon,Card,CardItem,List, ListItem, Text } from 'native-base';
export default class SecondTabScreen extends Component <{}>{		
	render(){
		return(
			<Container>
				<Header>
					<Left>
						<Icon name="arrow-back" style={{color:"#046CE3"}}/>
					</Left>
					<Body><Text>Numer</Text></Body>
					<Right>
							
					</Right>
				</Header>
				<Content>
				   <Card>
				   		<CardItem header>
				   			<Text subtitle>Hello Im Card Header</Text>
				   		</CardItem>
				   		<CardItem>
				   			<Body>
				   				<Text>Hello Im Body</Text>
				   			</Body>
				   		</CardItem>
				   </Card>
				</Content>
				<Footer>
					<Text>Iam Footer</Text>
				</Footer>
			</Container>
		);
	}
	
}