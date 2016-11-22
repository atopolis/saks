import React from 'react';

const Footer = () => <footer id='footer'>
  <nav>
    <Github/>
    <StackOverflow/>
  </nav>
</footer>;

const Github = () => <a
  title='Github' 
  href='https://github.com/JeremySaks'>
  <svg id='github' viewBox='0 0 1000 1000'>
    <g>
      <path d='M10,512.6c0,213.9,137.1,395.9,328.2,462.7c25.8,6.5,21.8-11.9,21.8-24.3v-84.9c-148.7,17.5-154.6-81-164.6-97.4c-20.2-34.5-67.8-43.2-53.6-59.6c33.8-17.5,68.3,4.4,108.3,63.4c28.9,42.8,85.3,35.6,113.8,28.4c6.2-25.8,19.6-48.7,38-66.6c-153.9-27.4-218.1-121.4-218.1-233.2c0-54.1,17.9-104,52.9-144.2c-22.3-66.4,2.1-123,5.3-131.4c63.6-5.8,129.7,45.5,134.8,49.6c36.1-9.7,77.4-15,123.6-15c46.4,0,87.9,5.3,124.2,15.2c12.3-9.4,73.7-53.4,132.8-48c3.2,8.4,27,63.9,6,129.2c35.5,40.3,53.6,90.5,53.6,144.8c0,112-64.6,206.1-219,233.3c25.8,25.4,41.7,60.7,41.7,99.8v123.2c0.9,9.8,0,19.6,16.5,19.6C850.4,911.9,990,728.6,990,512.7c0-270.7-219.4-490-490-490C229.3,22.6,10,241.9,10,512.6L10,512.6z'/>
    </g>
  </svg>
</a>

const StackOverflow = () => <a
  title='Stack Overflow'
  href='http://stackoverflow.com/users/1186434/jeremy-s'>
  <svg id='stack-overflow' viewBox='0 0 1000 1000'>
    <g>
      <path d='M809.9,10L878,385.8l-81.2,16.6L728.7,26.6L809.9,10z'/>
      <path d='M553.4,88.3l220.9,311.5l-66.6,49.4L486.8,137.7L553.4,88.3z'/>
      <path d='M356.3,266.9l332.8,187.3L650,527.3L317.2,340L356.3,266.9z'/>
      <path d='M260.5,455.5l376.8,95L617.5,629l-376.8-95L260.5,455.5z'/>
      <path d='M237.1,628.8l386.9,37.1l-7.7,80.6l-386.8-37.1L237.1,628.8z'/>
      <path d='M235.3,779.5h388.6v81H235.3V779.5z'/>
      <path d='M672.5,601.4v323.9H186.7V601.4H122V990h615.3V601.4H672.5z'/>
    </g>
  </svg>
</a>

export default Footer;