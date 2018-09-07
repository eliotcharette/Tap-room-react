import React from 'react';


function NewTicketForm(){
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
        <form>
          <input
            type='text'
            id='name'
            placeholder='New Beer'/>
          <input
            type='text'
            id='brewery'
            placeholder='Brewery'/>
          <input
            type='text'
            id='price'
            placeholder='Price'/>
          <input
            type='text'
            id='remaining'
            placeholder='Pints left'/>
          <textarea
            id='description'
            placeholder='Add a description'/>
          <button className="btn btn-success" type='submit'>Add New Beer</button>
        </form>
      </div>
    </div>
  );
}

export default NewTicketForm;
