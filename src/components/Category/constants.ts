import i18next from 'i18next';

export const getCategoryType = () => ({
    completed: i18next.t('completed'),
    urgent: i18next.t('urgent'),
    important: i18next.t('important'),
    later: i18next.t('later'),
    toStudy: i18next.t('to-study'),
});
