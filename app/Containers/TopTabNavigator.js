import React, { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Screen from '../components/shared/screen';
import { RFPercentage } from 'react-native-responsive-fontsize'
import TopLearnContext from '../contexts/TopLearnContext';

import { NewCoursesScreen, TopCoursesScreen, CoursesScreen } from './../screens'
import { fetchCourses } from '../api/courses';
import LoadingToast from '../components/shared/LoadingToast';
const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    const [getCourses, setCourses] = useState([]);
    const [spinner, setSpinner] = useState(true)
    useEffect(() => {
        try {
            const fetchData = async () => {
                const courses = await fetchCourses();
                setCourses(courses);
                setSpinner(false)
            }
            fetchData();

        } catch (err) {
            console.log(err)
        }
    }, [])

    return (
        <TopLearnContext.Provider value={{
            courses: getCourses,
        }}>
           
            <LoadingToast spinner={spinner} text='در حال بارگذاری...'/>

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

            </Screen>
        </TopLearnContext.Provider >
    );
}

export default TopTabNavigator;