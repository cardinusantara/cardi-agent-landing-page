import { ui, defaultLang, languages, type LangKey } from './ui';

export function getLangFromUrl(url: URL): LangKey {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as LangKey;
  return defaultLang;
}

export function useTranslations(lang: LangKey) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}

export function useTranslatedPath(lang: LangKey) {
  return function translatePath(path: string, targetLang: LangKey = lang): string {
    const cleanPath = path.replace(/^\/(en|zh)(\/|$)/, '/');
    if (targetLang === defaultLang) {
      return cleanPath;
    }
    return `/${targetLang}${cleanPath.startsWith('/') ? '' : '/'}${cleanPath}`;
  };
}
