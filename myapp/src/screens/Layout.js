/* eslint-disable */

import {StyleSheet, Text, View} from "react-native"

import { Dimensions } from 'react-native';
import React from "react";

const windowWidth = Dimensions.get('window').width;

function Layout() {
  return(
    <View style={styles.wrapper}>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  box: {
    // flex: 1
    height: windowWidth/3,
    width: windowWidth/3
  },
  box1: {
    backgroundColor: "red",
  },
  box2: {
    backgroundColor: "yellow",
    // flex: 10
  },
  box3: {
    backgroundColor: "green"
  }
})

export default Layout;
