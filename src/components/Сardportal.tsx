import React from 'react';
import ReactDOM from 'react-dom';

class CardModal extends React.Component {
  el: HTMLElement = document.createElement('div');

  componentDidMount() {
    document.body.append(this.el);
  }
  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }

  // render() {
  //   return (
  //     <ModalWrapper>
  //       <div className="modal-content">
  //         <a href="" className="close-icon"></a>
  //         <div className="modal-title"></div>
  //         <div className="modal-body"></div>
  //         <div className="modal-author"></div>
  //       </div>
  //     </ModalWrapper>
  //   );
  // }
}

export default CardModal;
