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
          <Rect width={438} height={132} y={42} fill="#65ACF0" rx={32} />
          <Circle cx={18} cy={126} r={11} fill="#2A72C3" />
          <Circle cx={77.391} cy={118.391} r={8.391} fill="#2A72C3" />
          <Circle cx={60.5} cy={162.5} r={11.5} fill="#2A72C3" />
          <Circle cx={45.196} cy={104.196} r={4.196} fill="#2A72C3" />
          <Circle cx={22.471} cy={88.098} r={2.098} fill="#2A72C3" />
          <Circle
            cx={31.523}
            cy={228.523}
            r={76.145}
            fill="#2A72C3"
            transform="rotate(-48.151 31.523 228.523)"
          />
        </G>
        <Path
          fill="#2A72C3"
          fillRule="evenodd"
          d="M65.571 68.406a4.261 4.261 0 0 1 1.578-.74C82.17 64.01 93.32 50.467 93.32 34.32 93.32 15.366 77.954 0 59 0S24.68 15.366 24.68 34.32c0 12.698 6.896 23.785 17.147 29.721a4.264 4.264 0 0 1 1.712 1.804l4.742 9.72a4 4 0 0 0 6.02 1.428l11.27-8.587Z"
          clipRule="evenodd"
        />
        <Circle cx={58.821} cy={46.87} r={2.435} fill="#fff" />
        <Path
          fill="#fff"
          d="M63.63 20.432a10.087 10.087 0 0 0-13.46 4.49c-.52 1.028.158 2.188 1.272 2.486l.672.18c1.113.298 2.23-.407 2.94-1.316a5.221 5.221 0 0 1 6.423-1.473 5.217 5.217 0 0 1-.63 9.62c-.804.277-1.02.277-1.847.277h-.696a2.087 2.087 0 0 0-2.087 2.087v3.478c0 1.152.935 2.087 2.087 2.087H59a2.087 2.087 0 0 0 2.087-2.087c0-.51.37-.943.86-1.085a10.088 10.088 0 0 0 1.683-18.745Z"
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
