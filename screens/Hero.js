import React,  {Component} from 'react';
import { Navigation } from 'react-native-navigation';
import { Container, Header, Thumbnail,Content,H3,Footer, Left,Body,Right,Button,Icon,Card,CardItem,List, ListItem, Text } from 'native-base';
export default Hero =(props , navigator)=>(
	// <Text>{props.anime.name}</Text>
	<ListItem onPress={()=>props.navigator.push({screen: 'push.HeroView' , passProps:{hero:props}})}>
		<Thumbnail square size={80} source={{uri:props.anime.ImageUrl}}/>
		<Body>
			<Text>{props.anime.name}</Text>
			<Text note>{props.anime.title}</Text>
		</Body>
	</ListItem>

);
