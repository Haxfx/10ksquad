interface NewsCardProps {
    title: string;
    description: string;
    buttonText: string;
    onClick: () => void;
  }
  
  const NewsCard = ({ title, description, buttonText, onClick }: NewsCardProps) => {
    return (
      <div className="bg-purple-800 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-purple-200 mb-4">{description}</p>
        <button
          onClick={onClick}
          className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-full transition-colors"
        >
          {buttonText}
        </button>
      </div>
    );
  };
  
  export default NewsCard;