import { StyleSheet, Text, View, ScroolView, TouchableOpacity, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import MovieList from '../components/MovieList';

export default function MovieScreen() {

  const { params: item } = useRoute();
  const navigation = useNavigation();

  console.log('Params', params);

  const { width, height } = useWindowDimensions();

  return (
    <ScroolView className="flex-1 bg-white" >
      <View className="w-full" >
        <SafeAraeView className="flex-row justify-between px-4" >
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <Text>
              Geri
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }} >
            <Text>
              Fav Ekle
            </Text>
          </TouchableOpacity>
        </SafeAraeView>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w185${item.poster_path}`,
            }}
            style={{ width, height: height * 0.55 }}
            className="rounded-3xl"
          />
        </View>
        <View>
          <Text>{item?.title}</Text>
          <Text>{item?.status}</Text>
          <Text>{item?.overwiev}</Text>
          <Text>dafgsegrfsefef</Text>
          <MovieList title={'Similar Moview'} hideSeeAll ={false} data={[]} />
        </View>
      </View>
    </ScroolView>
  )
}

