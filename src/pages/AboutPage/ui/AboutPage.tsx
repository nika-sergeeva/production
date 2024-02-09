import { useTranslation } from 'react-i18next';

const AboutPage = ({ ...args }) => {
    const { t } = useTranslation('about');
    return (
        <div>
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;
