import { createI18n } from 'vue-i18n';
import zh from './zh';
import en from './en';

const i18n = createI18n({
    legacy: false,//使用组合式api
    globalInjection: true,
    warnHtmlMessage: false,
    locale: 'en',
    messages: {
        zh,
        en
    }
});

export default i18n;