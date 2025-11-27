import { GitHubUser } from '@/api/github/types'
import { DashboardProps } from '@/types/dashboard'
import React from 'react'

export const DashboardList: React.FC<DashboardProps> = ({ users }) => {
    return (users?.map((user: GitHubUser, index) => (
        <div key={`${user.name}_${index}`} className="my-2">
            <div className="flex items-center gap-3">
                <img
                    src={user.avatar_url}
                    alt={user.name}
                    className="w-10 h-10 md:w-15 md:h-15  rounded-full border-4 border-blue-500"
                />
                <div>
                    <h3 className="text-sm md:text-xl font-semibold text-gray-900 dark:text-white">
                        {user.name}
                    </h3>
                    <div className='flex truncate items-center'>
                        <p className="text-gray-600 dark:text-gray-400">
                            @{user.login} | 
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mx-1 text-xs">
                            { user.bio || ' No bio available'}
                        </p>
                    </div>

                </div>
            </div>



        </div>
    ))

    )
}