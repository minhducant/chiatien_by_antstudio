import SRC from '@assets/images/srcRequire';

export type ImageName = keyof typeof SRC;

export const AppImage = (nameImg: ImageName) => {
  return SRC[nameImg];
};
