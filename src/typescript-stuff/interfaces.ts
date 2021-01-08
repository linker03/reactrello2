export interface IParams {
  onStart: boolean;
  author: string;
}

export interface ICard {
  id: number;
  title: string;
  column: string;
  body: string;
  author: string;
  commentsArray: number[];
}

export interface ICardDenormalized {
  id: number;
  title: string;
  column: string;
  body: string;
  author: string;
  commentsArray: IComment[];
}

export interface ICardStorage {
  [key: number]: ICard;
}

export interface IComment {
  id: number;
  author: string;
  text: string;
}

export interface ICommentStorage {
  [key: number]: IComment;
}

export interface IColumn {
  id: number;
  title: string;
  cardsArray: number[];
}

export interface IColumnStorage {
  [key: number]: IColumn;
  columnOrder: number[];
}

export interface IContext {
  addCard: (column: string, title: string, body: string) => void;
  editCard: (cardId: number, newTitle: string, newBody: string) => void;
  deleteCard: (cardId: number) => void;
  addComment: (cardId: number, text: string) => void;
  editComment: (commentId: number, newComment: string) => void;
  delComment: (cardId: number, commentId: number) => void;
}
