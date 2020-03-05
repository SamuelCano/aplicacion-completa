import React, {Component} from 'react';
import {View, ActivityIndicator,StyleSheet} from 'react-native';
import { Text} from "native-base";
import { FlatList } from 'react-native-gesture-handler';

export default class Envio extends React.Component {
    

    constructor(props) {  
        super(props) 
        this.state={
          isLoading:true,
          }
    } 

   async componentDidMount(){
      try{
        const response=
        await fetch('https://reactnative.dev/movies.json');
        const responseJson=await response.json();
        this.setState({
          isLoading:false,
          dataSource:responseJson.movies
          },function(){

          });
      }
      catch(error){
          console.log(error);
      }
    } 

  render(){
    if(this.state.isLoading){
      return(
        <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return(
      <View>
      <FlatList
          data={this.state.dataSource}
          renderItem={({item})=>
          <Text>
          {item.title},
          {item.releaseYear}
          </Text>
          }
          keyExtractor={({id},index)=>id}
      />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

