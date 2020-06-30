// import React, { Component } from "react";
// import { Text, View, Button } from "react-native";
// import { compose, bindActionCreators } from "redux";
// import { withTheme } from "react-native-elements";
// import { updateTheme } from "../store/actions/themeUpdateAction";

// class About extends Component {
//   componentDidMount(props) {
//     console.log("about props", props);
//   }
//   render() {
//     return (
//       <View>
//         <Text> textInComponent </Text>
//         {/* <Button onPress={() => this.props.updateTheme("darkTheme")} /> */}
//       </View>
//     );
//   }
// }

// const mapStateToProps = ({ theme: theme }) => {
//   // const { theme } = state;
//   return { theme };
// };

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       updateTheme,
//     },
//     dispatch
//   );

// export default compose(mapStateToProps)(About);
// export default About;

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const About = () => {
  return (
    <View>
      <Text>About</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
