import { BounceFadeinSentence } from './BounceFadeinSentence';

export const Message = () => {
  const message =
    '今日はきてくれてありがとう！！\n卒業後も仲良くしてくれて嬉しい！\nこれからも旅行たくさん行こうね！\n今日はたのしんでいってね♪';
  const author = '京花';
  const messageSentences = message.split('\n');

  // どのくらい遅くするかの計算のために使用
  const sentenceLengths = messageSentences.map(
    (sentence, sentenceIndex) => sentence.length,
  );
  const sentenceLengthCul = [0];
  sentenceLengths.forEach((sentenceLength, _) => {
    sentenceLengthCul.push(sentenceLengthCul.at(-1)! + sentenceLength);
  });

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '0 auto',
        fontFamily: 'Kiwi Maru',
        fontSize: '18px',
        letterSpacing: '0.12em',
        lineHeight: 2,
      }}
    >
      {messageSentences.map((sentence, sentenceIndex) => (
        <p
          key={sentenceIndex}
          style={{
            paddingBottom: '2px',
            paddingTop: '5px',
            textAlign: 'center',
            margin: 0,
            borderBottom: 'solid 1px #8f8484',
            borderBottomStyle: 'dotted',
          }}
        >
          <BounceFadeinSentence
            sentence={sentence}
            baseTime={sentenceLengthCul[sentenceIndex]}
          />
        </p>
      ))}
      <p style={{ textAlign: 'right', marginTop: '5px' }}>
        <BounceFadeinSentence
          sentence={author + 'より'}
          baseTime={sentenceLengthCul.at(-1)}
        />
      </p>
    </div>
  );
};
