import React from 'react';
import ReactDOM from 'react-dom';
import UIBlocker from '../src/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      loadingType: 'cubeGrid'
    };
    this.handleShowLoading = this.handleShowLoading.bind(this);
  }

  renderDropDown() {
    return (<select onChange={(e) => this.setState({ loadingType: e.target.value }) }>
      <option>cubeGrid</option>
      <option>rect</option>
      <option>cube</option>
      <option>bounce</option>
      <option>circle</option>
      <option>dot</option>
      <option>foldingCube</option>
      <option>fadingCircle</option>
    </select>)
  }

  handleShowLoading(e) {
    clearTimeout(this.timeout);
    this.setState({ isVisible: true });
    this.timeout = setTimeout(() => this.setState({ isVisible: false }), 3000);
  }

  render() {
  const { isVisible, loadingType } = this.state;
  return (<div>
    <label>Loading Type</label> 
    {this.renderDropDown()}
      <button onClick={this.handleShowLoading}>Show Loading</button>
      <UIBlocker
        theme={loadingType}
        isVisible={isVisible}
        message="Loading.. or your custom message"
      />
    </div>);
  }
}

const reactRoot = document.getElementById('react-root');
ReactDOM.render(<App />, reactRoot);