export const getCookie = (name: string) => {
  let matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'),
  );
  return matches?.[1] ? decodeURIComponent(matches[1]) : undefined;
};

const defaultOptions = { path: '/', domain: '', samesite: 'strict' };
export const setCookie = (
  name: string,
  value: string,
  options: Partial<typeof defaultOptions> & { expires: Date },
) => {
  const realOptions = { ...defaultOptions, ...options };
  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; secure';

  Object.entries(realOptions).forEach(([key, value]) => {
    updatedCookie += '; ' + key;
    if (value) updatedCookie += '=' + value;
  });

  document.cookie = updatedCookie;
};
