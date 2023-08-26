import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import normalize from 'react-native-normalize';

function SvgComponent() {
  return (
    <Svg
      height={normalize(30)}
      width={normalize(30)}
      viewBox="-145 129 220 256">
      <Path d="M75 316.8c-6 13.3-8.9 19.3-16.6 31-10.8 16.4-26 36.9-44.9 37.1-16.8.2-21.1-10.9-43.8-10.8-22.7.1-27.5 11-44.3 10.8-18.9-.2-33.3-18.7-44.1-35.1-30.2-46-33.4-99.9-14.7-128.6 13.2-20.4 34.1-32.3 53.8-32.3 20 0 32.5 11 49.1 11 16 0 25.8-11 48.9-11 17.5 0 36 9.5 49.2 26-43.3 23.7-36.3 85.4 7.4 101.9zM.8 170.6c8.4-10.8 14.8-26 12.5-41.6-13.7.9-29.8 9.7-39.1 21.1-8.5 10.3-15.5 25.6-12.8 40.5 14.9.5 30.4-8.5 39.4-20z" />
    </Svg>
  );
}

export default SvgComponent;
