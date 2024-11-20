import React from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Award, Book, Code2, Target } from 'lucide-react';

export function Profile() {
  const { user } = useAuthStore();

  if (!user) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">Please login to view your profile</h2>
      </div>
    );
  }

  const stats = [
    { label: 'Problems Solved', value: user.solved, icon: Code2 },
    { label: 'Total Attempted', value: user.attempted, icon: Target },
    { label: 'Global Rank', value: `#${user.rank}`, icon: Award },
  ];

  const recentActivity = [
    { id: 1, problem: 'Two Sum', status: 'Accepted', date: '2 hours ago' },
    { id: 2, problem: 'Add Two Numbers', status: 'Wrong Answer', date: '1 day ago' },
    { id: 3, problem: 'Longest Substring', status: 'Accepted', date: '2 days ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center space-x-5">
            <div className="flex-shrink-0">
              <img
                className="h-20 w-20 rounded-full"
                src={user.avatar}
                alt={user.username}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{user.username}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.label}
                    </dt>
                    <dd className="text-lg font-semibold text-gray-900">
                      {stat.value}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <div className="flex items-center">
            <Book className="h-5 w-5 text-gray-400" />
            <h3 className="ml-2 text-lg font-medium text-gray-900">
              Recent Activity
            </h3>
          </div>
        </div>
        <ul className="divide-y divide-gray-200">
          {recentActivity.map((activity) => (
            <li key={activity.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-indigo-600 truncate">
                  {activity.problem}
                </div>
                <div className="ml-2 flex-shrink-0 flex">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      activity.status === 'Accepted'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {activity.status}
                  </span>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                {activity.date}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}