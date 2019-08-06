import React, {Fragment} from 'react';

import {Typeahead} from '../../src';
import options from '../exampleData';

/* example-start */
class ClickableExample extends React.Component {
  state = {
    selected: undefined,
  };

  render() {
    const {selected} = this.state;

    return (
      <Fragment>
        <Typeahead
          clearButton
          defaultSelected={options.slice(0, 3)}
          labelKey="name"
          multiple
          options={options}
          placeholder="Choose a state..."
          onTokenClick={this._onTokenClick}
          onRootClose={this._onRootClose}
        />
        {selected ? <span>{selected} selected.</span> : null}
      </Fragment>
    );
  }

  _onTokenClick = (option) => {
    this.setState({
      selected: option.name,
    });
  }

  _onRootClose = () => {
    this.setState({
      selected: undefined,
    });
  }
}
/* example-start */

export default ClickableExample;
