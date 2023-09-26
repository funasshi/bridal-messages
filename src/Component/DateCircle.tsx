export const DateCircle = () => {
  return (
    <div
      style={{
        border: 'solid 1px #807169',
        display: 'inline-block',
        width: '80px',
        height: '80px',
        marginTop: '10px',
      }}
      className='rounded-circle'
    >
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          fontSize: '14px',
          fontFamily: 'Josefin sans',
        }}
        className='h-100 w-100'
      >
        <p className='h-50' style={{ marginTop: 'auto', marginBottom: 0 }}>
          2023/
        </p>
        <p className='h-50' style={{ marginBottom: 'auto', marginTop: 0 }}>
          10/07
        </p>
      </div>
    </div>
  );
};
