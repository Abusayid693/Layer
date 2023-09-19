import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CsvClassification } from "../../scenes/csvClassification";
import { HomePage } from "../../scenes/home";

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackVisible: false,
      }}>
      <Stack.Screen name="HomePageMain" component={HomePage} />
      <Stack.Screen name="HomePageCsvClassification" component={CsvClassification} />
    </Stack.Navigator>
  );
};
