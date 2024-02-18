import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo, useState } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
 className?: string;
 value?: string;
 onChange?: (value:string) => void;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        type = 'text',
        placeholder,
        onChange,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPostiton] = useState(0);

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPostiton(e.target.value.length);
    };

    return (
        <div
            className={classNames(cls.InputWrapper, {}, [className])}
        >
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder} >`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>

        </div>
    );
});
