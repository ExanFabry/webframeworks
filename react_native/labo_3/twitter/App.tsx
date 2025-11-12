import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from "react";
import { JSX } from 'react';
import { Image } from 'react-native';

export interface Tweet {
    id:        number;
    handle:    string;
    text:      string;
    createdOn: Date;
}

export interface Profile {
    id:     number;
    handle: string;
    name:   string;
    bio:    string;
    avatar: string;
    banner: string;
}


//hide-end
const App = () => {
    const [tweets, setTweets] = useState<Tweet[]>();
    const [profiles, setProfiles] = useState<Profile[]>();

    useEffect(() => {
        const fetchFunction = async() => {
            let result = await fetch("https://my-json-server.typicode.com/similonap/twitter-json-server/tweets");
            let json : Tweet[] = await result.json(); 
            let resultProfiles = await fetch("https://my-json-server.typicode.com/similonap/twitter-json-server/profiles");
            let jsonProfiles : Profile[] = await resultProfiles.json(); 

            setTweets(json);
            setProfiles(jsonProfiles);
        }
        fetchFunction();
    },[]);

    let jsxTweets : JSX.Element[] = [];
    if(tweets !== undefined){
      for (let tweet of tweets) {
        jsxTweets.push(<Text>{tweet.text}</Text>);
      }
    }

    let jsxProfilePictures : JSX.Element[] = [];
    let jsxName : JSX.Element[] = [];
    let jsxHandle : JSX.Element[] = [];
    if(profiles !== undefined){
      for (let profile of profiles) {
        jsxProfilePictures.push(<Image source={{ uri: profile.avatar }} style={{ width: 50, height: 50 }}/>);
        jsxName.push(<Text>{profile.name}</Text>);
        jsxHandle.push(<Text>{profile.handle}</Text>);
      }
    }

    return (
        <View>
          {jsxProfilePictures}
          {jsxName}
          {jsxHandle}
          {jsxTweets}
        </View>
    );
}
//hide-start
export default App;
//hide-end

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
