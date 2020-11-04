import React from 'react';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <div className='ui segment'>
          <form className='ui form'>
            <div className='field'>
              <label>Email</label>
              <input type='text' placeholder='email' />
              <label>Password</label>
              <input type='text' placeholder='password' />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
