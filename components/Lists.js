import React, {Component} from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import ListChild from './ListChild';
export default class Lists extends Component{
	animes=[
		'sinchan',
		'kobochan',
		'doraemon',
		'yugi oh'
	]
	constructor() {
	  super();
	
	 
	}
	render(){
		 return (
		      <Container>
		        <Header />
		        <Content>
		          <List>
		           	{this.animes.map((anime,key)=><ListItem><Text key={key}>{anime}</Text></ListItem>)}
		          	{this.animes.map((anime,key)=><ListChild key={key} anime={anime}/>)}
		          </List>
		        </Content>
		      </Container>
    	);
	}

}

