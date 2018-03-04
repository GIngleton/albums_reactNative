import React from 'react';
import { View } from 'react-native';

const Card = props => {
  return (
    <View style={styles.containerStyle}>{props.children}</View>
    // reference to props.children allows the component to render any other components passed into it
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1, // put a border around the component with a pixel width of 1
    borderRadius: 2, // round off any corners of component
    borderColor: '#ddd',
    borderBottomWidth: 0, // no width to bottom of border
    shadowColor: '#000', // gives elevation
    shadowOffset: { width: 0, height: 2 }, // specifies which side shadow should be on
    shadowOpacity: 0.1, // makes it transparent
    shadowRadius: 2, // rounds off the corners of the shadow
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10 // affects spacing in between cards
  }
};

export default Card;
