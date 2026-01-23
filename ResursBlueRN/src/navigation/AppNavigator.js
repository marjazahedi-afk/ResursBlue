import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, Platform } from 'react-native';

import PaymentScreen from '../screens/PaymentScreen';
import CreditCardsScreen from '../screens/CreditCardsScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import { colors, borderRadius, shadows } from '../styles/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Custom tab icon component
const TabIcon = ({ icon, focused, label }) => (
  <View style={styles.iconContainer}>
    <View style={[styles.iconWrapper, focused && styles.iconWrapperFocused]}>
      <Text style={[styles.icon, focused && styles.iconFocused]}>{icon}</Text>
    </View>
  </View>
);

// Stack navigators for each tab (for nested navigation)
const PaymentStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="PaymentMain" component={PaymentScreen} />
  </Stack.Navigator>
);

const CreditCardsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="CreditCardsMain" component={CreditCardsScreen} />
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeMain" component={HomeScreen} />
  </Stack.Navigator>
);

const ProductsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ProductsMain" component={ProductsScreen} />
  </Stack.Navigator>
);

// Main tab navigator
const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Payment"
    screenOptions={{
      headerShown: false,
      tabBarStyle: styles.tabBar,
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.textSecondary,
      tabBarLabelStyle: styles.tabLabel,
      tabBarItemStyle: styles.tabItem,
    }}
  >
    <Tab.Screen
      name="Payment"
      component={PaymentStack}
      options={{
        tabBarLabel: 'Payments',
        tabBarIcon: ({ focused }) => (
          <TabIcon icon="💳" focused={focused} label="Payments" />
        ),
      }}
    />
    <Tab.Screen
      name="CreditCards"
      component={CreditCardsStack}
      options={{
        tabBarLabel: 'Credit & Cards',
        tabBarIcon: ({ focused }) => (
          <TabIcon icon="💰" focused={focused} label="Credit & Cards" />
        ),
      }}
    />
    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => (
          <TabIcon icon="🏠" focused={focused} label="Home" />
        ),
      }}
    />
    <Tab.Screen
      name="Products"
      component={ProductsStack}
      options={{
        tabBarLabel: 'Products',
        tabBarIcon: ({ focused }) => (
          <TabIcon icon="📦" focused={focused} label="Products" />
        ),
      }}
    />
  </Tab.Navigator>
);

// Root navigator
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopColor: colors.border,
    borderTopWidth: 1,
    paddingTop: 8,
    paddingBottom: Platform.OS === 'ios' ? 28 : 12,
    height: Platform.OS === 'ios' ? 88 : 68,
    ...shadows.sm,
  },
  tabItem: {
    paddingTop: 4,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '500',
    marginTop: 4,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: 44,
    height: 32,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapperFocused: {
    backgroundColor: colors.primaryLight,
  },
  icon: {
    fontSize: 22,
    opacity: 0.6,
  },
  iconFocused: {
    opacity: 1,
  },
});

export default AppNavigator;
