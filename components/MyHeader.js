import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import db from '../config';
import { render } from 'react-dom';


export default class MyHeader extends Component{ 
    constructor(props){
   this.state={
       value:""
   }
    }

    getNumberOfUndreadNotifications(){
        db.collection('all_notifications').where('notification_status','==',"unread")
        .onSnapshot((snapshot)=>{
            var unreadNotificatoions = snapshot.docs.map((doc) => doc.data())
            this.setState({
                value: unreadNotifications.length
            })
        })
    }

    conponentDidMount(){
        this.getNumberOfNotifications()
    }

    BellIconWithBadge=()=>{
        return(
            <View>
                <Icon name='bell' type='font-awsome' color='grey' size={25}
                onPress={()=> this.props.navigaation.navigate('Notifications')}/>
                <Badge
                value={this.state.value}
                containerStyle={{ position:'aboslute,top -4, right -4'}}/>
            </View>
        )
    }

    render(){
        return(
            <Header
            leftComponent={<Icon name='bars' type='font-awesome' color='grey' onPress = {() => this.props.navigation.toggleDrawer()}/>}
            centerComponent={{ text:this.props.title, style:{ color:'#90A5A9',fontSize:20,fontWeight:"Bold",} }}
            rightComponent={<this.BellIconWithBadge {...this.props}/>}
            backgroundColor = "#eaf8fe"
            />
        )
    }
}
   
