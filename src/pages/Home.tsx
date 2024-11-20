import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Trophy, Users } from 'lucide-react';

export function Home() {
  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Master Your Coding Skills
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join thousands of developers solving coding challenges, preparing for technical interviews,
            and improving their programming skills.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/problems"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start Coding
            </Link>
            <Link
              to="/register"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Create account <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative rounded-2xl border border-gray-200 bg-white p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              600+ Coding Challenges
            </h3>
            <p className="mt-2 text-base leading-7 text-gray-600">
              Practice with a wide variety of programming problems across different difficulty levels
              and topics.
            </p>
          </div>

          <div className="relative rounded-2xl border border-gray-200 bg-white p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              Competitive Learning
            </h3>
            <p className="mt-2 text-base leading-7 text-gray-600">
              Compete with other developers, track your progress, and climb the global leaderboard.
            </p>
          </div>

          <div className="relative rounded-2xl border border-gray-200 bg-white p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              Active Community
            </h3>
            <p className="mt-2 text-base leading-7 text-gray-600">
              Join a community of passionate developers, share solutions, and learn from others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}