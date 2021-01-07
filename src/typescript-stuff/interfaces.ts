export interface IParams {
  onStart: boolean;
  author: string;
}

export interface ICard {
  id: number;
  column: string;
  title: string;
  body: string;
  author: string;
  comments: IComment[];
}

export interface IComment {
  id: number;
  author: string;
  text: string;
}

export interface IColumnProps {
  author: string;
  title: string;
  data: ICard[];
}

export interface IContext {
  addCard: (column: string, title: string, body: string) => void;
  editCard: (cardId: number, newTitle: string, newBody: string) => void;
  deleteCard: (cardId: number) => void;
  addComment: (cardId: number, text: string) => void;
  editComment: (cardId: number, commentId: number, newComment: string) => void;
  delComment: (cardId: number, commentId: number) => void;
}

export interface ICardItemProps {
  card: ICard;
}

export interface ICommentItemProps {
  comment: IComment;
  cardId: number;
}

export interface ICardCreateFormProps {
  column: string;
  author: string;
  close: () => void;
}
