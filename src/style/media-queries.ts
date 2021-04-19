export const breakpoints = {
  tabletPortraitPx: 600,
  tabletLandscapePx: 900,
  desktopPx: 1200,
  desktopBigPx: 1800,
};

export const forPhoneOnly = `(max-width: ${
  breakpoints.tabletPortraitPx - 1
}px)`;
export const forTabletPortraitUp = `(min-width: ${breakpoints.tabletPortraitPx}px)`;
export const forTabletLandscapeUp = `(min-width: ${breakpoints.tabletLandscapePx}px)`;
export const forDesktopUp = `(min-width: ${breakpoints.desktopPx}px)`;
export const forBigDesktopUp = `(min-width: ${breakpoints.desktopBigPx}px)`;
