import React, { useState } from 'react';
import { IParams, ICard, IComment } from './typescript-stuff/interfaces';
import Board from './components/Board';
import Column from './components/Column';
import Context from './context';
import Modal from './components/cardportal';
import ModalWrapper from './components/modal-wrapper';

const App: React.FunctionComponent = () => {
  const [params, setParams] = useState<IParams>({
    onStart: true,
    author: 'ME',
  });

  const [data, setData] = useState<ICard[]>([
    {
      id: 0,
      title: 'card1',
      column: 'todo',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      author: 'ME',
      comments: [
        { id: 0, author: 'ME', text: 'hello, this is comment' },
        { id: 1, author: 'ME', text: 'hello, this is second comment' },
        { id: 2, author: 'ME', text: 'hello, this is third comment' },
        { id: 3, author: 'ME', text: 'hello, this is fourth comment' },
        { id: 4, author: 'ME', text: 'hello, this is fifth comment' },
      ],
    },
    {
      id: 1,
      title: 'card2',
      column: 'todo',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      author: 'ME',
      comments: [{ id: 0, author: 'ME', text: 'hello, this is comment' }],
    },
    {
      id: 2,
      title: 'card3',
      column: 'todo',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      author: 'ME',
      comments: [{ id: 0, author: 'ME', text: 'hello, this is comment' }],
    },
  ]);

  const addCard = (column: string, title: string, body: string) => {
    let newCard: ICard = {
      id: Date.now(),
      title,
      column,
      body,
      author: params.author,
      comments: [],
    };
    setData(() => data.concat([newCard]));
  };

  const editCard = (cardId: number, newTitle: string, newBody: string) => {
    setData((prev) =>
      prev.map((card: ICard) => {
        if (card.id === cardId) {
          card.title = newTitle;
          card.body = newBody;
        }
        return card;
      })
    );
  };

  const deleteCard = (cardId: number) => {
    setData((prev) => prev.filter((card) => card.id !== cardId));
  };

  const addComment = (cardId: number, text: string) => {
    let newComment = {
      id: Date.now(),
      text,
      author: params.author,
    };
    setData((prev) =>
      prev.map((card: ICard) => {
        if (card.id === cardId) {
          card.comments = card.comments.concat([newComment]);
        }
        return card;
      })
    );
  };

  const editComment = (
    cardId: number,
    commentId: number,
    newComment: string
  ) => {
    setData((prev) =>
      prev.map((card: ICard) => {
        if (card.id === cardId) {
          card.comments.map((comment: IComment) => {
            if (comment.id === commentId) {
              comment.text = newComment;
            }
            return comment;
          });
        }
        return card;
      })
    );
  };

  const delComment = (cardId: number, commentId: number) => {
    console.log('comment delete');
    setData((prev) =>
      prev.map((card: ICard) => {
        if (card.id === cardId) {
          card.comments = card.comments.filter(
            (comment: IComment) => comment.id !== commentId
          );
        }
        return card;
      })
    );
  };

  return (
    <Context.Provider
      value={{
        addCard,
        editCard,
        deleteCard,
        addComment,
        editComment,
        delComment,
      }}
    >
      <Board>
        <Column author={params.author} title="todo" data={data}></Column>
        <Column author={params.author} title="in_progress" data={data}></Column>
        <Column author={params.author} title="testing" data={data}></Column>
        <Column author={params.author} title="done" data={data}></Column>
      </Board>
      {params.onStart && (
        <Modal>
          <ModalWrapper>
            <div className="container">
              <div>Enter your name</div>
              <input
                placeholder="Enter name"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setParams((state) => ({
                    ...state,
                    author: event.target.value,
                  }));
                }}
              ></input>
              <button
                type="button"
                onClick={() => {
                  setParams((state) => ({ ...state, onStart: false }));
                }}
              >
                Ok
              </button>
            </div>
          </ModalWrapper>
        </Modal>
      )}
    </Context.Provider>
  );
};

export default App;
