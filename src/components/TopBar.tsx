import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  FontAwesome,
  FontAwesome5,
  FontAwesome as FontAwesomeIcon,
  MaterialIcons,
} from '@expo/vector-icons';

function DropdownBar({ text = 'Filter' }) {
  return (
    <TouchableOpacity style={dropdownStyles.container}>
      <Text style={dropdownStyles.text}>{text}</Text>
      <FontAwesomeIcon
        name="caret-down"
        size={16}
        color="#5F6367"
        style={dropdownStyles.icon}
      />
    </TouchableOpacity>
  );
}

export default function TopBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dorm Match</Text>
      <View style={styles.iconBar}>
        <MaterialIcons name="home" size={29} color="#949AA0" />
        <FontAwesome5 name="comments" size={27} color="#B4BBC3" />
        <FontAwesome name="user" size={27} color="#B4BBC3" />
      </View>
      <View style={styles.filters}>
        <DropdownBar text="Gender" />
        <DropdownBar text="Substance..." />
        <DropdownBar text="Guests" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Column layout for stacking icon bars vertically
    backgroundColor: 'white',
    // padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#416499',
    paddingVertical: 10,
  },
  iconBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#E9F3FD',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 5,
    marginTop: 5,
  },
});

const dropdownStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E9F3FD',
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: 120,
  },
  text: {
    fontSize: 11,
    color: '#5F6367',
  },
  icon: {
    marginLeft: 10,
  },
});
