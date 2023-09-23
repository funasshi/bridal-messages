export const WelcomeBottomObject = () => {
  return (
    <div
      style={{
        height: '40%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          clipPath: 'polygon(100% 100%, 100% 0%, 60% 20%, 35% 40%, 60% 100%)',
          zIndex: 200,
          display: 'float',
        }}
        className='w-100 h-100'
      ></div>
    </div>
  );
};
