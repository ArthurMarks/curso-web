import { View } from 'react-native';
// IMPORTING CUSTOM COMPONENT
import ComponentScreen from './src/screens/ComponentScreen';
import LessonComponent from './src/screens/LessonComponent';
import RandomNumberComponent from './src/screens/RandomNumberComponent';

export default function App() {
  return (
    <View>
      <LessonComponent></LessonComponent>
      <RandomNumberComponent></RandomNumberComponent>
    </View>
  );
}

