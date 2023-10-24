import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../theme';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/Loading';
import TrendingMovies from '../components/TrendingMovies';
import MovieList from '../components/MovieList';


export default function HomeScreen() {

  const navigation = useNavigation();

  return (
    
    <View className="flex-1 bg-white" >
      <SafeAreaView>
        <View className="flex-row justify-between items-center mx-4 " >
          <Text className="text-neutral-800 text-3xl font-bold  " >
            <Text style={styles.text} >Mv</Text>-App
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Search')} >
            <Text>Ara</Text>
          </TouchableOpacity>
        </View>
        {/* <Loading/> */}

        <TrendingMovies />
        <MovieList />

      </SafeAreaView>
    </View>
    
  )
}

