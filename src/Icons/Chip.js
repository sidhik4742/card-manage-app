import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Svg, {Path, G} from 'react-native-svg';

const Chip = () => {
  return (
    <View style={styles.chipContainer} >
      <Svg
        id="Capa_1"
        enableBackground="new 0 0 512 512"
        height={50}
        viewBox="0 0 512 512"
        width={50}
        xmlns="http://www.w3.org/2000/svg"
      >
        <G>
          <Path
            d="m444.5 466h-377c-33.137 0-60-26.863-60-60v-300c0-33.137 26.863-60 60-60h377c33.137 0 60 26.863 60 60v300c0 33.137-26.863 60-60 60z"
            fill="#ffeebc"
          />
          <Path d="m474.5 256v75l-60 45v-165z" fill="#ff6737" />
          <Path d="m256 406v-180h188.5v105z" fill="#ff8937" />
          <Path d="m474.5 181v75h-30l-45-120z" fill="#ff8937" />
          <Path d="m444.5 181v75h-188.5v-150z" fill="#ffab37" />
          <Path
            d="m256 406.01c-.18-.01-218.5-75.01-218.5-75.01v-75l218.5-60z"
            fill="#ffab37"
          />
          <Path d="m256 106v150h-218.5v-75z" fill="#ff8937" />
          <Path
            d="m444.5 331-30 105h30c16.54 0 30-13.46 30-30v-75z"
            fill="#ffab37"
          />
          <Path
            d="m444.5 76h-30l30 105h30v-75c0-16.54-13.46-30-30-30z"
            fill="#ffab37"
          />
          <Path
            d="m37.5 331v75c0 16.54 13.46 30 30 30h121l67.5-32.85 67.5 32.85h91c16.54 0 30-13.46 30-30v-75z"
            fill="#ffcd37"
          />
          <Path
            d="m414.5 76h-347c-16.54 0-30 13.46-30 30v75h407v-75c0-16.54-13.46-30-30-30z"
            fill="#ffcd37"
          />
          <Path
            d="m310.43 140.18c8.06-5.76 13.07-14.85 13.07-24.76v-39.42h-135v39.42c0 9.91 5.01 19 13.07 24.76 5.91 4.23 9.7 11.25 9.42 19.14-.43 12.01-10.52 21.4-22.49 21.67v150.02c11.97.27 22.06 9.66 22.49 21.67.28 7.89-3.51 14.91-9.42 19.14-8.06 5.76-13.07 14.85-13.07 24.76v39.42h135v-39.42c0-9.91-5.01-19-13.07-24.76-5.91-4.23-9.7-11.25-9.42-19.14.43-12.01 10.52-21.4 22.49-21.67v-150.02c-11.97-.27-22.06-9.66-22.49-21.67-.28-7.89 3.51-14.91 9.42-19.14z"
            fill="#ffdf7d"
          />
          <Path d="m444.5 38.5h-377c-37.22 0-67.5 30.28-67.5 67.5v300c0 37.22 30.28 67.5 67.5 67.5h377c37.22 0 67.5-30.28 67.5-67.5v-300c0-37.22-30.28-67.5-67.5-67.5zm52.5 367.5c0 28.949-23.551 52.5-52.5 52.5h-377c-28.949 0-52.5-23.551-52.5-52.5v-300c0-28.949 23.551-52.5 52.5-52.5h377c28.949 0 52.5 23.551 52.5 52.5z" />
          <Path d="m444.5 68.5h-377c-20.678 0-37.5 16.822-37.5 37.5v45c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-45c0-12.407 10.093-22.5 22.5-22.5h113.5v31.919c0 12.072 6.059 23.61 16.208 30.865 4.113 2.94 6.461 7.713 6.282 12.769-.284 7.966-7.25 14.446-15.53 14.446h-150.46c-4.142 0-7.5 3.358-7.5 7.5v225c0 20.678 16.822 37.5 37.5 37.5h377c20.678 0 37.5-16.822 37.5-37.5v-299.999c0-20.678-16.822-37.5-37.5-37.5zm22.5 37.5v67.5h-142.96c-8.28 0-15.247-6.48-15.53-14.446-.18-5.056 2.169-9.83 6.282-12.77 10.149-7.254 16.208-18.793 16.208-30.865v-31.919h113.5c12.407 0 22.5 10.093 22.5 22.5zm-135.46 157.5h135.46v60h-135.46zm0-15v-60h135.46v60zm-113.06-88.914c.359-10.097-4.333-19.631-12.549-25.505-6.219-4.445-9.931-11.421-9.931-18.662v-31.919h120v31.919c0 7.241-3.712 14.217-9.931 18.662-8.217 5.874-12.908 15.408-12.549 25.505.477 13.415 10.247 24.722 23.02 27.972v136.882c-12.773 3.25-22.543 14.558-23.02 27.973-.359 10.097 4.333 19.631 12.549 25.505 6.219 4.445 9.931 11.421 9.931 18.662v31.92h-120v-31.919c0-7.241 3.712-14.217 9.931-18.662 8.217-5.874 12.908-15.408 12.549-25.505-.477-13.414-10.247-24.722-23.02-27.972v-136.883c12.774-3.25 22.543-14.558 23.02-27.973zm-38.02 163.914h-135.46v-60h135.46zm0-135v60h-135.46v-60zm-135.46 217.5v-67.5h142.96c8.28 0 15.247 6.48 15.53 14.446.18 5.056-2.169 9.83-6.282 12.77-10.149 7.254-16.208 18.793-16.208 30.865v31.919h-113.5c-12.407 0-22.5-10.093-22.5-22.5zm399.5 22.5h-113.5v-31.919c0-12.072-6.059-23.61-16.208-30.865-4.113-2.94-6.461-7.713-6.282-12.769.283-7.966 7.25-14.446 15.53-14.446h142.96v67.499c0 12.407-10.093 22.5-22.5 22.5z" />
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  chipContainer: {
      marginLeft: 40,
    }
})

export default Chip;
