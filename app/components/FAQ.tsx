'use client';

import { useState } from "react";
import Button from "./Button";
import { useIsTeamPage } from "../useIsTeamPage";

interface FAQProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isTeamPage = useIsTeamPage();

  return (
    <div className={`transition-colors duration-300`}>
      <Button
        className={`w-full py-2 px-6 flex justify-between rounded-md items-center ${isOpen ? isTeamPage ? 'bg-[#F7BEDD]' : 'bg-[#58377E]' : ''} ${isTeamPage ? 'text-black hover:bg-[#F7BEDD] ' : 'text-white hover:bg-[#58377E]'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <svg 
          className={`w-4 h-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
        >
          <path 
            d="M19 9l-7 7-7-7" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </Button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
        <p className="p-6">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const isTeamPage = useIsTeamPage();
  
  const leftQuestions = [
    {
      question: "What is good about this project?",
      answer: "Nothing... jk. The 10k Squad was created as a place for all the misfits. Everyone deserves to belong and we want to make sure that happens."
    },
    {
      question: "How can I join the community?",
      answer: "Join our Discord server and follow us on Twitter to become part of our vibrant community."
    },
    {
      question: "What are the benefits?",
      answer: "Members gets all the fun and support that they need."
    }
  ];

  const rightQuestions = [
    {
      question: "How do I get whitelisted?",
      answer: "Active community members have a chance to get whitelisted when participating in events."
    },
    {
      question: "What's the roadmap?",
      answer: "Our roadmap currently includes events and community-driven initiatives."
    }
  ];

  return (
    <section className={`relative z-20 py-20 lg:pt-40 px-8 ${isTeamPage ? 'text-black' : 'text-white'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl mb-8 text-left font-adrip ${isTeamPage ? 'text-black' : 'text-white'}`}>Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden">
            {leftQuestions.map((item, index) => (
              <FAQItem 
                key={index}
                question={item.question} 
                answer={item.answer}
              />
            ))}
          </div>
          <div className="rounded-lg overflow-hidden">
            {rightQuestions.map((item, index) => (
              <FAQItem 
                key={index}
                question={item.question} 
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
