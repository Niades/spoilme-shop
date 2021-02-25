import styled from "@emotion/styled";
import Skeleton from "@material-ui/lab/Skeleton";

interface OrderTotalProps {
  total: number|undefined,
};

const OrderTotalContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: 'TITLE VALUE';
  margin: 15px 15px;

  > .title {
    grid-area: TITLE;
    align-self: center;
    font-size: 20px;
    font-weight: 500;
  }

  > .value {
    grid-area: VALUE;
    justify-self: end;
    font-size: 20px;

    &.skeleton {
      width: 30%;
    }
  }
`;


const OrderTotal = (props: OrderTotalProps) => {
  const { total } = props;
  const skeleton = total === undefined;
  return (
    <OrderTotalContainer>
      <span className="title" >Total</span>
      {skeleton &&
        <span className="value skeleton">
          <Skeleton variant="text" />
        </span>
      }
      {!skeleton &&
        <span className="value">
          ${total}
        </span>
      }
    </OrderTotalContainer>
  );
};

export {
  OrderTotal,
};