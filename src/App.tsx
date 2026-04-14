/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, Home, MessageCircle, FlaskConical, Menu, X } from 'lucide-react';
import { chemistryData } from './data/chemistryData';
import Dashboard from './components/Dashboard';
import TopicView from './components/TopicView';
import Chatbot from './components/Chatbot';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-emerald-800 text-white transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 flex flex-col`}>
        <div className="p-4 flex items-center justify-between border-b border-emerald-700">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <FlaskConical className="text-emerald-300" />
            <span>ChemEdu</span>
          </div>
          <button className="lg:hidden text-emerald-300 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${activeTab === 'dashboard' ? 'bg-emerald-700 text-white' : 'text-emerald-100 hover:bg-emerald-700/50'}`}
          >
            <Home size={18} />
            <span className="font-medium">Tổng quan</span>
          </button>
          
          <div className="pt-4 pb-2">
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Chủ đề học tập</p>
          </div>
          
          {chemistryData.map(topic => (
            <button
              key={topic.id}
              onClick={() => setActiveTab(topic.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left ${activeTab === topic.id ? 'bg-emerald-700 text-white' : 'text-emerald-100 hover:bg-emerald-700/50'}`}
            >
              <BookOpen size={18} className="shrink-0" />
              <span className="text-sm font-medium truncate">{topic.title}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <header className="bg-white border-b border-slate-200 p-4 flex items-center justify-between lg:hidden">
          <button onClick={() => setIsSidebarOpen(true)} className="text-slate-500 hover:text-slate-700">
            <Menu size={24} />
          </button>
          <div className="font-bold text-lg text-emerald-800 flex items-center gap-2">
            <FlaskConical size={20} />
            ChemEdu
          </div>
          <div className="w-6"></div> {/* Spacer */}
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-5xl mx-auto pb-24">
            {activeTab === 'dashboard' ? (
              <Dashboard onSelectTopic={setActiveTab} />
            ) : (
              <TopicView topicId={activeTab} />
            )}
          </div>
        </div>
      </main>

      {/* Floating Chat Button */}
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105 z-50"
      >
        {isChatOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chatbot Panel */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 flex flex-col">
          <Chatbot currentTopicId={activeTab !== 'dashboard' ? activeTab : undefined} />
        </div>
      )}
    </div>
  );
}
