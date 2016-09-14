import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    TouchableHighlight,
} from 'react-native';




export default class CellItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            disables : true,
        };
    }
    static propTypes = {
        name:PropTypes.string,
        title:PropTypes.string,
        onPress:PropTypes.func,
        rowID:PropTypes.string,
    };
    
    testLog = () => {
        console.log('testLog 1');
        const{dianjishijian,name,rowID} = this.props;
        dianjishijian(name);
    }

    render() {
        const{name,title} = this.props;//解构
        return (
             <TouchableHighlight onPress={this.testLog} disable={this.state.disable}>
                <View style={[styles.button, this.state.disable && styles.disable]}>
                    <Text>{"name is " + this.props.name}</Text>
                    <Text>{"row is  " + this.props.title}</Text>
                    {/** jsx中不能使用if判断，只能使用下面的这样三元表达式来判断 */}
                    {this.props.rowID === '1' ?  <Text style={{display:'none'}}>隐藏行</Text> :  <Text>显示行</Text>}
                 </View>
             </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'green',
    },

    disable : {
        backgroundColor:'gray',
    },
});






