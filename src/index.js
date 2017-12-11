import React from 'react';
import PropTypes from 'prop-types';
import LoadingTypes from './loadingTypes';
import minimizedStyles from './styles';

export default class UIBlocker extends React.Component {

  get stylesClassName() {
    return 'react_ui_blocker_styles';
  }

  get styleContainer() {
    const stylesClassName = this.stylesClassName;
    const headContainer = this.getHeadContainer();
    if (headContainer && headContainer.getElementsByClassName) {
      const [ found ] = headContainer.getElementsByClassName(stylesClassName);
      if (found) { return found; }
      const container = document.createElement('style');
      container.type = 'text/css';
      container.className = stylesClassName;
      headContainer.appendChild(container);
      return container;
    }
  }

  getHeadContainer() {
    if (global && global.document && global.document.head) {
      return global.document.head;
    } else if (window && window.document && window.document.head) {
      return window.document.head;
    } else if (document && document.querySelector) {
      return document.querySelector('head');
    }
  }

  componentWillMount() {
    const { styleContainer } = this;
    if (styleContainer) {
      styleContainer.innerHTML = minimizedStyles;
    }
  }

  shouldComponentUpdate(nextProps) {
    const { theme, message, isVisible } = nextProps;
    if (theme !== this.props.theme || message !== this.props.message || isVisible !== this.props.isVisible) {
      return true;
    }
    return false;
  }

  renderContent(theme) {
    const structureString = LoadingTypes[theme] || loadingTypes['cubeGrid'];
    const [ wrapperClass, childClasses ] = structureString.split('|>');
    const childeren = childClasses.split('|').map((childName, childIndex) => {
      return (<div className={childName} key={childName} />);
    });
    return (<div className={wrapperClass} >{childeren}</div>);
  }

  render() {
    const { theme, message, isVisible } = this.props;
    const content = this.renderContent(theme);
    return (
      <div id="holdon-overlay" style = {{ display: isVisible ? 'block' : 'none' }}>
        <div id="holdon-content-overlay">
          <div id="holdon-content">{content}</div>
          <div id="holdon-message">{message}</div>
        </div>
      </div>
    );
  }
}

UIBlocker.defaultProps = {
  isVisible: false,
  message: 'Loading..',
  theme: 'cubeGrid'
};

UIBlocker.propTypes = {
  theme: PropTypes.string.isRequired,
  message: PropTypes.string,
  isVisible: PropTypes.bool.isRequired
};
