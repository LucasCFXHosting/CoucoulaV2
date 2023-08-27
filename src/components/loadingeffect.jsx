
const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex space-x-2 animate-pulse">
        <div className="w-4 h-4 rounded-full bg-orange-500"></div>
        <div className="w-4 h-4 rounded-full bg-orange-500"></div>
        <div className="w-4 h-4 rounded-full bg-orange-500"></div>
      </div>
    </div>
  );
};

export default Loading;