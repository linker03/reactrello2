import React from 'react';
import styled from 'styled-components';
import Context from '../context';
import { IContext } from '../typescript-stuff/interfaces';

const Form = styled.form`
  display: flex;
  flex-direction: column;
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

export interface ICardCreateFormProps {
  columnId: number;
  author: string;
  close: () => void;
}

const CardCreateForm: React.FC<ICardCreateFormProps> = ({
  columnId,
  author,
  close,
}) => {
  type CreateCardFormState = {
    columnId: number;
    title: string;
    body: string;
    author: string;
  };

  const [state, setState] = React.useState<CreateCardFormState>({
    columnId: columnId,
    title: '',
    body: '',
    author: author,
  });

  const onChangeHandler = (event: React.ChangeEvent<any>) => {
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const { addCard } = React.useContext(Context) as IContext;

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    addCard(state.columnId, state.title, state.body);
    close();
  }

  return (
    <Form onSubmit={submitHandler}>
      <div className="window-title">Create new card</div>
      <div className="card__title">
        Card's title:
        <input type="text" name="title" onChange={onChangeHandler} />
      </div>
      <div className="card__body">
        Card's text:
        <textarea
          name="body"
          id=""
          cols={30}
          rows={10}
          onChange={onChangeHandler}
        ></textarea>
      </div>
      <div className="buttons">
        <button className="card__create" type="submit">
          Create
        </button>
        <button className="card__cancel" onClick={close}>
          Cancel
        </button>
      </div>
    </Form>
  );
};

export default CardCreateForm;
