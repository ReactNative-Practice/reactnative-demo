
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import _ from 'lodash';

/**
 * 从date对象格式化日期为 年/月/日(2018/01/21)
 * 
 * @param {string} Date 
 */
export const formatDateString = (date) => {
    if (date === undefined) {
        return '';
    }

    const year = date.getFullYear();
    const month = parseInt(date.getMonth()) + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
};


export const sub = (base, exponent) => {
    return <View style={{ flexDirection: 'row' }}>
        <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 13, color: '#333' }}>{base}</Text>
        </View>
        <View style={{ alignItems: 'flex-start' }}>
            <Text style={{ fontSize: 8, color: '#333' }}>{exponent}</Text>
        </View>
    </View>
}

export const gender = (genderCode) => {

    return genderCode === 1 ? '男' : '女';

}

/**
 * bmi计算
 * @param {int} weight (kg)
 * @param {int} height (cm)
 */
export const bmi = (weight, height) => {
    height = (height / 100);
    let bmi = weight / (height * height);
    return bmi.toFixed(2);
}

/**
 * 根据出生日期算出年龄
 */
export const getAge = (strBirthday) => {
    var returnAge;
    var strBirthdayArr = strBirthday.split("-");
    var birthYear = strBirthdayArr[0];
    var birthMonth = strBirthdayArr[1];
    var birthDay = strBirthdayArr[2];

    d = new Date();
    var nowYear = d.getFullYear();
    var nowMonth = d.getMonth() + 1;
    var nowDay = d.getDate();

    if (nowYear == birthYear) {
        returnAge = 0;//同年 则为0岁
    } else {
        var ageDiff = nowYear - birthYear; //年之差
        if (ageDiff > 0) {
            if (nowMonth == birthMonth) {
                var dayDiff = nowDay - birthDay;//日之差
                if (dayDiff < 0) {
                    returnAge = ageDiff - 1;
                } else {
                    returnAge = ageDiff;
                }
            }
            else {
                var monthDiff = nowMonth - birthMonth;//月之差
                if (monthDiff < 0) {
                    returnAge = ageDiff - 1;
                } else {
                    returnAge = ageDiff;
                }
            }
        } else {
            returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天
        }
    }

    return returnAge;//返回周岁年龄

}

export const getNowDateTime = () => {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }

    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }

    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();

    return currentdate;
}

/**
 * 检查表单的必填项
 * @param {obj} table 
 * @param {obj} checkKeys 
 */
export const checkTable = (data, checkKeys) => {
    let names = [];
// console.log('checkTable', data);
    _.forEach(checkKeys, (item, key) => {

        if (item.type == 'prefix') {
            let has = false;
            _.forEach(data, (v, k) => {
                if (_.includes(k, key) && v.toString() !== '' && v !== false) {
                    has = true;
                    return false;
                }
            })

            if (has === false) {
                names.push(item.name);
            }
        } else {
            let getData = _.get(data, key)
            if (getData == '' || getData == null) {
                names.push(item.name)
            }
        }

    })

    let result = {
        checked: true,
        names: names
    }
    if (names.length > 0) {
        result.checked = false;
    }

    return result;
}