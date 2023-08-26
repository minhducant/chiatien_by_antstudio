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
          <Rect width={438} height={132} y={42} fill="#FC2E20" rx={32} />
          <Circle cx={33.943} cy={123.829} r={6.829} fill="#940000" />
          <Circle cx={79} cy={114} r={13} fill="#940000" />
          <Path
            fill="#940000"
            fillRule="evenodd"
            d="M32.551 136.439a1.836 1.836 0 0 0-3.239-.781l-2.702 3.407c-1.851 2.333-4.82 3.437-7.787 3.172a64.548 64.548 0 0 0-22.243 1.904c-34.532 9.114-55.137 44.496-46.023 79.028 9.115 34.531 44.497 55.136 79.028 46.022 34.532-9.114 55.137-44.496 46.023-79.028-5.227-19.801-19.09-35.023-36.478-42.688-2.896-1.277-5.13-3.778-5.75-6.882l-.829-4.154Z"
            clipRule="evenodd"
          />
          <Circle
            cx={21.547}
            cy={91.548}
            r={3.491}
            fill="#940000"
            transform="rotate(-22.09 21.547 91.548)"
          />
        </G>
        <Path
          fill="#940000"
          fillRule="evenodd"
          d="M67.805 67.68a4.256 4.256 0 0 1 1.061-.48C83.012 62.963 93.32 49.846 93.32 34.32 93.32 15.366 77.954 0 59 0 40.045 0 24.68 15.366 24.68 34.32c0 13.503 7.798 25.184 19.136 30.787.013.006.007.026-.007.025a.013.013 0 0 0-.013.016l3.108 9.842c.79 2.505 3.74 3.58 5.957 2.173l14.944-9.484Z"
          clipRule="evenodd"
        />
        <Path
          fill="#fff"
          d="M68.813 27.638a2.121 2.121 0 0 0 0-3l-.451-.452a2.121 2.121 0 0 0-3 0L59 30.55l-6.362-6.363a2.121 2.121 0 0 0-3 0l-.451.452a2.121 2.121 0 0 0 0 3L55.549 34l-6.362 6.362a2.121 2.121 0 0 0 0 3l.451.451a2.121 2.121 0 0 0 3 0L59 37.451l6.362 6.362a2.121 2.121 0 0 0 3 0l.451-.451a2.121 2.121 0 0 0 0-3L62.451 34l6.362-6.362Z"
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
