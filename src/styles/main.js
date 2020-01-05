import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexContainer: {
    flex: 1
  },
  listContainer: {
    flex: 5,
    flexDirection: 'row'
  },
  itemContainer: {
    flex: 1,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },

  itemContainerActive: {
    backgroundColor: 'gray'
  },

  itemContainerNotActive: {
    backgroundColor: 'rgb(92,164,247)'
  }
});
