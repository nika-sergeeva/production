/* eslint-disable jsx-a11y/control-has-associated-label */
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useState } from 'react';
import { AppRouter } from './providers/router/ined';

import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <button
                onClick={() => setIsOpen(true)}>
                    toggle</button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
