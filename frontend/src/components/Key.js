import React from 'react';

const Key = props => (
  <div className='sidebar__box--key key'>
    <h3 className='header__heading header__heading--sidebar'>Subject</h3>
    <div className='key__group'>
      <span className='key__square key__square--bu1'></span>
      <p className='key__description'>Calculus I</p>
    </div><br/>
    <div className='key__group'>
      <span className='key__square key__square--bu2'></span>
      <p className='key__description'>Calculus II</p>
    </div><br/>
    <div className='key__group'>
      <span className='key__square key__square--bu3'></span>
      <p className='key__description'>Calculus III</p>
    </div><br/>
    <div className='key__group'>
      <span className='key__square key__square--bu4'></span>
      <p className='key__description'>Physics I</p>
    </div><br/>
    <div className='key__group'>
      <span className='key__square key__square--bu5'></span>
      <p className='key__description'>Physics II</p>
    </div>
  </div>
);

export default Key;
