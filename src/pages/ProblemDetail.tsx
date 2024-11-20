import React from 'react';
import { useParams } from 'react-router-dom';
import { useProblemsStore } from '../store/useProblemsStore';
import { DifficultyBadge } from '../components/DifficultyBadge';
import { ChatBot } from '../components/ChatBot';
import Editor from '@monaco-editor/react';

export function ProblemDetail() {
  const { id } = useParams();
  const { problems } = useProblemsStore();
  const problem = problems.find(p => p.id === id);

  if (!problem) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">Problem not found</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-5 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">{problem.title}</h2>
            <DifficultyBadge difficulty={problem.difficulty} />
          </div>
        </div>
        <div className="px-6 py-5">
          <div className="prose max-w-none">
            <h3 className="text-lg font-medium text-gray-900">Description</h3>
            <p className="mt-2 text-gray-600">{problem.description}</p>

            <h3 className="mt-6 text-lg font-medium text-gray-900">Examples</h3>
            {problem.examples.map((example, index) => (
              <div key={index} className="mt-4 bg-gray-50 rounded-lg p-4">
                <p className="font-mono text-sm">
                  <strong>Input:</strong> {example.input}
                </p>
                <p className="font-mono text-sm mt-2">
                  <strong>Output:</strong> {example.output}
                </p>
                {example.explanation && (
                  <p className="text-sm mt-2">
                    <strong>Explanation:</strong> {example.explanation}
                  </p>
                )}
              </div>
            ))}

            <h3 className="mt-6 text-lg font-medium text-gray-900">Constraints</h3>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              {problem.constraints.map((constraint, index) => (
                <li key={index} className="font-mono text-sm">{constraint}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-5 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Solution</h2>
            <button
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Submit
            </button>
          </div>
        </div>
        <Editor
          height="70vh"
          defaultLanguage="javascript"
          defaultValue="// Write your solution here"
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            automaticLayout: true,
          }}
        />
      </div>

      <ChatBot problem={problem} />
    </div>
  );
}