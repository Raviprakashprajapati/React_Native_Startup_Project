import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Snackbar} from 'react-native-paper';
import Entypo from "react-native-vector-icons/Entypo"

const PopUpBar = ({
  visible,
  onTogglePopBar,
  onDismissPopBar,
}: any) => {
  return (
      <Snackbar
        // duration={900}
        visible={visible}
        onDismiss={onDismissPopBar}
        action={{
          label: ``,
          onPress: () => {
            // Do something
          },
          icon(props) {
           return <Entypo name='cross' size={20}  color={"white"}/>
          },
        }}>
        Hey Profile has updated..
      </Snackbar>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default PopUpBar;
