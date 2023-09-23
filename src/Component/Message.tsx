export const Message = () => {
  const message =
    '今日はきてくれてありがとう！！\n卒業後も仲良くしてくれて嬉しい！\nこれからも旅行たくさん行こうね！\n今日はたのしんでいってね♪';
  const author = '京花';
  // メッセージを"\n"で分割し、それぞれの行を配列として取得
  const messageLines = message.split('\n');

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
      {/* 各行を個別の<p>タグで描画し、下線を追加 */}
      {messageLines.map((line, index) => (
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
          {line}
        </p>
      ))}
      <p style={{ textAlign: 'right', marginTop: '5px' }}>{author}より</p>
    </div>
  );
};
