import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type CoursesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CoursesHome'>;

type Course = {
  name: string;
  fee: number;
};


const sixMonthCourses: Course[] = [
  { name: 'First Aid', fee: 1500 },
  { name: 'Sewing', fee: 1500 },
  { name: 'Landscaping', fee: 1500 },
  { name: 'Life Skills', fee: 1500 },
];


const sixWeekCourses: Course[] = [
  { name: 'Child Minding', fee: 750 },
  { name: 'Cooking', fee: 750 },
  { name: 'Garden Maintenance', fee: 750 },
];

const CoursesScreen: React.FC = () => {
  const navigation = useNavigation<CoursesScreenNavigationProp>();

  const goToCourseDetail = (courseName: string) => {
    navigation.navigate('CourseDetailScreen', { course: courseName });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Six-Month Courses</Text>
      {sixMonthCourses.map((item) => (
        <View key={item.name} style={styles.courseItem}>
          <Text style={styles.courseName}>{item.name}</Text>
          <Text style={styles.courseFee}>Fee: R{item.fee}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => goToCourseDetail(item.name)}
          >
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        </View>
      ))}

      <Text style={styles.header}>Six-Week Courses</Text>
      {sixWeekCourses.map((item) => (
        <View key={item.name} style={styles.courseItem}>
          <Text style={styles.courseName}>{item.name}</Text>
          <Text style={styles.courseFee}>Fee: R{item.fee}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => goToCourseDetail(item.name)}
          >
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5', 
  },
  header: {
    fontSize: 28, 
    fontWeight: 'bold',
    marginBottom: 20, 
    color: '#000000', 
  },
  courseItem: {
    backgroundColor: '#FFB6C1', 
    padding: 20, 
    borderRadius: 12, 
    marginBottom: 16, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  courseName: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#000000', 
  },
  courseFee: {
    fontSize: 18, 
    marginVertical: 4,
    color: '#000000', 
  },
  button: {
    marginTop: 10, 
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#000000', 
    borderRadius: 8, 
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: 16, 
    fontWeight: 'bold',
  },
});

export default CoursesScreen;






