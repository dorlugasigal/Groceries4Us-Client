import { StyleSheet } from 'react-native';
import { RotationGestureHandler } from 'react-native-gesture-handler';
import { white } from 'ansi-colors';
export const styles = StyleSheet.create({
  triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 100,
    borderTopWidth: 100,
    borderLeftColor: 'transparent',
    borderTopColor: 'rgba(117,180,66,0.5)',
    zIndex: 1000,
    position: 'absolute',
    right: 0,
    top: 0
  },
  devText: {
    position: 'absolute',
    right: 8,
    top: -80,
    fontSize: 30,
    color: 'white',
    textTransform: 'uppercase',
    transform: [{ rotate: '45deg' }]
  }
});
