import { MotiView } from 'moti';
import { Center } from 'native-base';
import { StyleSheet } from 'react-native';
import React from 'react';
import { Easing } from 'react-native-reanimated';

const _size = 60;
const DiagnosisMotion = () => {
  return (
    <Center
      mx={'auto'}
      w={'280px'}
      height={'140px'}
      bg={'blue.600'}
      borderRadius={'2xl'}
    >
      <Center w={'60px'} h={'60px'} bg={'white'} rounded='full' shadow={'10'}>
        {[...Array(5).keys()].map((index) => {
          return (
            <MotiView
              from={{ opacity: 0.6, scale: 1 }}
              animate={{ opacity: 0, scale: 4 }}
              transition={{
                type: 'timing',
                duration: 4000,
                easing: Easing.out(Easing.ease),
                delay: index * 800,
                repeatReverse: false,
                loop: true,
              }}
              key={index}
              style={[StyleSheet.absoluteFillObject, styles.dot]}
            />
          );
        })}
      </Center>
    </Center>
  );
};
const styles = StyleSheet.create({
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: 'white',
  },
});

export default DiagnosisMotion;