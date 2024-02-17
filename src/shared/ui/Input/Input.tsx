import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

interface InputProps {
 className?: string;
}

export const Input = ({ className }: InputProps) => (
    <div className={classNames(cls.Input, {}, [className])} />
);
