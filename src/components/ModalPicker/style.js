'use strict';

import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const PADDING = 8;
const BORDER_RADIUS = 5;
const FONT_SIZE = 14;
const HIGHLIGHT_COLOR = '#666';
const OPTION_CONTAINER_HEIGHT = 400;

export default StyleSheet.create({

    overlayStyle: {
        width: width,
        height: height,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },

    optionContainer: {
        borderRadius: BORDER_RADIUS,
        width: width * 0.7,
        height: OPTION_CONTAINER_HEIGHT,
        backgroundColor: '#fff',
        left: width * 0.15,
        top: (height - OPTION_CONTAINER_HEIGHT) / 2
    },

    cancelContainer: {
        left: width * 0.15,
        top: (height - OPTION_CONTAINER_HEIGHT) / 2 + 10
    },

    selectStyle: {

    },

    selectTextStyle: {
        color: '#666',
        fontSize: FONT_SIZE,
        lineHeight: 30,
    },

    cancelStyle: {
        borderRadius: BORDER_RADIUS,
        width: width * 0.7,
        backgroundColor: '#fff',
        padding: PADDING
    },

    cancelTextStyle: {
        textAlign: 'center',
        color: '#333',
        fontSize: FONT_SIZE
    },

    optionStyle: {
        padding: PADDING,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },

    optionTextStyle: {
        textAlign: 'center',
        fontSize: FONT_SIZE,
        color: HIGHLIGHT_COLOR
    },

    sectionStyle: {
        padding: PADDING * 2,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },

    sectionTextStyle: {
        textAlign: 'center',
        fontSize: FONT_SIZE
    }
});