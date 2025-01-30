'use client';

import { useState } from "react";
import Button from "./Button";

interface FAQProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-purple-700">
      <Button
        className="w-full py-4 px-6 text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </Button>
      <div className={`overflow-hidden transition-all ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
        <p className="p-6">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="py-20 px-8 bg-purple-900 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="rounded-lg overflow-hidden">
          <FAQItem 
            question="What is good about this project?" 
            answer="The 10k Squad was created as a place for all the misfits. Everyone deserves to belong and we want to make sure that happens."
          />
          {/* Add more FAQ items as needed */}
        </div>
      </div>
    </section>
  );
};

export default FAQ;