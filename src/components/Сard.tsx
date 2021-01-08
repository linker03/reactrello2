import React, { Fragment, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import CardModal from './Сardportal';
import ModalWrapper from './Modal-wrapper';
import CommentItem from './Comment-item';
import Context from '../context';
import { ICard, IComment, IContext } from '../typescript-stuff/interfaces';

const CardWrapper = styled.div`
  padding: 5px;
  margin: 10px 10px;
  /* box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 7px; */
  border: 1px solid gray;
  border-top: 5px solid #7048e8;
  border-bottom: 2px solid gray;
  background-color: white;
  cursor: pointer;
  .card__head {
    text-align: center;
    margin-bottom: 15px;
    text-transform: uppercase;
  }
  .card__body {
    overflow: hidden;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -moz-box-orient: vertical;
    white-space: nowrap;
  }
  .card__author {
    font-style: italic;
  }
`;

const ModalContent = styled.div`
  display: grid;
  grid-template-areas:
    'title close'
    'body body'
    'comment comment'
    'author delete';
  grid-template-rows: 50px 1fr 1fr 50px;
  background-color: aliceblue;
  padding: 20px;
  z-index: 3;
  min-height: 400px;
  min-width: 400px;
  max-width: 50%;
  max-height: 80%;
  overflow: scroll;
  transition-duration: 0.5s;

  textarea {
    background-color: aliceblue;
    border: 0;
    transition-duration: 0.5s;
  }
  textarea:focus {
    background-color: white;
    border: 1px solid purple;
    transition-duration: 0.5s;
  }

  a {
    grid-area: close;
    justify-self: end;
    text-decoration: none;
  }
  .modal-title {
    margin: 5px 0 20px 15px;
    grid-area: title;
    text-transform: capitalize;
    font-size: 28px;
    font-weight: 500;
    height: 40px;
  }
  .modal-body {
    grid-area: body;
    margin: 10px 30px 10px 10px;
  }
  .modal-author {
    font-style: italic;
    grid-area: author;
    align-self: flex-end;
  }
  .modal-delete {
    grid-area: delete;
    align-self: flex-end;
    justify-self: flex-end;
    cursor: pointer;
  }
  .comments {
    grid-area: comment;
  }
`;
const CreateComment = styled.div`
  input {
    margin: 5px;
  }
`;

export interface ICardItemProps {
  card: ICard;
  columnId: number;
}

const CardItem: React.FC<ICardItemProps> = ({ card, columnId }) => {
  type cardState = {
    showModal: boolean;
    comment: string;
    commentsArray: IComment[];
  };

  type cardEditState = {
    id: number;
    title: string;
    body: string;
  };

  const [state, setState] = useState<cardState>({
    showModal: false,
    comment: '',
    commentsArray: [],
  });

  const [cardEdit, setCardEdit] = useState<cardEditState>({
    id: 0,
    title: card.title,
    body: card.body,
  });

  const {
    addComment,
    editCard,
    deleteCard,
    getComment,
    comments,
  } = React.useContext(Context) as IContext;

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setState((state) => ({ ...state, showModal: false }));
    }
  }, []);

  const fillCommentsArray = () => {
    setState((prev) => ({
      ...prev,
      commentsArray: getComment(card.commentsArray),
    }));
    console.log('reload comments', state.commentsArray);
  };

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [state.showModal, escFunction]);

  // useEffect(() => {
  //   fillCommentsArray();
  // });

  const onClickOpenModal = () => {
    setState((state) => ({ ...state, showModal: true }));
  };

  const onClickCloseModal = (event: React.SyntheticEvent) => {
    event.preventDefault();
    editCard(card.id, cardEdit.title, cardEdit.body);
    setState((state) => ({ ...state, showModal: false }));
  };

  const commentInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((state) => ({ ...state, comment: event.target.value }));
  };

  const createComment = () => {
    addComment(card.id, state.comment);
    setState((state) => ({
      ...state,
      comment: '',
    }));
  };

  const endEdit = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setCardEdit((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const delCard = () => {
    deleteCard(columnId, card.id);
    setState((state) => ({ ...state, showModal: false }));
  };

  const comments1 = card.commentsArray.map((key: number) => {
    return <CommentItem comment={comments[key]} cardId={card.id} />;
  });

  return (
    <Fragment>
      <CardWrapper onClick={onClickOpenModal}>
        <div className="card__head">{card.title}</div>
        <div className="card__body">{card.body}</div>
        <div className="card__author">Author:{card.author}</div>
      </CardWrapper>
      {state.showModal && (
        <CardModal>
          <ModalWrapper>
            <ModalContent key={card.id}>
              <textarea
                name="title"
                spellCheck="false"
                className="modal-title"
                onBlur={endEdit}
                defaultValue={card.title}
              ></textarea>
              <a href="" onClick={onClickCloseModal} className="close-icon">
                X
              </a>
              <textarea
                name="body"
                rows={10}
                spellCheck="false"
                className="modal-body"
                onBlur={endEdit}
                defaultValue={card.body}
              ></textarea>
              <div className="comments">
                {comments1}
                <CreateComment>
                  Create comment:
                  <input
                    value={state.comment}
                    type="text"
                    onChange={commentInput}
                  />
                  <button type="button" onClick={createComment}>
                    Create
                  </button>
                </CreateComment>
              </div>
              <div className="modal-author">Author: {card.author}</div>
              <div onClick={delCard} className="modal-delete">
                Delete
              </div>
            </ModalContent>
          </ModalWrapper>
        </CardModal>
      )}
    </Fragment>
  );
};

export default CardItem;
