import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    FlatList,

} from "react-native"

import database from "../../config/firebaseconfig.js"
import styles from "./style"

export default function Task() {
    const [Task, setTask ] = useState([])

    useEffect(()=>{
        database.collection("Tasks").onSnapshot((query)=>{
            const list = []
            query.foreach((doc)=>{
                list.push({...doc.data(), id: doc.id })
            })
            setTask(list)
        })
    }, [])

    return(
        <View>
            <Text>Page Tasks</Text>
        </View>
    )

}