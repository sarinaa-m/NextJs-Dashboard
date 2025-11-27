export * from './form';

export type Theme = 'light' | 'dark';

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => unknown;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'outline';
    disabled?: boolean;
    className?: string;
    loading: boolean
}

export interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}