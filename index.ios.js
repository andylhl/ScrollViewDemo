/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
} from 'react-native';

import CellItem from './ListCellItem.js'

class ScrollViewDemo extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }

   
/**
 * 获取数据
 */
  fetchData(){
      //禁用按钮
      console.log('33');
  }
    /*
    因为renderRow中的方法会自动接受从数据源中的一条数据，因此我们可以通过调用外部方法的方式进行实现
    ，同时只需要在外部方法的参数中传入我们需要从数据源中获取的数据即可
    */
    _renderRow(rowData, sectionID, rowID, highlightRow) {
            return (
                <CellItem  name={rowData} title={sectionID} rowID = {rowID} dianjishijian={(a)=>{alert('自定义点击事件 2' + a)}}></CellItem>
            );
    }

    
   /**
         * cell点击事件
    */
    _pressRow(rowID) {
        alert("hellow" + rowID);
    }

    /**
     * 列表头部
     */
    _renderHead() {
        console.log('_renderheader');
        return (
            <View  style ={{height: 50, backgroundColor:'red'}}>
             <Text style={{backgroundColor:'green',height:50,fontSize:20}}>This is headView</Text>
            </View>
        );
    }

    /**
     * 
     */
    _onChangeVisibleRows(visibleRows, changedRows) {
        console.log('visibleRows is  ' + visibleRows + " changedRows is " + changedRows);
    }
    render() {
        return (
            <View style = {{padding: 22}}>
              <ListView automaticallyAdjustContentInsets = {false}
                dataSource = {this.state.dataSource}
                renderRow = {this._renderRow.bind(this)}
                renderHeader = {this._renderHead}
                renderFooter = {() => {
                    return (<Text style={{backgroundColor:'yellow',height:50}}> this is footer</Text>);
                }}
            // renderHeader={()=><Text style={{backgroundColor:'green',height:50,fontSize:20}}>this is header</Text>}  
                onChangeVisibleRows = {this._onChangeVisibleRows}
                // renderRow={(rowData,sectionID,rowID,highlightRow) => <Text style={{backgroundColor:'red'}}>{'rowData ' + rowData + 'sectionID ' + sectionID + 'rowID ' +rowID}</Text>}
                >
                </ListView> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cellText: {
        color: 'red',
        fontSize: 30,
    },
    separator: {
        height: 1,
        backgroundColor: '#cccccc',
    }
});



AppRegistry.registerComponent('ScrollViewDemo', () => ScrollViewDemo);