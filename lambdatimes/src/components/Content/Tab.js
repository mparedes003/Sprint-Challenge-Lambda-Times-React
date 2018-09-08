import React from 'react';
// import React, { Component } from 'react';

const Tab = props => {
// class Tab extends Component { 
//   constructor(props) {
//     super(props);
//     this.state = {
//       tabs: props.tabs
//     };
//   }
  
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  // render() {
  return (
    <div
      className={''}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
// }
};

// Make sure you include PropTypes on your props.

export default Tab;
