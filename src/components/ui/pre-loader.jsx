import { useEffect, useState } from 'react';

const PreLoader = ({ isExiting }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3800; 
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
        <div className="ui-text text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:pt-7">
          Ahmed Abo-Raya&apos;s Portfolio
          <div className="ui-dot"></div>
          <div className="ui-dot"></div>
          <div className="ui-dot"></div>
        </div>
        <div 
          className="h-1 md:mt-3 bg-gray-600 rounded-full overflow-hidden"
          style={{ width: '100%' }}
        >
          <div 
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      

    </div>
  );
};

export default PreLoader;