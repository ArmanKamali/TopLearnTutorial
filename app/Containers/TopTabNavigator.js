import React,{useState, useEffect} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Screen from '../components/shared/screen';
import {RFPercentage} from 'react-native-responsive-fontsize'
import TopLearnContext from '../contexts/TopLearnContext';

import {NewCoursesScreen, TopCoursesScreen, CoursesScreen} from './../screens'
import { fetchCourses } from '../api/courses';
import { ActivityIndicator } from 'react-native'
const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {

    const [getCourses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const fetchData = async () =>{
            const courses = await fetchCourses();
            setCourses(courses);
            setLoading(false);
        }
        fetchData();
    },[])

    return (
        <TopLearnContext.Provider value = {{
            courses : getCourses,
            loading
        }}>
        <Screen>
            
            <TopTab.Navigator
                initialRouteName="AllCourses"
                backBehavior='none'
                screenOptions={{
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'grey',
                    tabBarLabelStyle: {
                        fontFamily: 'ih',
                        fontSize: RFPercentage(1.8),
                    },
                    tabBarStyle: {
                        backgroundColor: '#f8f4f4',

                    }

                }}
            >
                <TopTab.Screen name="AllCourses" component={CoursesScreen}
                    options={{
                        tabBarLabel: 'همه دوره ها'
                    }}
                />
                <TopTab.Screen name="NewCourses" component={NewCoursesScreen}
                    options={{
                        tabBarLabel: 'دوره های جدید'
                    }}
                />
                <TopTab.Screen name="TopCourses" component={TopCoursesScreen}
                    options={{
                        tabBarLabel: 'دوره های محبوب'
                    }}
                />
            </TopTab.Navigator>
            {loading ?  <ActivityIndicator size="large" color = "tomato" animating = {loading} style={{flex:1}}/> : null}

        </Screen>
        </TopLearnContext.Provider >
    );
}

export default TopTabNavigator;