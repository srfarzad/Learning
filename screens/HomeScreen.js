import  React,{useState,useEffect} from 'react';
import { StyleSheet,View,Text,FlatList,ActivityIndicator ,TouchableOpacity,Dimensions,  Modal,Image,} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


export default function HomeScreen({navigation}) {


  const [data, setData] = useState([]);
  const [images, setImage] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const myImage=[];

  useEffect(() => {
    fetch('http://androidforum.site/navin-learn/api.php?latest')
      .then((response) => response.json())
      .then((json) => {
        setData(json);

        for (i = 0; i < json.length; i++) {
         var x =json[i].mp3_thumbnail_b;
         myImage.push(x)
        }
        setImage(myImage)
        console.log(myImage);
      }  )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);




  return (
    <View style={styles.container}>

      
    
      {isLoading ? <ActivityIndicator/> : (
      
      <View>

      <SliderBox images={images} style={{height:200}} />

        <Text style={styles.titles}>Latest Update</Text>
      <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (


            <TouchableOpacity style={styles.card} onPress={()=> {


              navigation.navigate('ArticleScreen', {
                myParams : item,
                title : item.mp3_title,
              })

            }} >
            <Image style={styles.image} source={{uri: item.mp3_thumbnail_b}}/>
            <View style={styles.cardContent}>
              <Text style={styles.name}>{item.mp3_title}</Text>
              <Text style={styles.position}>{item.mp3_artist}</Text>
           
            </View>
          </TouchableOpacity>
          )}
        />


</View>
      )}
     


    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#eeeeee"
  },
  titles:{
    margin:20,
  },
  header:{
    backgroundColor: "#00CED1",
    height:200
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
    flex:1,
  },
  detailContent:{
    top:80,
    height:500,
    width:Dimensions.get('screen').width - 90,
    marginHorizontal:30,
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  userList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
  },



  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal:20,
    backgroundColor:"white",
    flexBasis: '46%',
    padding: 10,
    flexDirection:'row'
  },

  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#008080",
    fontWeight:'bold'
  },
  position:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },

  
});