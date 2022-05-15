import React , {useContext, useEffect} from 'react';
import Screen from '../components/shared/screen';
import { StyleSheet, FlatList , TouchableOpacity} from 'react-native'
import Card from '../components/shared/Card';
import TopLearnContext from './../contexts/TopLearnContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CoursesScreen = ({navigation}) => {
    const context = useContext(TopLearnContext);

    useEffect(()=>{
        const myFunc = async () =>{
            const token = await AsyncStorage.getItem('token');
        }
        myFunc();
    }, [])

    return (
        <Screen style={styles.container}>
            <FlatList
                data = {context.courses}
                keyExtractor = {(course) => course._id.toString()}
                renderItem = {({item}) => (
                    <TouchableOpacity onPress={()=> navigation.navigate('CourseDetails', {course: item})}>
                        <Card
                            title = {item.title}
                            time="15:00:00"
                            price={item.price}
                            image={item.imageUrl}
                            teacher='یونس قربانی'
                        />
                    </TouchableOpacity>
                )}
            />
        </Screen>
    );
}

export default CoursesScreen;
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor : "#f8f4f4"
    }
})