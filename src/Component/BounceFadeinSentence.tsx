export const BounceFadeinSentence = ({
  sentence,
  baseTime = 0,
}: {
  sentence: string;
  baseTime?: number;
}) => {
  return (
    <>
      {Array.from(sentence).map((char, charIndex) => {
        if (char == ' ') {
          return (
            <span
              key={charIndex}
              style={{ display: 'inline-block', width: '10px' }}
            >
              {' '}
            </span>
          );
        } else {
          return (
            <span
              key={charIndex}
              style={{
                animation: `bounceFadeIn 0.4s forwards ${
                  (baseTime + charIndex) * 0.1
                }s`,
                display: 'inline-block',
                opacity: 0,
              }}
            >
              {char}
            </span>
          );
        }
      })}
    </>
  );
};
