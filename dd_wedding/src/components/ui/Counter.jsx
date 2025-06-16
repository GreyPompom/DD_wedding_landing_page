// Counter.js
import React, { forwardRef } from 'react';

const Counter = forwardRef((props, ref) => {
  const { digit1Ref, digit2Ref, digit3Ref } = ref;

  return (
    <div className="counter">
      <div className="digit-1" ref={digit1Ref}>
        <div className="num">0</div>
        <div className="num offset">1</div>
      </div>
      <div className="digit-2" ref={digit2Ref}>
        <div className="num">0</div>
        <div className="num offset">1</div>
        <div className="num">2</div>
        <div className="num">3</div>
        <div className="num">4</div>
        <div className="num">5</div>
        <div className="num">6</div>
        <div className="num">7</div>
        <div className="num">8</div>
        <div className="num">9</div>
        <div className="num">0</div>
      </div>
      <div className="digit-3" ref={digit3Ref}>
        {[...Array(10).keys()].map(num => (
          <div key={`initial-${num}`} className="num">{num}</div>
        ))}
        {[...Array(20).keys()].map(num => (
          <div key={`additional-${num}`} className="num">{num % 10}</div>
        ))}
        <div className="num">0</div>
      </div>
      <div className="digit-4">%</div>
    </div>
  );
});

export default Counter;