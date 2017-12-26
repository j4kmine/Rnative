import React,  {Component} from 'react';
import {ListView,Text,View} from 'react-native';
import Anime from './Anime';
export default class MyAnime extends Component{
animes=[
		'sinchan',
		'kobochan',
		'doraemon',
		'yugi oh'
	]
	constructor(){
	  super();	
	  const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2});
	  this.state = {
	  	dataSource: ds.cloneWithRows(this.animes)
	  }
	 
	}
	 render(){
	  	return(
	  		<View>
	  			<Text> With Datasource</Text>
	  			<ListView dataSource={this.state.dataSource}
	  				renderRow={(rowData)=> <Text>{rowData}</Text>}/>
	  			<ListView dataSource={this.state.dataSource}
	  				renderRow={(rowData)=> <Anime anime={rowData} />}/>
	  			<Text>With Maps:</Text>
	  			{this.animes.map((anime,key)=><Text key={key}>{anime}</Text>)}
	  		</View>

	  	);
	  }
}