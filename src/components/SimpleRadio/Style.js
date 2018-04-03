var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
} = ReactNative;

var Style = StyleSheet.create({
  radioForm: {
  },

  radioWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 5,
  },
  radio: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 20,
    height: 20,


    alignSelf: 'center',

    borderColor: '#299667',
    borderRadius: 20,
  },

  radioLabel: {
    paddingLeft: 5,
    lineHeight: 20,
    marginRight: 10,
  },

  radioNormal: {
    borderRadius: 5,
  },

  radioActive: {
    width: 20,
    height: 20,
    backgroundColor: '#299667',
  },

  labelWrapStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },

  labelVerticalWrap: {
    flexDirection: 'column',
    paddingLeft: 10,
  },

  labelVertical: {
    paddingLeft: 0,
  },

  formHorizontal: {
    flexDirection: 'row',
  },
});

module.exports = Style;
