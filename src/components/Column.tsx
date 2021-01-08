import React, { useState } from 'react';
import styled from 'styled-components';
import CardItem from './Сard';
import Modal from './Сardportal';
import ModalWrapper from './Modal-wrapper';
import CardCreateForm from './Create-card-form';
import { ICardDenormalized } from '../typescript-stuff/interfaces';

const ColumnWrapper = styled.div`
  margin-bottom: 30px;
  border-radius: 10px;
  background-color: #ececec;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  .column__title {
    display: flex;
    background-color: #7048e8;
    font-size: 18px;
    font-weight: 700;
    top: -35px;
    color: aliceblue;
    padding: 10px;
    height: 45px;
    text-align: center;
    width: 100%;
    border: 0;
    text-transform: uppercase;
  }

  .column__addcard {
    text-align: center;
    margin: 10px;
    border-radius: 5px;
    line-height: 2rem;
    text-transform: uppercase;
    transition-duration: 0.5s;
  }
  .column__addcard:hover {
    background-color: #d0bfff;
    transition-duration: 0.5s;
    cursor: pointer;
  }
`;
const ModalContent = styled.div`
  background-color: aliceblue;
  padding: 20px;
  z-index: 3;
  min-height: 400px;
  min-width: 400px;
  max-width: 50%;
  form {
    display: flex;
    flex-direction: column;
  }
  .window-title {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 1rem;
  }
  .card__title {
    margin: 10px 5px 5px 10px;
  }
  .card__title > input {
    margin: 10px;
    width: 50%;
  }
  .card__body {
    margin: 10px 5px 5px 10px;
    display: flex;
  }
  .card__body > textarea {
    margin-left: 10px;
  }
  .buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }
`;

export interface IColumnProps {
  author: string;
  title: string;
  data: ICardDenormalized[];
}

const Column: React.FC<IColumnProps> = ({ author, title, data }) => {
  type ColumnState = {
    showCreateModal: boolean;
  };

  const [state, setModal] = useState<ColumnState>({ showCreateModal: false });

  function closeModal() {
    setModal({ showCreateModal: false });
  }

  return (
    <ColumnWrapper>
      <textarea
        rows={1}
        spellCheck="false"
        className="column__title"
        defaultValue={title}
      ></textarea>
      {data.map((card: ICardDenormalized) => {
        return <CardItem key={card.id} column={title} card={card}></CardItem>;
      })}
      <div
        className="column__addcard"
        onClick={() => {
          setModal({ showCreateModal: true });
        }}
      >
        Add card
      </div>
      {state.showCreateModal && (
        <Modal>
          <ModalWrapper>
            <ModalContent>
              <CardCreateForm
                column={title}
                author={author}
                close={closeModal}
              />
            </ModalContent>
          </ModalWrapper>
        </Modal>
      )}
    </ColumnWrapper>
  );
};

export default Column;
