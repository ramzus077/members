import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import CreateMember from '../screens/CreateMember';
import MemberInfo from '../screens/MemberInfo';
import SearchMember from '../screens/SearchMember';
import theme from '../theme';

export default function MyTabs() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Members = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SearchMember"
          component={SearchMember}
          options={{title: 'Search Member'}}
        />
        <Stack.Screen
          name="MemberInfo"
          component={MemberInfo}
          options={{title: 'Member Info'}}
        />
      </Stack.Navigator>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: (focused: boolean, color: string, size: number) => {
          if (route.name === 'CreateMember') {
            return <TabIcon source={require('../../assets/add.png')} />;
          } else {
            return <TabIcon source={require('../../assets/search.png')} />;
          }
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
        tabBarActiveTintColor: theme.colors.BLACK,
        tabBarInactiveTintColor: theme.colors.GRAY.NORMAL_GRAY,
        tabBarActiveBackgroundColor: theme.colors.GRAY.LIGHT_GRAY,
      })}>
      <Tab.Screen
        name="Members"
        component={Members}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="CreateMember"
        component={CreateMember}
        options={{
          title: 'Create Member',
        }}
      />
    </Tab.Navigator>
  );
}
const TabIcon = styled(Image)`
  margin-top: 5px;
  width: 25px;
  height: 25px;
`;
