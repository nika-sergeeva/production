import { useTranslation } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <div>
            {t('new key')}
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;
