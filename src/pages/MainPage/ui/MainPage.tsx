import { BugButton } from 'app/providers/ErrorBoundary';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = ({ ...args }) => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            <BugButton />
            {t('Главная страница')}
            <Input
                onChange={onChange}
                value={value}
                placeholder={t('Введите текст')}
            />
        </div>
    );
};

export default MainPage;
