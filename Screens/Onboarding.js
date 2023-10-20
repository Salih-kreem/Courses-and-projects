import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import { Text, View, Image, StyleSheet } from 'react-native';
import data from '../assets/Data/Data'
import colors from '../assets/Colors/Colors'
// import Icon from 'react-native-vector-icons/FontAwesome';






const renderPrevButton = () => {
  return (
    <View style={styles.prevButton}>
      <Text style={{fontSize: 18, color: 'grey'}}>Back</Text>
    </View>
  )
}

const renderSkipButton = () => {
  return (
    <View style={styles.skipButton}>
      <Text style={{fontSize: 18, color: 'grey'}}>Skip</Text>
      
    </View>
  )
}

const renderNextButton = () => {
  return (
    <View style={styles.nextButton}>
      <Text style={{fontSize: 20, color: colors.praimery}}>Next</Text>
    </View>
  )
}

const renderDoneButton = () => {
  return (
    <View style={styles.doneButton}>
      <Text style={{fontSize: 20, color: colors.white}}>Get Started</Text>
    </View>
  )
}

export default function Onboarding() {


 const RenderItem =({item, index}) => {
    return(
            <View key={index} style={styles.container}>
                <Image style={styles.image} source={item.image}/>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subTitle}>{item.subTitle}</Text>
            </View>
    );
 }

 const keyExtractor = (item, index) => index; 
 
  return (
 <AppIntroSlider 
   data={data}
   keyExtractor={keyExtractor}
   renderItem={RenderItem}
   renderPrevButton={renderPrevButton}
   renderSkipButton={renderSkipButton}
   renderNextButton={renderNextButton}
   renderDoneButton={renderDoneButton}
   showPrevButton={true}
   showSkipButton={true}
   showNextButton={true}
   showDoneButton={true}
   bottomButton={true}
   dotStyle={styles.dot}
   dotClickEnabled={true}
   activeDotStyle={styles.activeDot}
 />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     justifyContent: 'start',
      alignItems: 'center',
       marginTop: 100
  },

  image: {
     width: 300,
     height: 300
  },

  title: {
     fontSize: 32,
     textAlign: 'center',
     width: 250,
     fontWeight: 'bold',
     marginBottom: 16,
     marginTop: 30
  },

  subTitle: {
   fontSize: 16,
   width: 350,
   textAlign: 'center'
  },

  prevButton: {
   height: 50,
   position: 'absolute',
   top: -800,
   justifyContent: 'center', 
   alignItems: 'center', 
   marginTop: 15, 
   borderRadius: 5,
   
   
},

skipButton: {
  height: 50, 
  flexDirection: 'row',
  justifyContent: 'center', 
  position: 'absolute', 
  top: -800, 
  right: 0, 
  alignItems: 'center',  
  marginTop: 15,

 
  
  
},

nextButton: {
  height: 50, 
  justifyContent: 'center', 
  alignItems: 'center', 
  backgroundColor: 'transparent', 
  borderRadius: 5,
  borderColor: colors.praimery,
  borderWidth: 1,
  marginBottom: 50,
},

doneButton: {
  height: 50, 
  justifyContent: 'center', 
  alignItems:'center', 
  backgroundColor: colors.praimery, 
  borderRadius: 5,
  marginBottom: 50
  
},

dot: {

  backgroundColor: colors.sec,
  marginBottom: 100,
  
},

activeDot: {
  marginBottom: 100,
  width: 30, 
  backgroundColor: colors.praimery
}


})