/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

import ImagePickerScene from './jsutils/image.picker';

var imgs = ['http://www.ituring.com.cn/bookcover/1442.796.jpg',
    'http://www.ituring.com.cn/bookcover/1668.553.jpg',
    'http://www.ituring.com.cn/bookcover/1521.260.jpg',
];

export default class PhotoDemo extends Component {
    constructor(props) {
        super(props);
        // 默认 注释的是将函数绑定到当前的对象中
        this.goNext = this.goNext.bind(this);
        this.goPreview = this.goPreview.bind(this);
        this.state = {
            count: 0,
        }
    }

    // 此处默认的this 绑定的是外局变量 随意调用会出错
    goNext() {
        var count = this.state.count;
        count++;

        if (count < imgs.length) {
            this.setState({
                count: count
            });
        }
    }

    // 此处默认的this 绑定的是外局变量 所以调用会出错
    goPreview() {
        var count = this.state.count;
        count--;

        if (count >= 0) {
            this.setState({
                count: count
            });
        }
    }


    render() {
        return (
            <View style={styles.flex}>
                <View style={styles.image}>
                    <Image
                        style={styles.img}
                        source={{uri:imgs[this.state.count]}}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.btns}>
                    <TouchableOpacity onPress={this.goPreview}>
                        <View style={styles.btn}>
                            <Text>上一张</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.goNext}>
                        <View style={styles.btn}>
                            <Text>下一张</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };
}


class Example extends React.Component {
    render() {
        return (
            <ImagePickerScene/>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    image: {
        borderWidth: 1,
        width: 300,
        height: 200,
        borderRadius: 5,
        borderColor: '#CCC',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: 150,
        width: 200,
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    btn: {
        width: 60,
        height: 30,
        borderColor: '#0089FF',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginRight: 20,
    },
    flex: {
        flex: 1,
        alignItems: 'center'
    },
});

AppRegistry.registerComponent('PhotoDemo', () => Example);
