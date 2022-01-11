import React, { useState, useCallback } from 'react';
import btnConfig from './config';
import anets from 'anets/dist/Anets.esm.js';
import './index.css';
import pic from '../../assets/pic-f0f0f0.png';

const Main = () => {
  const [cur, setCurrent] = useState(0);

  const clickevent = useCallback((_, key) => {
    setCurrent(key);
  }, []);

  const clickani = useCallback((item) => {
    anets.start(
      {
        item: '#anets',
        ani: {
          cname: item.name,
          name: item.key,
          duration: '2s',
        },
      },
      function () {
        console.log('动画执行完成');
      }
    );
  }, []);

  return (
    <>
      <div id="ani-content">
        <div id="anets">
          <img src={pic} alt="anets" />
        </div>
        <p>--基于 canvas 的动画库</p>
      </div>
      <div className="ani-container">
        <div className="tab-title">
          {btnConfig.map((item, index) => (
            <button
              key={index}
              onClick={clickevent.bind(null, item, index)}
              className={`btn tab-btn ${index === cur ? 'active' : null} `}
            >
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        <Btn
          btn={btnConfig[cur].child}
          callback={(item) => clickani.bind(this, item)}
        />
      </div>
    </>
  );
};

const Btn = ({ btn, callback }) => {
  return (
    <div className="tab-content">
      {btn.map((item, index) => (
        <button
          className="btn ani-btn"
          type="button"
          key={index}
          onClick={callback(item)}
        >
          <span>{item.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Main;
