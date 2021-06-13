import { getCookie, setCookie } from './cookie';

type DataSaved = { [param: string]: string };
const cookieName = 'source';

const getExpires = () => {
  const date = new Date();
  date.setDate(date.getDate() + 30);
  return date;
};

export const saveSource = () => {
  const entries: string[][] = [];
  new URLSearchParams(location.search).forEach((value, key) => {
    if (key.startsWith('utm') || key == 'ref') entries.push([key, value]);
  });

  const currentValue = getCookie(cookieName);
  let parsed: DataSaved = {};
  try {
    if (currentValue) parsed = JSON.parse(currentValue);
  } catch (error) {}

  // Merging old values with new values
  const obj: DataSaved = Object.assign(parsed, Object.fromEntries(entries));

  setCookie(cookieName, JSON.stringify(obj), {
    domain: process.env.ROOT_DOMAIN as string,
    expires: getExpires(),
  });
};
