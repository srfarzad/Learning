import  React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,ActivityIndicator
} from 'react-native';
import HTMLView from 'react-native-htmlview';






export default function AboutScreen() {




  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

useEffect(() => {
  fetch('http://androidforum.site/navin-learn/api.php')
    .then((response) => response.json())
    .then((json) => {
      setData(json.ONLINE_MP3[0]);

      console.log(json.ONLINE_MP3);
    }  )
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}, []);









  return (
    <ScrollView>


{isLoading ? <ActivityIndicator/> : (

        <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.headerTitle}>
                {data.app_name}
                {console.log(data)}
              </Text>
          </View>

          <View style={styles.postContent}>
              <Text style={styles.postTitle}>
              App Version : {data.app_version}
              </Text>

          

              <HTMLView
              style={styles.postDescription}
        value={data.app_description} >
      </HTMLView>



              <View style={styles.profile}>
                <Image style={styles.avatar}
                  source={{uri: 'http://androidforum.site/navin-learn/images/'+data.app_logo}}/>

          
              </View>
              <TouchableOpacity style={styles.shareButton}>
                <Text style={styles.shareButtonText}>Send Email</Text>  
              </TouchableOpacity> 
          </View>
        </View>


)}

      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    padding:30,
    alignItems: 'center',
    backgroundColor: "#00BFFF",
  },
  headerTitle:{
    fontSize:30,
    color:"#FFFFFF",
    marginTop:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  postContent: {
    flex: 1,
    padding:30,
  },
  postTitle:{
    fontSize:26,
    fontWeight:'600',
  },
  postDescription:{
    fontSize:16,
    marginTop:10,
  },
  tags:{
    color: '#00BFFF',
    marginTop:10,
  },
  date:{
    color: '#696969',
    marginTop:10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 35,
    borderWidth: 4,
    borderColor: "#00BFFF",
  },
  profile:{
    flexDirection: 'row',
    marginTop:20
  },
  name:{
    fontSize:22,
    color:"#00BFFF",
    fontWeight:'600',
    alignSelf:'center',
    marginLeft:10
  }, 
  shareButton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  }
});
 
           