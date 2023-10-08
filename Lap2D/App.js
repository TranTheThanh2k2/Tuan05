import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
          <View style={styles.viewHeader}>
            <View style={styles.viewTop}>
              <Image 
                style={styles.imgTop}
                source={require('./assets/book.png')}
              />
              <View style={styles.contentTop}>
                  <Text style={styles.textcontent}>Nguyên hàm tích phân và ứng dụng </Text>
                  <Text style={styles.textcontent}>Cung cấp bởi Tiki Trading</Text>
                  <View style={styles.price}>
                    <Text style={{color:'red', fontSize:'25px'}}>141.800 đ</Text>
                    <Text style={{color:'gray',textDecoration:"line-through",textDecorationColor:'gray' , fontSize:'18px'}}>141.800 đ</Text>
                  </View>
                  <View style={styles.product}>
                    <View style={styles.cart}>
                      <button style={{fontWeight:'bold',fontSize:'15px'}}>-</button>
                      <Text style={{fontWeight:'bold' ,margin:'7px'}}>1</Text>
                      <button style={{fontWeight:'bold',fontSize:'12px'}}>+</button>
                  </View>
                    <View style={{fontSize:'20px',color:'blue',top:'7px'}}>Mua sau</View>
                  </View>
              </View>
            </View>
            <View style={styles.contentBody}>
              <Text style={{color:'black'}}>Mã giảm giá đã lưu</Text>
              <Text style={{left:'30px',color:'blue'}}> Xem tại đây</Text>
            </View>
            <View style={styles.contentBottom}>
              <View style={styles.discount}>
                <View style={{backgroundColor:'yellow',width:'50px',height:'20px'}}></View>
                <View style={{fontSize:"18px" , lineHeight:"21px" , alignItems:'center' , right:'20px',fontWeight:'bold '}}>Mã giảm giá</View>
              </View>
              <View style={styles.use}>
                <Text style={{fontSize:'20px',lineHeight:'23px', top:'15px' , color:'white',textAlign:'center'}}>Áp dụng</Text>
              </View>
            </View>
          </View>
          <View style={styles.viewBody}> 
            <View style={styles.contentViewBody}>
              <Text style={{fontSize:'14px' , lineHeight:'14px', }}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text> 
              <Text style={{fontSize:'14px' , lineHeight:'14px', color:'blue' ,left:'10px' }}>Nhập tại đây?</Text> 
            </View>    
          </View>
          <View style={styles.viewBody1}>
            <View style={styles.contentCenter}>
            <Text style={{fontSize:"22px",fontWeight:'bold'}}>Tạm tính</Text>
            <Text style={{color:'red', fontSize:"22px", right:'30px' }}>141.800 đ</Text>
            </View>          
          </View>
          <View style={styles.viewFooter}>
              <View style={styles.totalprice}>
                <Text style={{fontSize:"22px", color:'#808080'}}>Thành tiền</Text>
                <Text style={{color:'red', fontSize:"22px", right:'30px'}}>141.800 đ</Text>
              </View>
              <View style={{ left:"13px" , marginTop:'10px'}}>
              <button style={{borderRadius:'5px',backgroundColor:"#E53935" , border:'none', width:'370px', left:'35px' , height:'50px'  , color:"white" , fontSize:'20px'}}>TIẾN HÀNH ĐẶT HÀNG</button>
              </View>
          </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewHeader:{
    flex:3,
    backgroundColor:'white',
    width:'100%'
  },
  viewTop:{
    display: 'flex',
    flexDirection:'row',
    justifyContent:"space-around",
  },
  imgTop:{
    width:'120px',
    height:'150px',
    top: '14px',
  },
  textcontent:{
    fontWeight:'bold',
    fontSize:'12px',
    lineHeight:'15px',
    marginTop:'12px', 
    marginBottom:'6px'
  },
  product:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    margin:'6px',
  },
  cart:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    width:'60px',
    fontWeight:'bold',
  },
  contentBody:{
    display:'flex',
    flexDirection:'row',
    top:'30px',
    left:'17px'
  },  
  contentBottom:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    top:'50px', 
    left:'15px'
  },
  discount:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    textAlign:'center',
    alignItems:"center",
    width:"230px",
    height:'60px',
    border:'1px solid #808080',
    borderRadius:'5px',
  },
  use:{
    width:"100px",
    height:'60px',
    backgroundColor:"#0A5EB7",
    right:'30px',
    alignItems:'center',
    borderRadius:'5px'
  },
   viewBody:{
    flex:0.5,
    backgroundColor:'white',
    width:'100%',
    marginTop:"15px",
    height:'50px',
  },
  contentViewBody:{
    display:'flex',
    flexDirection:'row',
    left:'13px',
    top:"20px",
    fontWeight:'bold',
  },
  viewBody1:{
      flex:0.5,
      backgroundColor:'white',
      width:'100%',
      height:"51px",
      marginTop: "15px",
  },
  contentCenter:{
    left:"13px",
    top:'10px',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  viewFooter:{

      flex:1,
      backgroundColor:'white',
      width:'100%',
      marginTop:'100px',
  },
  totalprice:{
    left:'13px',
    display:"flex",
    flexDirection:'row',
    justifyContent:'space-between'
  },
});
