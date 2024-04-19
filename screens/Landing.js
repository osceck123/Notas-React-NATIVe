import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';


const LandingScreen = () => {
  return (
    <View style={styles.container}>
     
      <ScrollView>
    
        <View style={styles.servicesContainer}>
          <Text style={styles.servicesTitle}>Our Services</Text>
          <Text style={styles.servicesDescription}>
            We feel very strong about our skill when it comes to planning, designing, and coding applications. Here is what we love to do!
          </Text>
          <View style={styles.featuresContainer}>
           
          </View>
        </View>
        <View style={styles.sectionContainer}>
        
        </View>
        <View style={styles.enterpriseContainer}>
          <Text style={styles.enterpriseTitle}>Clients We Worked With</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Adjust the background color as needed
  },
  servicesContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  servicesTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  servicesDescription: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  sectionContainer: {
    backgroundColor: '#f3f4f6', // Adjust the background color as needed
    padding: 20,
    marginTop: -32,
  },
  enterpriseContainer: {
    backgroundColor: 'white', // Adjust the background color as needed
    padding: 20,
  },
  enterpriseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default LandingScreen;
