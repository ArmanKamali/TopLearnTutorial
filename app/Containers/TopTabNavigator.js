import React, { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Screen from '../components/shared/screen';
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useDispatch } from 'react-redux';
import { NewCoursesScreen, TopCoursesScreen, CoursesScreen } from './../screens'

import LoadingToast from '../components/shared/LoadingToast';
import { getCourses } from './../actions/index';
const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    const dispatch = useDispatch();
    const [spinner, setSpinner] = useState(true)
    useEffect(() => {
        try {
            const fetchData = async () => {
                dispatch(getCourses());
                setSpinner(false)
            }
            fetchData();

        } catch (err) {
            console.log(err)
        }
    }, [])

    return (
    
           
        <Screen>
            <LoadingToast spinner={spinner} text='در حال بارگذاری...'/>
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
    );
}

export default TopTabNavigator;