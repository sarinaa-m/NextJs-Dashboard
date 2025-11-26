import React from 'react';
import { Mail, User, Moon } from 'lucide-react';
import Card from './ui/Card';

const FeatureCards: React.FC = () => {
  const features = [
    {
      icon: Mail,
      color: 'blue',
      title: 'Form Validation',
      description: 'Native validation with React hooks for reliable form handling'
    },
    {
      icon: User,
      color: 'green',
      title: 'API Integration',
      description: 'Real-time data fetching from public APIs with loading states'
    },
    {
      icon: Moon,
      color: 'purple',
      title: 'Theme Toggle',
      description: 'Dark mode support with persistent theme preference'
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900',
      text: 'text-blue-600 dark:text-blue-400'
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900',
      text: 'text-green-600 dark:text-green-400'
    },
    purple: {
      bg: 'bg-purple-100 dark:bg-purple-900',
      text: 'text-purple-600 dark:text-purple-400'
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        const colors = colorClasses[feature.color as keyof typeof colorClasses];
        
        return (
          <Card key={index} className="text-center">
            <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <Icon className={colors.text} size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {feature.description}
            </p>
          </Card>
        );
      })}
    </div>
  );
};

export default FeatureCards;