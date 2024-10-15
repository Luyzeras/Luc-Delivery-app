import {View, Pressable,Text} from 'react-native'
import {Ionicons, Feather} from '@expo/vector-icons'
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'

export function Header(){
  return(
    <View className=' w-full items-center justify-between flex flex-row'>
      <Pressable className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
        <Ionicons name="menu" size={20} color={"#121212"}/>
      </Pressable>
        <View className='flex flex-col items-center justify-center'>
        <Text> Localização</Text>
        <View className='flex-row items-center justify-center'>
          <Feather name='map-pin' size={14} color='#AD0000'/>
          <Text className='text-lg font-bold text-center text-sms'>São Paulo</Text>
        </View>

        </View>
      <Pressable className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
        <Feather name="bell" size={20} color={"#121212"}/>
      </Pressable>
    </View>
   
  )
}