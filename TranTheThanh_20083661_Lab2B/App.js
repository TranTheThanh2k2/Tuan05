import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image , TextInput , Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}> 
        <Image 
            style={styles.icon1}
            source={require('./assets/usb.png')}
          />
        <Text style={styles.text1}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
      </View>
      <View style={styles.view2}> 
        <Text style={styles.text2}>Cực kỳ hài lòng</Text>
        <View style={styles.item}>
        <Image
          style={styles.icon2}
          source={require('./assets/star.png')}
        />
        <Image
          style={styles.icon2}
          source={require('./assets/star.png')}
        />
        <Image
          style={styles.icon2}
          source={require('./assets/star.png')}
        />
        <Image
          style={styles.icon2}
          source={require('./assets/star.png')}
        />
        <Image
          style={styles.icon2}
          source={require('./assets/star.png')}
        />
        </View>
        <View style={styles.view3}>
          <Image
            style={styles.icon3}
            source={require('./assets/camera.png')}
          />
          <Text style={styles.text3}>Thêm hình ảnh</Text>
        </View>
        <View style={styles.view4}>
          <TextInput 
          multiline={true}

          placeholder='Hãy chi sẻ những điều mà bạn thích về sản phẩm'  
          style={styles.textinput1}>
          </TextInput>
          <Text style={styles.textend}>https://meet.google.com/nsj-ojwi-xpp</Text>
        </View>
        <View style={styles.view5}>
          <button style={styles.buttonend}>Gửi</button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display:"flex",
    flexDirection:"column",
  },
  view1:{
    flex : 2,
    flexDirection:"row",
    justifyContent:'space-between',
  },
  icon1:{
    width:"70px",
    height:"70px",
    margin:'30px'
  },
  text1:{
    fontSize:"15px",
    fontWeight:"bold",
    lineHeight:"20px",
    paddingTop:"20px"

  },
  view2:{ 
    flex:"5",
  },
  item:{
    flexDirection:"row"
  },
  icon2:{
    width:"40px",
    height:"40px",
    marginRight:'10px',
    marginLeft:'10px',
  },
  text2:{
    fontSize:"20px",
    fontWeight:"bold",
    textAlign:"center",
    paddingBottom:"20px"

  },
  view3:{
    flex:"2",
    flexDirection:'row',
    border:"1px solid #1511EB",
    width:"293px",
    height:'50px',
    marginTop:"20px",
    borderRadius:'5px',
    justifyContent:"space-around",
  },
  icon3:{
    width:'50px',
    height:'40px',
    top:'20px',
    left:'15px',
  },
  text3:{
    fontSize:'20px',
    lineHeight:'22px',
    fontWeight:'bold',
    top:'30px',
    right:'20px',
    textAlign:'center',
  },
  view4:{
    
    flex:"4",
    border : '1px solid #C4C4C4',
    borderRadius:'5px',
    width :'293px',
    height:'222px',
    marginTop:'20px',
  },
  textinput1:{
      width:'250px',
      height:'40px',
      left:'30px',
      justifyContent:'flex-start',
      marginLeft:'25px',
      lineHeight:'21px',
      color:'#C4C4C4',
      fontSize:'17px',
    },
    textend:{
      fontWeight:'bold',
      fontSize:'12px',
      lineHeight:'17px',
      top:'120px',
      left:"50px",
      justifyContent:"cen5er",
      alignItems:"center",

    },
  view5:{
    flex:"1",
    marginTop:"30px"
  },
  buttonend:{
    width: '100%',
    height:"50px",
    backgroundColor:'#0D5DB6',
    border:"1px solid #1511EB",
    fontSize:'30px',
    color:'white',
    borderRadius:'5px',
  },
});
