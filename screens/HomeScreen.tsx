import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>
          Empowering the Nation provides skill training to enhance employability.
        </Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.header}>Our Mission</Text>
        <Text style={styles.description}>
          We aim to equip individuals with practical skills that will improve their job prospects and empower them to contribute positively to their communities.
        </Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.header}>What We Offer</Text>
        <Text style={styles.description}>
          Our courses cover a wide range of skills, including:
        </Text>
        <Text style={styles.listItem}>- First Aid Training</Text>
        <Text style={styles.listItem}>- Sewing and Textile Skills</Text>
        <Text style={styles.listItem}>- Landscaping and Gardening</Text>
        <Text style={styles.listItem}>- Life Skills Development</Text>
        <Text style={styles.listItem}>- Child Minding Techniques</Text>
        <Text style={styles.listItem}>- Cooking and Nutrition</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.header}>Why Choose Us?</Text>
        <Text style={styles.description}>
          Our experienced instructors provide hands-on training in a supportive environment. By joining our programs, you will:
        </Text>
        <Text style={styles.listItem}>- Gain practical skills that are in demand.</Text>
        <Text style={styles.listItem}>- Increase your confidence and employability.</Text>
        <Text style={styles.listItem}>- Join a community of learners and support one another.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16,
    backgroundColor: '#f5f5f5' 
  },
  box: { 
    backgroundColor: '#FFB6C1', 
    padding: 16,
    borderRadius: 12, 
    marginBottom: 16, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  text: { 
    textAlign: 'center', 
    fontSize: 16,
    color: '#000000', 
  },
  header: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 10,
    color: '#000000', 
  },
  description: { 
    fontSize: 16, 
    marginVertical: 10,
    color: '#000000', 
  },
  listItem: { 
    fontSize: 16, 
    marginLeft: 10, 
    marginVertical: 4,
    color: '#000000', 
  },
});


