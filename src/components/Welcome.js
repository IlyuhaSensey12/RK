import React from 'react';
import '../StarAnimation.css';
import {Link} from 'react-router-dom'

export default function Welcome() {
  return (
    <div>
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div id="parallax">
    <div class="layer" data-depth="0.6">
    <div class="some-space">
      <h1>Welcome</h1>
    </div>
  
    </div>
    <div class="layer" data-depth="0.4">
    <div id="particles-js"></div>
    </div>


    <div class="layer" data-depth="0.3">
    <div class="some-more-space1"><Link className='atata' to='/Main'>Continue to website</Link></div>
    </div>
    </div>
    </div>
  )
}
