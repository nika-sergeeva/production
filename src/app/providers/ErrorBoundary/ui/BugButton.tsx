import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const { t } = useTranslation();

    const [error, setError] = useState(false);

    const errorThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={errorThrow}
            className=""
        >
            {t('Ошибка')}
        </Button>
    );
};
