import React from 'react';
import { messageMap } from '../Util/messageMap';
import { BounceFadeinSentence } from './BounceFadeinSentence';
function countNewlines(inputString: string): number {
  const newlineRegex = /\n/g;
  const matches = inputString.match(newlineRegex);
  return matches ? matches.length : 0;
}

export const Message = ({ guestName }: { guestName: string }) => {
  const messageObjectList =
    messageMap.get(guestName) || messageMap.get('default');
  // guard
  const messageLengths = messageObjectList!.map(
    (messageObject, index) =>
      messageObject.message.length - countNewlines(messageObject.message),
  );
  const messageLengthCul = [0];
  messageLengths.forEach((messageLength, _) => {
    messageLengthCul.push(messageLengthCul.at(-1)! + messageLength + 4);
  });

  if (!messageObjectList) return <></>;
  return (
    <>
      {messageObjectList.map((messageObject, messageIndex) => {
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
            key={messageIndex}
            style={{
              maxWidth: '400px',
              margin: '0 auto 20px auto',
              fontFamily: 'Kiwi Maru',
              fontSize: '16px',
              letterSpacing: '0.12em',
              lineHeight: 2,
              backgroundColor: 'rgb(255,255,255,0.4)',
              padding: '8px',
            }}
          >
            {messageSentences.map((sentence, sentenceIndex) => {
              // 折り返しを行う
              const wrappedSentences = sentence
                .split(/(.{16})/)
                .filter(Boolean); // 16文字で折り返し
              const wrappedSentenceLengths = wrappedSentences.map(
                (sentence, sentenceIndex) => sentence.length,
              );

              const wrappedSentenceLengthCul = [0];
              wrappedSentenceLengths.forEach((sentenceLength, _) => {
                wrappedSentenceLengthCul.push(
                  wrappedSentenceLengthCul.at(-1)! + sentenceLength,
                );
              });

              return (
                <React.Fragment key={sentenceIndex}>
                  {wrappedSentences.map((wrappedSentence, index) => {
                    return (
                      <p
                        key={index}
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
                          sentence={wrappedSentence}
                          baseTime={
                            messageLengthCul[messageIndex] +
                            sentenceLengthCul[sentenceIndex] +
                            wrappedSentenceLengthCul[index]
                          }
                        />
                      </p>
                    );
                  })}
                </React.Fragment>
              );
            })}
            <p style={{ textAlign: 'right', marginTop: '5px' }}>
              <BounceFadeinSentence
                sentence={author + 'より'}
                baseTime={
                  messageLengthCul[messageIndex] + sentenceLengthCul.at(-1)!
                }
              />
            </p>
          </div>
        );
      })}
    </>
  );
};
