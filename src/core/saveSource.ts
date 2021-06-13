import { getCookie, setCookie } from './cookie';
import { rootDomain } from './config';

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

  if (Object.keys(obj).length)
    setCookie(cookieName, JSON.stringify(obj), {
      domain: rootDomain,
      expires: getExpires(),
    });
};
