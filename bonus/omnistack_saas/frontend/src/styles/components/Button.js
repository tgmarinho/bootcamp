import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    height: 28px;
    font-size: 12px;
  `,

  default: css`
    height: 36px;
    font-size: 14px;
  `,
  big: css`
    height: 44px;
    font-size: 18px;
  `,
};

const colors = {
  default: css`
    background: #7289da;

    &:hover {
      background: #5f73bc;
    }
  `,
  danger: css`
    background: #e04848;

    &:hover {
      background: #a43d3d;
    }
  `,
  gray: css`
    background: #b9bbbe;
    color: #666;

    &:hover {
      background: #999;
    }
  `,
};

const Button = styled.button.attrs({
  type: 'button',
})`
  border-radius: 3px;
  transition: background-color 0.15s ease;
  background: #7289da;
  border: 0;
  color: #fff;
  font-size: 12px;
  padding: 0 10px;
  text-transform: uppercase;
  font-weight: 700;

  ${props => sizes[props.size || 'default']}
  ${props => colors[props.color || 'default']}

  ${props => props.filled === false
    && css`
      background: none;

      &:hover {
        background: none;
        opacity: 0.6;
      }
    `}
`;

export default Button;
