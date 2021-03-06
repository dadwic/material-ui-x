import * as React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { CellParams } from '@material-ui/x-grid';

const Container = styled.div`
  border: 1px solid #bec3c7;
  position: relative;
  overflow: hidden;

  .progress-bar--value {
    position: absolute;
    line-height: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .progress-bar {
    max-height: 30px;
    min-height: 30px;
    background: #088208a3;
    &.small-filled {
      background: #f44336;
    }
    &.medium-filled {
      background: #efbb5aa3;
    }
    &.major-filled {
      background: #088208a3;
    }
  }
`;

export const ProgressBar: React.FC<{ value: number }> = React.memo(({ value }) => {
  const valueInPercent = value * 100;

  let barColor = valueInPercent < 30 ? 'small-filled' : 'medium-filled';
  barColor = valueInPercent > 70 ? 'major-filled' : barColor;

  return (
    <Container style={{ width: '100%', height: 30 }}>
      <div className="progress-bar--value">{`${valueInPercent.toLocaleString()} %`}</div>
      <div className={clsx('progress-bar', barColor)} style={{ maxWidth: `${valueInPercent}%` }} />
    </Container>
  );
});
ProgressBar.displayName = 'ProgressBar';

export function ProgressRenderer(params: CellParams) {
  return <ProgressBar value={Number(params.value)!} />;
}
