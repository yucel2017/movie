import { View, Text, } from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {styles} from '../theme'

export default function MovieList(data,title,hideSeeAll) {
    return (
        <View className="mb-8 space-y-4" >
            <View className="mx-4 flex-row justify-between items-center" >
                <Text className="text-neutral-900 text-lg" >Filmler</Text>
                <TouchableOpacity>
                    <Text style={styles.text} className="text-lg" >Tümünü gör</Text>
                </TouchableOpacity>
            </View>
             <ScrollView>
                {}
             </ScrollView>
        </View>
    )
}