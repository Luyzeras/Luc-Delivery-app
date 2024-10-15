import { View,Text , Pressable, Image } from 'react-native';
import{Ionicons} from '@expo/vector-icons'
import {RestaurantProps} from '..'


export  function CardHorizontalRestaurant({restaurant}:{restaurant: RestaurantProps}) {
 return (
  <Pressable className=' flex flex-col rounded-xl relative' onPress={()=>{console.log(`Clicou em ${restaurant.name}`)}}>
  <Image source={{uri:restaurant.image}} className='w-28 h-28 rounded-full '/>
 <View className='justify-center items-center'>
  <Text className='h-8  text-lg'>{restaurant.name}</Text>
 </View>

</Pressable>
  );
}