import React, { useState } from 'react';
import {
  IParams,
  ICard,
  ICommentStorage,
  ICardDenormalized,
} from './typescript-stuff/interfaces';
import Board from './components/Board';
import Column from './components/Column';
import Context from './context';
import Modal from './components/Сardportal';
import ModalWrapper from './components/Modal-wrapper';

const App: React.FunctionComponent = () => {
  const [params, setParams] = useState<IParams>({
    onStart: true,
    author: 'ME',
  });

  const [cardStorage, setCardsArray] = useState<ICard[]>([
    {
      id: 0,
      title: 'card1',
      column: 'todo',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      author: 'ME',
      commentsArray: [0, 1],
    },
    {
      id: 1,
      title: 'card2',
      column: 'todo',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      author: 'ME',
      commentsArray: [2, 3],
    },
    {
      id: 2,
      title: 'card3',
      column: 'todo',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      author: 'ME',
      commentsArray: [4],
    },
  ]);

  // const [columns, setColumns] = useState<IColumnStorage>({
  //   0: {
  //     id: 0,
  //     title: 'To do',
  //     cardsArray: [],
  //   },
  //   1: {
  //     id: 1,
  //     title: 'In progress',
  //     cardsArray: [],
  //   },
  //   2: {
  //     id: 2,
  //     title: 'Testing',
  //     cardsArray: [],
  //   },
  //   3: {
  //     id: 3,
  //     title: 'Done',
  //     cardsArray: [],
  //   },
  //   columnOrder: [0, 1, 2, 3],
  // });

  // const [cards, setCards] = useState<ICardStorage>({
  //   0: {
  //     id: 0,
  //     title: 'card1',
  //     body:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  //     author: 'ME',
  //     commentsArray: [0, 1],
  //   },
  //   1: {
  //     id: 1,
  //     title: 'card2',
  //     body:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  //     author: 'ME',
  //     commentsArray: [2, 3],
  //   },
  //   2: {
  //     id: 2,
  //     title: 'card3',
  //     body:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  //     author: 'ME',
  //     commentsArray: [4],
  //   },
  // });

  const [commentStorage, setComments] = useState<ICommentStorage>({
    0: { id: 0, author: 'ME', text: 'hello, this is comment' },
    1: { id: 1, author: 'ME', text: 'hello, this is second comment' },
    2: { id: 2, author: 'ME', text: 'hello, this is third comment' },
    3: { id: 3, author: 'ME', text: 'hello, this is fourth comment' },
    4: { id: 4, author: 'ME', text: 'hello, this is fifth comment' },
  });

  // const [data, setData] = useState<ICard[]>([
  //   {
  //     id: 0,
  //     title: 'card1',
  //     column: 'todo',
  //     body:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  //     author: 'ME',
  //     comments: [
  //       { id: 0, author: 'ME', text: 'hello, this is comment' },
  //       { id: 1, author: 'ME', text: 'hello, this is second comment' },
  //       { id: 2, author: 'ME', text: 'hello, this is third comment' },
  //       { id: 3, author: 'ME', text: 'hello, this is fourth comment' },
  //       { id: 4, author: 'ME', text: 'hello, this is fifth comment' },
  //     ],
  //   },
  //   {
  //     id: 1,
  //     title: 'card2',
  //     column: 'todo',
  //     body:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  //     author: 'ME',
  //     comments: [{ id: 0, author: 'ME', text: 'hello, this is comment' }],
  //   },
  //   {
  //     id: 2,
  //     title: 'card3',
  //     column: 'todo',
  //     body:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  //     author: 'ME',
  //     comments: [{ id: 0, author: 'ME', text: 'hello, this is comment' }],
  //   },
  // ]);

  // const getNewId = (array: string[]) => {
  //   return Math.max(...array.map((key) => Number(key))) + 1;
  // };

  const addCard = (column: string, title: string, body: string) => {
    let newCard: ICard = {
      id: Date.now(),
      title,
      column,
      body,
      author: params.author,
      commentsArray: [],
    };
    setCardsArray((prev: ICard[]) => [...prev, newCard]);
  };

  const editCard = (cardId: number, newTitle: string, newBody: string) => {
    setCardsArray((prev: ICard[]) => [
      ...prev.map((card: ICard) => {
        if (card.id === cardId) {
          return {
            ...card,
            title: newTitle,
            body: newBody,
          };
        }
        return card;
      }),
    ]);
  };

  const deleteCard = (cardId: number) => {
    setCardsArray((prev: ICard[]) => [
      ...prev.filter((card: ICard) => card.id !== cardId),
    ]);
  };

  const addComment = (cardId: number, text: string) => {
    let newId = Date.now();
    let newComment = {
      id: newId,
      author: params.author,
      text,
    };
    setComments((prev: ICommentStorage) => ({ ...prev, [newId]: newComment }));
    setCardsArray((prev: ICard[]) => [
      ...prev.map((card: ICard) => {
        if (card.id === cardId) {
          return { ...card, commentsArray: card.commentsArray.concat([newId]) };
        }
        return card;
      }),
    ]);
  };

  const editComment = (commentId: number, newComment: string) => {
    setComments((prev: ICommentStorage) => ({
      ...prev,
      [commentId]: { ...prev[commentId], text: newComment },
    }));
  };

  const delComment = (cardId: number, commentId: number) => {
    setCardsArray((prev: ICard[]) => [
      ...prev.map((card: ICard) => {
        if (card.id === cardId) {
          return {
            ...card,
            commentsArray: card.commentsArray.filter(
              (key: number) => key !== commentId
            ),
          };
        }
        return card;
      }),
    ]);
  };

  // const addCard = (columnId: number, title: string, body: string) => {
  //   let id = getNewId(Object.keys(cards));
  //   let newCard: ICard = {
  //     id,
  //     title,
  //     body,
  //     author: params.author,
  //     commentsArray: [],
  //   };
  //   let newArray = columns[columnId].cardsArray.concat([id]);
  //   setColumns((prev: IColumnStorage) => ({
  //     ...prev,
  //     [columnId]: { ...prev[columnId], cardsArray: newArray },
  //   }));
  //   setCards((prev: ICardStorage) => ({ ...prev, [id]: newCard }));
  // };

  // const editCard = (cardId: number, newTitle: string, newBody: string) => {
  //   setCards((prev) => ({
  //     ...prev,
  //     [cardId]: { ...prev[cardId], title: newTitle, body: newBody },
  //   }));
  // };

  // const deleteCard = (columnId: number, cardId: number) => {
  //   // setData((prev) => prev.filter((card) => card.id !== cardId));
  //   let newCards = {
  //     ...Object.keys(cards)
  //       .filter((key) => key !== cardId.toString())
  //       .map((key: string) => {
  //         return cards[+key];
  //       }),
  //   };
  //   setColumns((prev: IColumnStorage) => ({
  //     ...prev,
  //     [columnId]: {
  //       ...prev[columnId],
  //       cardsArray: prev[columnId].cardsArray.filter((key) => key !== cardId),
  //     },
  //   }));
  //   setCards(newCards);
  // };

  // const addComment = (cardId: number, text: string) => {
  //   let id = getNewId(Object.keys(comments));
  //   let newComment = {
  //     id,
  //     author: params.author,
  //     text,
  //   };
  //   let newArray = cards[cardId].commentsArray.concat([id]);
  //   setCards((prev: ICardStorage) => ({
  //     ...prev,
  //     [cardId]: { ...prev[cardId], commentsArray: newArray },
  //   }));
  //   setComments((prev: ICommentStorage) => ({ ...prev, [id]: newComment }));
  // };

  // const editComment = (commentId: number, newComment: string) => {
  //   setComments((prev) => ({
  //     ...prev,
  //     [commentId]: { ...prev[commentId], text: newComment },
  //   }));
  // };

  // const delComment = (cardId: number, commentId: number) => {
  //   let newComments = {
  //     ...Object.keys(comments)
  //       .filter((key) => key !== commentId.toString())
  //       .map((key: string) => {
  //         return comments[+key];
  //       }),
  //   };
  //   setCards((prev: ICardStorage) => ({
  //     ...prev,
  //     [cardId]: {
  //       ...prev[cardId],
  //       commentsArray: prev[cardId].commentsArray.filter(
  //         (key) => key !== commentId
  //       ),
  //     },
  //   }));
  //   setComments(newComments);
  // };

  // const getComment = (idArray: number[]) => {
  //   return idArray.map((key: number) => comments[key]);
  // };

  function deNormalize(array: ICard[]) {
    return array.map((card: ICard) => {
      return {
        ...card,
        commentsArray: card.commentsArray.map(
          (key: number) => commentStorage[key]
        ),
      };
    });
  }

  const todos: ICardDenormalized[] = deNormalize(
    cardStorage.filter((card: ICard) => card.column === 'todo')
  );
  const inProgress: ICardDenormalized[] = deNormalize(
    cardStorage.filter((card: ICard) => card.column === 'in_progress')
  );
  const testing: ICardDenormalized[] = deNormalize(
    cardStorage.filter((card: ICard) => card.column === 'testing')
  );
  const done: ICardDenormalized[] = deNormalize(
    cardStorage.filter((card: ICard) => card.column === 'done')
  );

  console.log('comments app', commentStorage);

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
        {/* {columns.columnOrder.map((key: number) => {
          return (
            <Column
              key={columns[key].id}
              columnId={columns[key].id}
              author={params.author}
              title={columns[key].title}
              data={columns[key].cardsArray.map((key: number) => {
                return cards[key];
              })}
            ></Column>
          );
        })} */}
        <Column author={params.author} title="todo" data={todos}></Column>
        <Column
          author={params.author}
          title="in_progress"
          data={inProgress}
        ></Column>
        <Column author={params.author} title="testing" data={testing}></Column>
        <Column author={params.author} title="done" data={done}></Column>
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
