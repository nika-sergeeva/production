import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
 className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            {t('ARTICLES PAGE')}
        </div>
    );
};

export default memo(ArticlesPage);
