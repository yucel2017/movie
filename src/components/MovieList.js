import { View, Text, Image, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme'
import { useNavigation } from '@react-navigation/native'


export default function MovieList(data, title, hideSeeAll) {

const navigation = useNavigation();

    return (
        <View className="mb-8 space-y-4" >
            <View className="mx-4 flex-row justify-between items-center" >
                <Text className="text-neutral-900 text-lg" > {title} </Text>
                {hideSeeAll && (
                <TouchableOpacity>
                    <Text style={styles.text} className="text-lg" >Tümünü gör</Text>
                </TouchableOpacity>
                )}
            </View>
            <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: '15' }} 
            showsHorizontalScrollIndicator={false}>
                {data?.map((item) => {
                    return (
                        <TouchableWithoutFeedback onPress={()=>navigation.navigate('movie',item)} >
                            <View className="space-y-1 mr-4" >
                                <Image
                                    source={{
                                        uri: `https://image.tmdb.org/t/p/w185${item.poster_path}`,
                                    }}
                                    style={{width:300,height:200 }}
                                    className="rounded-3xl"
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    );
                })}
            </ScrollView>
        </View>
    );
}