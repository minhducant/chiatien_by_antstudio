import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import normalize from 'react-native-normalize';

function SvgComponent() {
  return (
    <Svg
      width={normalize(25)}
      height={normalize(25)}
      viewBox="0 0 606 606"
      fill="none">
      <Path
        fill="#ffffff"
        d="M152.922 468c0-12-1-14 5-23l92-136-124-151c-21-26 9-67 32-62 50 10 118 145 135 145h2s2-3 3-3l110-156c7-10 22-15 34-15 17 0 32 17 32 34 0 19-8 30-124 198l127 120c7 8 11 20 11 30 0 22-16 36-37 36-9 0-16 1-23-6l-122-113-82 118c-9 12-19 20-33 20-23 0-38-14-38-36Z"
      />
    </Svg>
  );
}

export default SvgComponent;
