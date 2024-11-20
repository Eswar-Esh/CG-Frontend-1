import React from 'react';
import { Trophy, TrendingUp, Medal } from 'lucide-react';

const topUsers = [
  { id: '1', username: 'alexcoder', solved: 423, rank: 1, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alexcoder' },
  { id: '2', username: 'sarahdev', solved: 398, rank: 2, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarahdev' },
  { id: '3', username: 'mikepro', solved: 367, rank: 3, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mikepro' },
];

const users = [
  { id: '4', username: 'emma_js', solved: 289, rank: 4, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emma_js' },
  { id: '5', username: 'chris123', solved: 276, rank: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=chris123' },
  { id: '6', username: 'davidcode', solved: 254, rank: 6, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=davidcode' },
  { id: '7', username: 'lisa_dev', solved: 243, rank: 7, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lisa_dev' },
  { id: '8', username: 'robert_py', solved: 232, rank: 8, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=robert_py' },
];

export function Leaderboard() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Global Leaderboard</h2>
        <p className="mt-2 text-gray-600">Top performers in our coding community</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {topUsers.map((user, index) => (
          <div
            key={user.id}
            className="relative bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <div className="absolute top-4 left-4">
              {index === 0 ? (
                <Trophy className="h-6 w-6 text-yellow-400" />
              ) : index === 1 ? (
                <Medal className="h-6 w-6 text-gray-400" />
              ) : (
                <Medal className="h-6 w-6 text-amber-600" />
              )}
            </div>
            <img
              src={user.avatar}
              alt={user.username}
              className="w-20 h-20 rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">{user.username}</h3>
            <p className="text-gray-500">Solved: {user.solved}</p>
            <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              Rank #{user.rank}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg font-medium text-gray-900">Top Performers</h3>
        </div>
        <ul className="divide-y divide-gray-200">
          {users.map((user) => (
            <li key={user.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-900">{user.username}</h4>
                    <p className="text-sm text-gray-500">Solved: {user.solved}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm font-medium text-gray-900">Rank #{user.rank}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}