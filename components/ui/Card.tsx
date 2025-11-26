import { CardProps } from "@/types";

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-200 ${className}`}>
            {children}
        </div>
    );
};

export default Card