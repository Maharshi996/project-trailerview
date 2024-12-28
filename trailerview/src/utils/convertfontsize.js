export const DesktopPxToVw = (px) => {
  return `${(px / 1920) * 100}vw`;
};
export const MobilePxToVw = (px) => {
  return `${(px / 640) * 100}vw`;
};
