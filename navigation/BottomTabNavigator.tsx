import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import MessagesScreen from '../screens/MessagesScreen';
import TabOneScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { BottomTabParamList, MessagesTabParamList, ProfileTabParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="MessagesTab"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="MessagesTab"
        component={MessagesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-chatbubbles-outline" color={color} />,
          tabBarLabel: () => null,
        }}
      />
      <BottomTab.Screen
        name="ProfileTab"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person-circle-outline" color={color} />,
          tabBarLabel: () => null,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={25} {...props} />;
}

function HeaderIcon(props: { name: string; color: string }) {
  return <Ionicons size={25} style={{marginRight: 10}} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const MessagesStack = createStackNavigator<MessagesTabParamList>();

function MessagesNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options={{ headerTitle: 'Adventure Chat', headerRight: ({tintColor}) => <HeaderIcon name="ios-create-outline" color={Colors[colorScheme].tint} />  }}
      />
    </MessagesStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileTabParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: 'Profile' }}
      />
    </ProfileStack.Navigator>
  );
}
