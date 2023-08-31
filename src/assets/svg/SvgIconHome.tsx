import * as React from 'react';
import {Platform} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import normalize from 'react-native-normalize';

function SvgComponent({fill}: any) {
  return (
    <Svg
      width={Platform.OS === 'android' ? normalize(32) : normalize(28)}
      height={Platform.OS === 'android' ? normalize(32) : normalize(28)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m20.479 7.578-5.386-4.453a4.814 4.814 0 0 0-6.186 0L3.521 7.578C2.551 8.381 2 9.597 2 10.866v6.945C2 20.066 3.734 22 6 22h2a2 2 0 0 0 2-2v-3.252c0-1.268.952-2.19 2-2.19s2 .922 2 2.19V20a2 2 0 0 0 2 2h2c2.266 0 4-1.934 4-4.19v-6.944c0-1.269-.55-2.485-1.521-3.288Z"
        fill={fill}
      />
    </Svg>
  );
}

export default SvgComponent;
