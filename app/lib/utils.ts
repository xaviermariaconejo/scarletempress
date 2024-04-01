export const getLangFromPathname = (pathname: string) => {
  const locale = pathname.split('/')[1];
  return locale;
};
