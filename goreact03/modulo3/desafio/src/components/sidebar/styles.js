import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;
  width: 30%;
  position: absolute;
  left: 2%;
  top: 3%;
  height: 94%;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  overflow: auto;

  ul {
    margin: 15px;
    list-style: none;
    width: 100%;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0 10px 0;
      border-bottom: 0.5px solid #999;

      div {
        display: flex;

        img {
          border: '5px solid transparent';
          border-color: #9b65e6;
          border-radius: 50px;
          width: 48px;
          height: 48px;
        }

        div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-left: 10px;

          strong {
            font-weight: bold;
          }

          span {
            font-weight: normal;
            font-size: 12px;
            color: #999;
          }
        }
      }

      div {
        display: flex;
        align-items: center;

        i {
          cursor: pointer;
        }

        i.remove {
          color: #f00;
          margin-right: 10px;
        }

        i.show {
          color: #999;
        }
      }
    }
  }
`;
