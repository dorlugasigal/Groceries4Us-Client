import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textInputContainer: {
    flexDirection: 'row',
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    margin: 18,
    borderRadius: 30,
    fontSize: 15,
    backgroundColor: 'rgba(236,238,239,0.3)'
  },
  icon: {
    paddingLeft: 50
  },
  textInput: {
    fontSize: 18,
    width: '85%',
    color: '#fff',
    padding: 15,
    paddingRight: 25,
    paddingLeft: 25
  },
  valid: {
    color: 'rgb(51,139,36)'
  },
  notValid: {
    color: 'rgb(227,71,36)'
  },
  btnContainer: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    width: '85%',
    height: '10%',
    padding: 16,
    margin: 18,
    borderRadius: 30
  },
  btnText: {
    color: 'rgb(92,164,247)',
    fontSize: 20
  }
});
