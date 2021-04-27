import { randBetween } from './random';

/**
 * We use HSL because we want colors to have high contract and saturation which is
 * sort of impossible to do with plain old RGB.
 *
 * Generates a random color with a good contrast in HEX format.
 */
export const generateRandomColor = () =>
  hslToRgb(randBetween(0, 1), randBetween(0.5, 0.8), randBetween(0.4, 0.8));

export const generateRandomColorsForVars = (count: number) => {
  const colors: { [name: string]: string } = {};
  for (let i = 0; i < count; i++) {
    colors[`color${i + 1}`] = generateRandomColor();
  }
  return colors;
};

/**
 * Source: https://stackoverflow.com/a/36722579/3720087
 */
const hue2rgb = function hue2rgb(p: number, q: number, t: number) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  },
  toHex = (val: number) => {
    let r = val.toString(16);
    return r.length === 1 ? `0` + r : r;
  };

export const hslToRgb = (h: number, s: number, l: number) => {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s,
    p = 2 * l - q,
    r = hue2rgb(p, q, h + 1 / 3),
    g = hue2rgb(p, q, h),
    b = hue2rgb(p, q, h - 1 / 3);

  return '#' + [r, g, b].map(v => toHex(Math.round(v * 255))).join('');
};

/**
 * Source: https://stackoverflow.com/a/35970186/3720087
 */
export const invertColor = (hex: string) => {
  if (hex.indexOf('#') === 0) hex = hex.slice(1);
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) hex = hex[0]! + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  if (hex.length !== 6) throw new Error('Invalid HEX color.');

  // invert color components
  const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
    g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
    b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
  // pad each with zeros and return
  return '#' + padZero(r) + padZero(g) + padZero(b);
};

function padZero(str: string, len: number = 2) {
  const zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}
