import React from 'react';
import { chemistryData } from '../data/chemistryData';
import { BookOpen, CheckCircle, Award } from 'lucide-react';

interface DashboardProps {
  onSelectTopic: (id: string) => void;
}

export default function Dashboard({ onSelectTopic }: DashboardProps) {
  const totalTopics = chemistryData.length;
  const totalQuestions = chemistryData.reduce((acc, topic) => acc + topic.questions.length, 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Chào mừng đến với ChemEdu!</h1>
        <p className="text-slate-500 mt-2 text-lg">Nền tảng học Hóa học tương tác thông minh.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
            <BookOpen size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Chủ đề học tập</p>
            <p className="text-2xl font-bold text-slate-900">{totalTopics}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
            <CheckCircle size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Câu hỏi luyện tập</p>
            <p className="text-2xl font-bold text-slate-900">{totalQuestions}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
            <Award size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Tiến độ</p>
            <p className="text-2xl font-bold text-slate-900">0%</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">Danh sách chủ đề</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chemistryData.map(topic => (
            <button
              key={topic.id}
              onClick={() => onSelectTopic(topic.id)}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-emerald-300 hover:shadow-md transition-all text-left group"
            >
              <h3 className="font-bold text-lg text-slate-800 group-hover:text-emerald-600 transition-colors">{topic.title}</h3>
              <p className="text-sm text-slate-500 mt-2">{topic.knowledge.length} phần lý thuyết • {topic.questions.length} câu hỏi</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
