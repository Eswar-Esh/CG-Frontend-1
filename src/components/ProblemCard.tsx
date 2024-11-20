import React from 'react';
import { Link } from 'react-router-dom';
import type { Problem } from '../types';
import { DifficultyBadge } from './DifficultyBadge';

interface ProblemCardProps {
  problem: Problem;
}

export function ProblemCard({ problem }: ProblemCardProps) {
  return (
    <Link
      to={`/problems/${problem.id}`}
      className="block hover:bg-gray-50"
    >
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900 truncate">
            {problem.title}
          </h3>
          <DifficultyBadge difficulty={problem.difficulty} />
        </div>
        <div className="mt-2 sm:flex sm:justify-between">
          <div className="sm:flex">
            <p className="flex items-center text-sm text-gray-500">
              Acceptance Rate: {problem.acceptance.toFixed(1)}%
            </p>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
            <p>
              {problem.submissions.toLocaleString()} submissions
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}