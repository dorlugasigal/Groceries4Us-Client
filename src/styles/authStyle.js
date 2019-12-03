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
    fontFamily: 'sans-serif-light',
    fontSize: 18,
    width: '85%',
    color: '#fff',
    padding: 15,
    paddingRight: 25,
    paddingLeft: 25
  },
  notValid: {
    paddingLeft: 30,
    alignSelf: 'flex-start',
    color: 'rgb(227,71,36)'
  },
  btnContainer: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    width: '85%',
    paddingTop: 13,
    height: '8%',
    margin: 18,
    borderRadius: 30
  },
  btnText: {
    fontFamily: 'sans-serif',
    color: 'rgb(92,164,247)',
    fontSize: 18
  },
  secondaryButtonContainer: {
    flex: 1,
    height: '5%',
    flexDirection: 'row'
  },
  smallBtnContainer: {
    flex: 1,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff'
  },
  detailsText: {
    fontFamily: 'sans-serif',
    color: '#fff',
    fontSize: 20
  }
});
