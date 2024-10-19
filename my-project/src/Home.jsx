import { useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { width, height } = useWindowSize();
  const [backgroundColor, setBackgroundColor] = useState('bg-slate-500');

  const handleGiftClick = () => {
    setBackgroundColor('bg-blue-500'); 
    setTimeout(() => {
      setIsOpen(true);
    }, 300);
  };

  return (
    <div className={`flex justify-center items-center h-screen flex-col ${backgroundColor}`}>
      {isOpen && <Confetti width={width} height={height} />}
      {!isOpen && (  
        <div
          className={`text-5xl cursor-pointer p-5 rounded-lg shadow-lg transition-transform duration-500`}
          onClick={handleGiftClick}
        >
          🎁 Click Me
        </div>
      )}

      {isOpen && (
        <div className="text-center text-2xl text-white mt-4 animate-fadeIn">
          🎉 Happy Birthday Kojo❤️♾ 🎉
          <p>Cheers 🥂 to greatness Love🫶🏽. I'm so greatful to have you</p>
          <button onClick={() => setIsOpen(false)} className="mt-2 p-2 bg-rose-500 rounded">Close</button>
        </div>
      )}
    </div>
  );
}
