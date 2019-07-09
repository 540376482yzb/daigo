import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';
import { NativeRouter,Switch,Route } from "react-router-native";
import FireBase from '../api_services/firebase'
import FrontPage from './front_page/index.page'
import { Root } from "native-base";

function Main() {

    // useEffect(()=> {
    //     FireBase.auth.onAuthStateChanged(user => {
    //         //TODO:
    //     //    console.log(user.uid)
    //     });
    // },[])
    return (
        <Root>
        <NativeRouter>
        <Switch>
          <Route exact path="/" component={FrontPage}/>
        </Switch>
         </NativeRouter>
        </Root>

    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(Main)
