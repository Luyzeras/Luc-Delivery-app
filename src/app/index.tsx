import { Text, View, ScrollView } from "react-native";
import { Header} from "../components/header";
import { Banner} from "../components/banner";
import  Constants from "expo-constants";
import { Search } from "../components/search";
import{Section} from'../components/section';
import{TrendingFoods} from'../components/trending';
import {Restaurants} from '../components/restaurants'
import { RestaurantsVerticalList } from '../components/list';


const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
   <ScrollView style={{flex: 1}} className="bg-slate-200" showsHorizontalScrollIndicator ={false}>
 <View className="w-full px-4" style={{marginTop: statusBarHeight + 8}}>
 <Header/>
<Banner/>
 <Search/>
 </View>
 <Section
 name="Comidas em alta"
 label="veja mais"
 action={()=> console.log('Clicou em veja mais')}
 size='text-lg'/>
 <TrendingFoods/>

 <Section
 name="Famosos no DevFood"
 label="veja todas"
 action={()=> console.log('Clicou em famosos')}
 size='text-xl'/>

 <Restaurants/>

 <Section
 name="Restaurantes"
 label="veja todos"
 action={()=> console.log('Clicou em restaurantes')}
 size='text-xl'/>

<RestaurantsVerticalList/>

 </ScrollView>
  );
}

/* Para rodar o app preciso abrir um cmd que rode um fake api, e outro que rode no emulador seguem as informações para rodar rodar o API server : npx json-server db.json
E também para rodar no emulador, preciso abrir o cmd na pasta do projeto e rodar o comando: npx expo start*/
