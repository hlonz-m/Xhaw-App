import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TextInput, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';

type Course = {
  name: string;
  fee: number;
};

const calculateDiscount = (numCourses: number): number => {
  if (numCourses === 1) return 0;
  if (numCourses === 2) return 0.05;
  if (numCourses === 3) return 0.1;
  return 0.15;
};

export default function CalculateFeesScreen() {
  const courses: Course[] = [
    { name: 'First Aid', fee: 1500 },
    { name: 'Sewing', fee: 1500 },
    { name: 'Landscaping', fee: 1500 },
    { name: 'Life Skills', fee: 1500 },
    { name: 'Child Minding', fee: 750 },
    { name: 'Cooking', fee: 750 },
    { name: 'Garden Maintenance', fee: 750 },
  ];

  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const toggleCourseSelection = (course: Course) => {
    setSelectedCourses((prevSelectedCourses) => {
      const isAlreadySelected = prevSelectedCourses.some((c) => c.name === course.name);
      if (isAlreadySelected) {
        return prevSelectedCourses.filter((c) => c.name !== course.name);
      } else {
        return [...prevSelectedCourses, course];
      }
    });
  };

  const calculateTotal = () => {
    const totalWithoutDiscount = selectedCourses.reduce((sum, course) => sum + course.fee, 0);
    const discount = calculateDiscount(selectedCourses.length);
    const discountedTotal = totalWithoutDiscount * (1 - discount);
    const totalWithVAT = discountedTotal * 1.15; // 15% VAT applied
    return totalWithVAT.toFixed(2);
  };

  const handleSubmit = () => {
    if (name && phone && email && selectedCourses.length > 0) {
      Alert.alert(
        'Request Submitted',
        `Thank you ${name}, we will contact you at ${phone} or ${email} to complete your booking.`,
        [{ text: 'OK' }]
      );
    } else {
      Alert.alert('Error', 'Please complete all fields and select at least one course.', [{ text: 'OK' }]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.header}>Request a Course Consultant</Text>
        
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Phone:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.header}>Select Courses</Text>
        {courses.map((course) => (
          <CheckBox
            key={course.name}
            title={`${course.name} - R${course.fee}`}
            checked={selectedCourses.some((selected) => selected.name === course.name)}
            onPress={() => toggleCourseSelection(course)}
          />
        ))}

        <View style={styles.buttonContainer}>
          <Button
            title="Calculate Total"
            onPress={() => alert(`Total Fee: R${calculateTotal()}`)}
            color="#1E90FF"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={handleSubmit} color="#32CD32" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
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
    marginBottom: 20,
    color: '#000000',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#000000',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});




