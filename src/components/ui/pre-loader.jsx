import { useEffect, useState } from 'react';

const PreLoader = ({ isExiting }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 4000; 
    const startTime = performance.now();
    
    const updateProgress = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const newProgress = Math.min((elapsedTime / duration) * 100, 100);
      setProgress(newProgress);
      
      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className={`
      fixed inset-0 flex flex-col justify-center items-center w-full h-screen 
       z-50 transition-all duration-500 ease-in-out
      ${isExiting ? 'transform -translate-y-full' : ''}
    `}>
      <div className="ui-abstergo">
        <div className="abstergo-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="ui-text">
          Ahmed Abo-Raya&apos;s Portfolio
          <div className="ui-dot"></div>
          <div className="ui-dot"></div>
          <div className="ui-dot"></div>
        </div>
      </div>
      
      {/* Progress bar container */}
      <div className="w-full px-4 absolute bottom-14">
        <div 
          className="h-1 bg-gray-600 rounded-full overflow-hidden"
          style={{ width: '100%' }}
        >
          <div 
            className="h-full bg-[#4BDE80] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default PreLoader;