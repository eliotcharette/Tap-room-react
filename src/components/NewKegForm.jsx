import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';


function NewKegForm(props){
  let _beer = null;
  let _brewer = null;
  let _name = null;
  let _email = null;
  let _comments = null;
  let _thumbsUp = 0;
  let _thumbsDown = 0;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({beer: _beer.value, brewer: _brewer.value, name: _name.value, email: _email.value, comments: _comments.value, thumbsUp: _thumbsUp, thumbsDown: _thumbsDown, id: v4(), timeOpen: new Moment()});
    _beer.value = '';
    _brewer.value = '';
    _name.value = '';
    _email.value = '';
    _comments.value = '';
    _thumbsUp = 0;
    _thumbsDown = 0;
  }
  return (
    <div>
      <style jsx>{`
          .form {
            background-color: lightblue;
          }
          input {
            width: 47.2%;
            padding: 10px 20px;
            margin: 15px 15px;
            box-sizing: border-box;
          }
          button {
            margin: 15px 25px;
            padding: 15px 15px;
          }
          textarea {
            margin 20px 15px;
            padding: 10px 20px;
            box-sizing: border-box;
          }
      `}

      </style>
      <div className="form">
        <form onSubmit={handleNewKegFormSubmission}>
          <input
            type='text'
            id='beer'
            placeholder='New Beer'
            ref={(input) => {_beer = input;}}/>
          <input
            type='text'
            id='brewer'
            placeholder='Brewery'
            ref={(input) => {_brewer = input;}}/>
          <input
            type='text'
            id='name'
            placeholder='Your Name'
            ref={(input) => {_name = input;}}/>
          <input
            type='text'
            id='email'
            placeholder='Email'
            ref={(input) => {_email = input;}}/>
          <textarea
            id='comments'
            placeholder='Add a comment'
            ref={(textarea) => {_comments = textarea;}}/>
          <button className="btn btn-success" type='submit'>Request Beer</button>
        </form>
      </div>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
