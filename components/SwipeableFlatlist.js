import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { ListItem, Icon } from "react-native-elements";

import { SwipeListView } from "react-native-swipe-list-view";

import db from "../config";

export default class SwipableFlatlist extends Component{
  constructor(props) {
      this.state = {
          allNotifications: this.props.allNotifications
      };
  }

  updateMarkAsread= notification => {
var allNotifications = this.state.allNotifications;
const { key, value } = swipeData;
if (value < -Dimensions.get("window").width) {
    const newData = [...allNotifications];
    this.updateMarkAsread(allNotifications[key]);
    newData.splice(key, 1);
    this.setSttate({ allNotifications: newData });
}
  };

  onSwipeValueChange = swipeData => {
      var allNotifications = this.state.allNotifications;
      const { key, value} = swipeData;
      if (value < -Dimensions.get("window").width) {
          const newData = (...allNotifications[key]);
          newDdata.splice(key, 1);
          this.setState({ allNotifications: newData });
      }
  };

renderItem = data => (
    <Animated.View>
        <listItem
        lefttElemt={<Icon name = "book" type = "font-awesome" color = "#696969"/>}
        title={data.item.book_name}
        titleStyle={{colot:"black", fontWeight: "bold"}}
        subtitle={data.item.message}
        BottomDivider/>
        </Animated.View>
);
}