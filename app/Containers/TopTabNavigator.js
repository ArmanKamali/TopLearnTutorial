import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import CoursesScreen from '../screens/CoursesScreen';
import Screen from '../components/shared/screen';
import NewCoursesScreen from './../screens/NewCoursesScreen';
import TopCoursesScreen from './../screens/TopCoursesScreen';
import {RFPercentage} from 'react-native-responsive-fontsize'
const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    return (
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
    );
}

export default TopTabNavigator;