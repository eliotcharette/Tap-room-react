import React from 'react';
import helpingHand from '../assets/help.png';

function NewTicketForm(){
  return (
    <div>
      <div>
        <form>
          <input
            type='text'
            id='names'
            placeholder='Pair Names'/>
          <input
            type='text'
            id='location'
            placeholder='Location'/>
          <textarea
            id='issue'
            placeholder='Describe your issue.'/>
          <button type='submit'>Help!</button>
        </form>
      </div>
      <div><img src={helpingHand}/></div>
    </div>
  );
}

export default NewTicketForm;
