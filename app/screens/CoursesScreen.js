import React , {useContext} from 'react';
import Screen from '../components/shared/screen';
import { StyleSheet, FlatList , TouchableOpacity, ActivityIndicator} from 'react-native'
import Card from '../components/shared/Card';
import TopLearnContext from './../contexts/TopLearnContext';

const CoursesScreen = ({navigation}) => {
    const context = useContext(TopLearnContext);

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