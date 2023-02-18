import { Ball, BallProps } from "./ball/Ball";
import { useRef } from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import cn from 'classnames';

type Props = {
  maxDeviation?: number
  duration?: number
} & BallProps

type PositionsType = {
  top?: number
  right?: number
  bottom?: number
  left?: number
}

const flipCoin = () => Math.floor(Math.random() * (1 - 0 + 1) + 0);
const setVectorPosition = (flipedCoinValue: number | boolean, movingValue: number) => flipedCoinValue ? undefined : Math.random() * movingValue;

export const MovingBall: React.FC<Props> = ({ maxDeviation = 100, duration = 3000, color, className, zIndex }) => {
  const ballRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<PositionsType>({});

  useLayoutEffect(() => {
    const callback = () => {
      let yPosition = flipCoin();
      let XPosition = flipCoin();
      let movingValue = window.innerWidth < 640 ? (maxDeviation / 2) : maxDeviation;

      setPositions({
        top: setVectorPosition(yPosition, movingValue),
        right: setVectorPosition(XPosition, movingValue),
        bottom: setVectorPosition(!yPosition, movingValue),
        left: setVectorPosition(!XPosition, movingValue),
      });
    };

    let intervalId = setInterval(callback, duration);

    return () => clearInterval(intervalId);
  }, [ballRef.current]);

  return <Ball
    className={cn('transition-all', className)}
    style={{
      transform: `translate3d(${positions.left || positions.right}px, ${positions.top || positions.bottom}px, 0)`,
      transitionDuration: `${duration}ms`,
    }}
    color={color}
    zIndex={zIndex}
    ballRef={ballRef}
  />
};