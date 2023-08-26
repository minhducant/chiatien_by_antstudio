import * as React from 'react';
import normalize from 'react-native-normalize';
import Svg, {G, Rect, Circle, Path, Defs, ClipPath} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg
      width={normalize(438 / 1.3)}
      height={normalize(174 / 1.3)}
      fill="none"
      viewBox="0 0 438 174">
      <G clipPath="url(#a)">
        <G clipPath="url(#b)">
          <Rect width={438} height={132} y={42} fill="#F9943B" rx={32} />
          <Circle cx={83} cy={99} r={11} fill="#D05301" />
          <Circle cx={63.205} cy={131.119} r={4.16} fill="#D05301" />
          <Circle cx={11.992} cy={94.773} r={2.773} fill="#D05301" />
          <Path
            fill="#D05301"
            d="M78.87 161.138c31.061 27.819 33.689 75.55 5.87 106.611-27.819 31.06-75.55 33.688-106.61 5.869-31.061-27.819-33.689-75.55-5.87-106.611 13.342-14.897 31.266-23.254 49.733-24.848 4.298-.371 7.842-3.812 7.833-8.126l-.003-1.691c-.004-2.068-1.327-3.854-2.887-5.211-4.48-3.9-4.952-10.693-1.052-15.174s10.693-4.952 15.174-1.052c4.48 3.899 4.952 10.693 1.052 15.174-.332.381-.685.734-1.056 1.057-2.649 2.308-5.48 5.128-5.473 8.642.006 3.646 2.793 6.653 6.38 7.3 13.294 2.395 26.11 8.387 36.91 18.06Z"
          />
        </G>
        <Path
          fill="#D05301"
          fillRule="evenodd"
          d="M59 68.64c18.954 0 34.32-15.366 34.32-34.32S77.955 0 59 0C40.046 0 24.68 15.366 24.68 34.32c0 8.923 3.405 17.05 8.987 23.154.72.787 1.153 1.8 1.153 2.867v12.846c0 2.95 3.083 4.885 5.74 3.602l16.855-8.137a.013.013 0 0 0 0-.023c-.013-.006-.008-.025.006-.025.523.024 1.05.036 1.58.036Z"
          clipRule="evenodd"
        />
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M55.87 36.565a3 3 0 0 0 3 3h.26a3 3 0 0 0 3-3V23.087a3 3 0 0 0-3-3h-.26a3 3 0 0 0-3 3v13.478ZM59 47.913a3.13 3.13 0 1 0 0-6.26 3.13 3.13 0 0 0 0 6.26Z"
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
