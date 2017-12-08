// import a library to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList'

// crate component
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Sepongify'} />
        <AlbumList />
    </View>
);


// Render it to device
AppRegistry.registerComponent('albums2', () => App);
// () => App itu sbnrya function sama returnya, statement baru ES6
