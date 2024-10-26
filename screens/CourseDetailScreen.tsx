import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types'; 

type CourseDetailScreenProps = StackScreenProps<RootStackParamList, 'CourseDetailScreen'>;

export default function CourseDetailScreen({ route }: CourseDetailScreenProps) {
  const { course } = route.params;

  const courseDetails: Record<string, { fee: number; content: string }> = {
    "First Aid": { fee: 1500, content: "Basic life support, CPR, wound care, and emergency response techniques." },
    "Sewing": { fee: 1500, content: "Learn to stitch, alter, and create garments using various fabrics and techniques." },
    "Landscaping": { fee: 1500, content: "Design and maintain gardens, lawns, and outdoor spaces, including plant selection." },
    "Life Skills": { fee: 1500, content: "Essential skills for daily living, including cooking, budgeting, and time management." },
    "Child Minding": { fee: 750, content: "Safety, nutrition, and activities for caring for children." },
    "Cooking": { fee: 750, content: "Basic cooking skills, meal planning, and nutrition for families." },
    "Garden Maintenance": { fee: 750, content: "Learn how to maintain and care for gardens and outdoor plants." },
  };

  
  const details = courseDetails[course];

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.header}>{course}</Text>
        <Text style={styles.text}>Fee: R{details?.fee}</Text>
        <Text style={styles.text}>Content: {details?.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#f5f5f5' 
  },
  box: { 
    backgroundColor: '#FFB6C1', 
    padding: 16,
    borderRadius: 12, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  header: { 
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000', 
  },
  text: { 
    fontSize: 18, 
    color: '#000000', 
    marginVertical: 4, 
  },
});



