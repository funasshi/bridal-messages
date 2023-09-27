import { messageMap } from '../Util/messageMap';
import { BounceFadeinSentence } from './BounceFadeinSentence';

export const Message = ({ guestName }: { guestName: string }) => {
  const messageObject = messageMap.get(guestName);
  // guard
  if (!messageObject) return <></>;

  const { message, author } = messageObject;
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
        fontSize: '16px',
        letterSpacing: '0.12em',
        lineHeight: 2,
        backgroundColor: 'rgb(255,255,255,0.4)',
        padding: '8px',
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
