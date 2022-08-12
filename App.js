import React, {useState} from "react";
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  Pressable,
} from "react-native";

import DiceOne from './assets/images/dice1.png';
import DiceTwo from './assets/images/dice2.png';
import DiceThree from './assets/images/dice3.png';
import DiceFour from './assets/images/dice4.png';
import DiceFive from './assets/images/dice5.png';
import DiceSix from './assets/images/dice6.png';

const App = () =>{

  const [URI, setURI] = useState(DiceOne);
  const [leftURI, setLeftURI] = useState(DiceOne);
  const [rightURI, setRightURI] = useState(DiceOne);
  const [topURI, setTopURI] = useState(DiceOne);
  const [bottomURI, setBottomURI] = useState(DiceFive);

  const playButtonHandler = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber){
      case 1:
        setURI(DiceOne);
        setLeftURI(DiceThree);
        setRightURI(DiceTwo);
        setTopURI(DiceFour);
        setBottomURI(DiceSix);
        break;
      case 2:
        setURI(DiceTwo);
        setLeftURI(DiceFour);
        setRightURI(DiceSix);
        setTopURI(DiceFive);
        setBottomURI(DiceOne);
        break;
      case 3:
        setURI(DiceThree);
        setLeftURI(DiceSix);
        setRightURI(DiceFour);
        setTopURI(DiceFive);
        setBottomURI(DiceOne);
        break;
      case 4:
        setURI(DiceFour);
        setLeftURI(DiceThree);
        setRightURI(DiceTwo);
        setTopURI(DiceFive);
        setBottomURI(DiceOne);
        break;
      case 5:
        setURI(DiceFive);
        setLeftURI(DiceSix);
        setRightURI(DiceFour);
        setTopURI(DiceTwo);
        setBottomURI(DiceThree);
        break;
      case 6:
        setURI(DiceSix);
        setLeftURI(DiceTwo);
        setRightURI(DiceThree);
        setTopURI(DiceFive);
        setBottomURI(DiceOne);
        break;

      default:
        setURI(DiceOne);
        setLeftURI(DiceThree);
        setRightURI(DiceTwo);
        setTopURI(DiceFour);
        setBottomURI(DiceSix);
        break;
    }
  }

  return(
    <>
      <StatusBar backgroundColor="#222831" />
      <View style={styles.container}>
        <Image style={styles.image} source={topURI}></Image>  
        <View style={styles.centerContainer}>
          <Image style={styles.image} source={leftURI}></Image>
          <Pressable onPress={playButtonHandler}>
            <Image style={styles.topImage} source={URI}></Image>
          </Pressable> 
          <Image style={styles.image} source={rightURI}></Image>
        </View>
        <Image style={styles.image} source={bottomURI}></Image>  
      </View>
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#222831",
    alignItems: "center",
    justifyContent: "center",
  },
  centerContainer: {
    flexDirection: "row",
  },
  image:{
    width: 100,
    height: 100,
    margin: 10,
  },
  topImage: {
    width: 125,
    height: 125,
    borderColor: "#30475E",
    borderRadius: 20,
    borderWidth: 3,
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    color: "#F2A365",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: "#30475E",
    borderRadius: 5,
    borderWidth: 3,
    textTransform: "uppercase",
  }
});