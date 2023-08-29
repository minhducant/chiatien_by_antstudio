import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import normalize from 'react-native-normalize';

function SvgComponent({fill}: any) {
  return (
    <Svg
      width={normalize(28)}
      height={normalize(28)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.341 0 .512 0 .686.015.81.07 1.601.399 2.224.921.133.112.257.236.504.483l5.167 5.167c.247.247.37.37.483.504.522.623.85 1.415.92 2.224.016.174.016.345.016.686 0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22Zm-3.111-3.337C9.393 19 10.096 19 11.5 19v-7c-1.405 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C8 13.393 8 14.096 8 15.5c0 1.404 0 2.107.337 2.611a2 2 0 0 0 .552.552Zm6.222 0C14.607 19 13.904 19 12.5 19v-3H16c-.005 1.079-.043 1.67-.337 2.111a1.999 1.999 0 0 1-.552.552ZM12.5 12c1.405 0 2.107 0 2.611.337.218.146.406.334.552.552.294.44.332 1.032.336 2.111H12.5v-3Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default SvgComponent;
