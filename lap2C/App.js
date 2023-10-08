import { StatusBar } from 'expo-status-bar';
import { CheckBox  ,  StyleSheet, Text, View ,TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';

export default function App() {
  const [isChecked,setIsChecked]  = useState(false);
  
  return (
    <LinearGradient 
    style={styles.container}
    colors={["#3B3B98","#C4C4C4"]}
    start={{x:0, y:0.5}}
    end={{x:1,y:0}}
    >
        <View style={styles.view1}>
          <Text style={{width:'181px',height:'64px',top:'59px',left:'80px' , fontSize:'30px' , lineHeight:'29.3px',textAlign:'center',color:'white' , textTransform:'uppercase'}}>
            password generator
          </Text>
          <TextInput style={styles.textinput}></TextInput>
          <View style={styles.viewbody1}>
            <Text style={styles.text1}>Password length</Text>
            <TextInput style={styles.password}></TextInput>
          </View>
          <View style={styles.viewbody1}>
            <Text style={styles.text1}>Include lower case letters</Text>
            <CheckBox style={styles.checkbox} isChecked={isChecked} onClick={() => setIsChecked(!isChecked) }

            />
          </View>
          <View style={styles.viewbody1}>
            <Text style={styles.text1}>Include lower case letters</Text>
            <CheckBox style={styles.checkbox} isChecked={isChecked} onClick={() => setIsChecked(!isChecked) }

            />
          </View>
          <View style={styles.viewbody1}>
            <Text style={styles.text1}>Include lower case letters</Text>
            <CheckBox style={styles.checkbox} isChecked={isChecked} onClick={() => setIsChecked(!isChecked) }

            />
          </View>
          <View style={styles.viewbody1}>
            <Text style={styles.text1}>Include lower case letters</Text>
            <CheckBox style={styles.checkbox} isChecked={isChecked} onClick={() => setIsChecked(!isChecked) }
            />
          </View>
          <button style={{backgroundColor:"#3B3B98" , width:'279px' , height:'55px', color:'white', borderColor:"#3B3B98" , margin:'20px'}}>GENERATE PASSWORD</button>
        </View>
    
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1:{
    backgroundColor:"#23235B",
    width:"322px",
    height:'605px',
    margin:'19px',
    borderRadius:'15px',
  },
  textinput:{
    width:'280px',
    height:'55px',
    marginTop:"100px",
    marginLeft:'20px',
    backgroundColor:'#151537',
  },
  viewbody1:{
    display:"flex",
    flexDirection:'row',
    justifyContent:'space-around',
    margin:'15px'


  },
  text1:{
    color:'white',
    fontSize:'20px',
    lineHeight:'25px',
  },
  password:{
    width:'120px',
    height:'33px',
    backgroundColor:'white'
  },
  checkbox:{
    width:"30px",
    height:"30px"
  },
});