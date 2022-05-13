import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {MyCoursesScreen, CoursesScreen, AccountScreen} from '../screens'
import TopTabNavigator from './TopTabNavigator';
const TabsNavigator = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
            initialRouteName='MyCourses'
            screenOptions={({route}) => ({ 
                headerShown: false,
                tabBarIcon : ({ focused, color , size }) => {
                    let iconName
                    if(route.name === 'Courses'){
                        iconName = focused ? "video" : "school"
                    } else if(route.name === 'Account'){
                        iconName = focused ? "account-circle" : "account-circle-outline"
                    } else if(route.name === 'MyCourses'){
                        iconName = "message-video";
                    }
                    return (
                        <MaterialCommunityIcons name = {iconName} size = {size} color = {color}/>
                    )
                },
                tabBarActiveTintColor : 'tomato',
                tabBarInactiveTintColor : 'grey',
                tabBarActiveBackgroundColor : 'lightcyan',
                tabBarLabelStyle : {
                    fontFamily : 'ih',
                    fontSize : 13,
                }
            })
        }
        >
              <Tab.Screen name="Account" component={AccountScreen}
                options={{
                    tabBarLabel: 'اکانت من'
                }}
            />
            <Tab.Screen name="MyCourses" component={MyCoursesScreen}
                options={{
                    tabBarLabel: 'دوره های من',
                    tabBarBadge : 3,
                    tabBarBadgeStyle : {
                        marginLeft : 10,
                        backgroundColor : 'blue'
                    }
                }}
            />
            <Tab.Screen name="Courses" component={TopTabNavigator}
                options={{
                    tabBarLabel: 'دوره ها'
                }}
            />
          
        </Tab.Navigator>
    )
}
export default TabsNavigator;