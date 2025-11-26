import { GitHubUser } from '@/api/github/types'
import Button from '@/components/ui/Button'
import { DashboardProps } from '@/types/dashboard'
import React from 'react'

export const DashboardList: React.FC<DashboardProps> = ({ users }) => {
    return (users?.map((user: GitHubUser, index) => (
        <div key={`${user.name}_${index}`} className="space-y-4">
            <div className="flex items-center gap-4">
                <img
                    src={user.avatar_url}
                    alt={user.name}
                    className="w-20 h-20 rounded-full border-4 border-blue-500"
                />
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {user.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        @{user.login}
                    </p>
                </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
                {user.bio || 'No bio available'}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {user.public_repos}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Repos</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {user.followers}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Followers</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {user.following}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Following</p>
                </div>
            </div>
        </div>
    ))

    )
}