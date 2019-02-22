import React from 'react';
import PropTypes from 'prop-types'

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  if (props.tab !== props.selectedTab) {
    return (
      <div
        className={'tab'}
        onClick={() => props.selectTabHandler(props.tab)}
          /* Replace this dummy click handler function with your selectTabHandler function from props 
           you'll need to pass the `tab` in as an argument to this handler. */ >
        {props.tab.toUpperCase()}
      </div>
    );
  } else {
    return (
      <div
        className={`tab active-tab`}
        onClick={() => props.selectTabHandler(props.tab)}
          /* Replace this dummy click handler function with your selectTabHandler function from props 
           you'll need to pass the `tab` in as an argument to this handler. */ >
        {props.tab.toUpperCase()}
      </div>
    );
  }
};

Tab.propTypes = {
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
}
export default Tab;
