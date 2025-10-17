import { Typewriter } from "react-simple-typewriter";

const TypewriterText = () => {
  return (
    <h1 className="text-2xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mt-6 mb-6">
      <Typewriter
        words={[
          "Trusted Midman",
          "PC Builder",
          "Tech Support",
          "Buy and Sell Partner",
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={40}
        deleteSpeed={30}
        delaySpeed={1000}
      />
    </h1>
  );
};

export default TypewriterText;
