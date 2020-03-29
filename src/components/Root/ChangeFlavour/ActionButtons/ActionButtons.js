import React from "react";
import styled from "styled-components";

import Button from "#root/components/shared/Button";

const ButtonWrapper = styled.div`
  :not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  grid-area: action-buttons;
  padding: 0.75rem 1rem;
`;

const ActionButtons = ({ canCancel, canSave, onCancel: pushCancel }) => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <Button disabled={!canCancel} onClick={() => pushCancel()}>
          Cancel
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button color="primary" disabled={!canSave}>
          Save
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default ActionButtons;
