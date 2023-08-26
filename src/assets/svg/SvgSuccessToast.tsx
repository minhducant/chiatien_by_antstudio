import * as React from 'react';
import normalize from 'react-native-normalize';
import Svg, {G, Rect, Circle, Path, Defs, ClipPath} from 'react-native-svg';

function SvgComponent({}) {
  return (
    <Svg
      width={normalize(438 / 1.3)}
      height={normalize(174 / 1.3)}
      fill="none"
      viewBox="0 0 438 174">
      <G clipPath="url(#a)">
        <G clipPath="url(#b)">
          <Rect width={438} height={132} y={42} fill="#4EC33D" rx={32} />
          <Circle cx={20.608} cy={108.295} r={9.295} fill="#2C7721" />
          <Circle cx={80.099} cy={146.717} r={3.718} fill="#2C7721" />
          <Path
            fill="#2C7721"
            d="M79.444 110.025c3.053 7.523-.57 16.097-8.093 19.15-.83.337-1.673.593-2.52.771-4.71.991-9.972 2.338-12.493 6.44-2.943 4.788-1.334 11.007 3.012 14.571 8.665 7.107 15.677 16.475 20.033 27.662 13.523 34.729-3.668 73.845-38.397 87.368-34.73 13.523-73.846-3.668-87.369-38.397-13.523-34.729 3.668-73.846 38.397-87.369 15.17-5.906 31.175-5.953 45.52-1.239 5.196 1.708 11.12.09 13.983-4.569l1.065-1.733c2.112-3.436 1.135-7.861-.381-11.598-3.054-7.523.57-16.097 8.093-19.15 7.523-3.053 16.097.57 19.15 8.093Z"
          />
        </G>
        <Path
          fill="#2C7721"
          fillRule="evenodd"
          d="M59 68.64c18.954 0 34.32-15.366 34.32-34.32S77.954 0 59 0C40.045 0 24.68 15.366 24.68 34.32c0 10.673 4.872 20.207 12.512 26.502.013.01.002.03-.013.024a.014.014 0 0 0-.019.014v10.644c0 2.98 3.14 4.913 5.8 3.572l12.012-6.055a4.256 4.256 0 0 1 2.148-.432c.623.034 1.25.051 1.88.051Z"
          clipRule="evenodd"
        />
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M70.301 24.346a2.42 2.42 0 0 1 .452 3.39l-12.01 15.747a2.417 2.417 0 0 1-3.632.242l-7.623-7.644a2.422 2.422 0 1 1 3.43-3.42l5.66 5.676 10.325-13.538a2.42 2.42 0 0 1 3.398-.453Z"
          clipRule="evenodd"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h438v174H0z" />
        </ClipPath>
        <ClipPath id="b">
          <Rect width={438} height={132} y={42} fill="#fff" rx={32} />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default SvgComponent;
