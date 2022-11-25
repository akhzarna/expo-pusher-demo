import {Text, View} from "react-native";
import { useEffect } from "react";

// import {
//     Pusher,
//     PusherMember,
//     PusherChannel,
//     PusherEvent,
//   } from '@pusher/pusher-websocket-react-native';
  
import Pusher from "pusher-js";

export default function MyComponent() {


  // Pusher-JS
  var pusher = new Pusher("bff5058d89d1b8f2490b",{
      cluster:"mt1"
    });
    
    var channel = pusher.subscribe('chat-channel');
    
    channel.bind("message-1590", (data) => {
      console.log('Data is = ', data)
      // add new price into the APPL widget
    });
  
  // const pusher = Pusher.getInstance();

  // pusher.init({
  //   apiKey: "bff5058d89d1b8f2490b",
  //   cluster: "mt1"
  // });
  
  // pusher.connect();
  // Pusher.logToConsole = true;

  // let myChannel = pusher.subscribe({
  //   channelName: "chat-channel",
  //   onEvent: (event: PusherEvent) => {
  //     console.log('onEvent',PusherEvent);
  //   },
  //   onSubscriptionSucceeded:(data:any)=>{
  //     console.log('data',data);
  //   }
  // });

  // console.log('myChannel',myChannel)
    // useEffect(()=>{
    //     console.log('YES Man');
    // });

  return (
    <View>
      <Text> Illyas Type </Text>
    </View>
  )

};
