import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
 render() {
   return (
     <View>
       <Text style={styles.text1}>
         My favorite video game is Silent Hill.</Text>
         <Text style={styles.text2}>
           I love horror games. I played Silent Hill 1, 2, and 3. It was one of the first games I played on the PS1 so the nostalgia make me more fond of the franchise.
           </Text>
         </View>
);
}
}


const styles = StyleSheet.create({
  text1: {
    backgroundColor: "black",
    color: "cyan",
    textAlign: "center",
    fontSize: 26,
    paddingTop: 5
  },
  text2: {
    backgroundColor: "black",
    color: "cyan",
    textAlign: "center",
  // flex:1,
  //  paddingTop: 30,
    margin: 10,
    fontSize: 18
  //  alignItems: "center",
  //  justifyContent:"center"
  }
})


export default App;
