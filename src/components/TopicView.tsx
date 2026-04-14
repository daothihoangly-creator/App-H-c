import React, { useState } from 'react';
import { chemistryData } from '../data/chemistryData';
import { BookOpen, PenTool, CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface TopicViewProps {
  topicId: string;
}

export default function TopicView({ topicId }: TopicViewProps) {
  const topic = chemistryData.find(t => t.id === topicId);
  const [activeTab, setActiveTab] = useState<'knowledge' | 'practice'>('knowledge');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showFeedback, setShowFeedback] = useState<Record<string, boolean>>({});

  if (!topic) return <div>Topic not found</div>;

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const checkAnswer = (questionId: string) => {
    setShowFeedback(prev => ({ ...prev, [questionId]: true }));
  };

  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-slate-200">
        <h1 className="text-3xl font-bold text-slate-900">{topic.title}</h1>
      </div>

      <div className="flex bg-slate-100 p-1 rounded-xl w-fit">
        <button
          onClick={() => setActiveTab('knowledge')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${activeTab === 'knowledge' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
        >
          <BookOpen size={16} />
          Lý thuyết
        </button>
        <button
          onClick={() => setActiveTab('practice')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${activeTab === 'practice' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
        >
          <PenTool size={16} />
          Luyện tập
        </button>
      </div>

      {activeTab === 'knowledge' && (
        <div className="space-y-6">
          {topic.knowledge.map((k, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-emerald-800 mb-4">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{k.section}</ReactMarkdown>
              </h3>
              <ul className="space-y-3">
                {k.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <div className="leading-relaxed prose prose-sm max-w-none">
                      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{point}</ReactMarkdown>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'practice' && (
        <div className="space-y-8">
          {topic.questions.map((q, idx) => {
            const isAnswered = userAnswers[q.id] !== undefined;
            const isChecked = showFeedback[q.id];
            const isCorrect = userAnswers[q.id] === q.correctAnswer || (q.type === 'short_answer' || q.type === 'essay');

            return (
              <div key={q.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                    {q.type === 'mcq' ? 'Trắc nghiệm' : q.type === 'true_false' ? 'Đúng/Sai' : q.type === 'short_answer' ? 'Tự luận ngắn' : 'Tự luận'}
                  </span>
                  <span className="text-slate-500 text-sm font-medium">Câu {idx + 1}</span>
                </div>
                
                <div className="text-lg font-medium text-slate-900 mb-6 prose prose-lg max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{q.text}</ReactMarkdown>
                </div>

                {(q.type === 'mcq' || q.type === 'true_false') && q.options && (
                  <div className="space-y-3 mb-6">
                    {q.options.map((opt, oIdx) => {
                      const optionValue = q.type === 'mcq' ? opt.charAt(0) : opt;
                      const isSelected = userAnswers[q.id] === optionValue;
                      
                      let btnClass = "w-full text-left p-4 rounded-xl border transition-all ";
                      if (isChecked) {
                        if (optionValue === q.correctAnswer) {
                          btnClass += "bg-emerald-50 border-emerald-500 text-emerald-800";
                        } else if (isSelected) {
                          btnClass += "bg-red-50 border-red-500 text-red-800";
                        } else {
                          btnClass += "border-slate-200 text-slate-500 opacity-50";
                        }
                      } else {
                        btnClass += isSelected ? "bg-emerald-50 border-emerald-500 text-emerald-800" : "border-slate-200 hover:border-emerald-300 text-slate-700";
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={isChecked}
                          onClick={() => handleAnswerSelect(q.id, optionValue)}
                          className={btnClass}
                        >
                          <div className="prose prose-sm max-w-none">
                            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{opt}</ReactMarkdown>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {(q.type === 'short_answer' || q.type === 'essay') && (
                  <div className="mb-6">
                    <textarea
                      disabled={isChecked}
                      value={userAnswers[q.id] || ''}
                      onChange={(e) => handleAnswerSelect(q.id, e.target.value)}
                      placeholder="Nhập câu trả lời của bạn..."
                      className="w-full p-4 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all min-h-[120px] resize-y text-slate-700"
                    />
                  </div>
                )}

                {!isChecked ? (
                  <button
                    onClick={() => checkAnswer(q.id)}
                    disabled={!isAnswered}
                    className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium py-2 px-6 rounded-lg transition-colors"
                  >
                    Kiểm tra đáp án
                  </button>
                ) : (
                  <div className={`p-4 rounded-xl ${isCorrect ? 'bg-emerald-50 border border-emerald-200' : 'bg-blue-50 border border-blue-200'}`}>
                    <div className="flex items-start gap-3">
                      {isCorrect && (q.type === 'mcq' || q.type === 'true_false') ? (
                        <CheckCircle className="text-emerald-600 shrink-0 mt-0.5" size={20} />
                      ) : (q.type === 'mcq' || q.type === 'true_false') ? (
                        <XCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                      ) : (
                        <HelpCircle className="text-blue-500 shrink-0 mt-0.5" size={20} />
                      )}
                      <div>
                        <p className={`font-bold ${isCorrect && (q.type === 'mcq' || q.type === 'true_false') ? 'text-emerald-800' : 'text-slate-800'}`}>
                          {q.type === 'mcq' || q.type === 'true_false' 
                            ? (isCorrect ? 'Chính xác!' : `Chưa chính xác. Đáp án đúng là: ${q.correctAnswer}`)
                            : 'Gợi ý đáp án:'}
                        </p>
                        {(q.type === 'short_answer' || q.type === 'essay') && (
                          <div className="text-slate-700 mt-2 font-medium prose prose-sm max-w-none">
                            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{q.correctAnswer}</ReactMarkdown>
                          </div>
                        )}
                        <div className="text-slate-600 mt-2 text-sm leading-relaxed prose prose-sm max-w-none">
                          <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{q.explanation}</ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
