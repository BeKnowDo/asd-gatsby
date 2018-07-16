import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Layout from './master';

describe('<Layout />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Layout />, div);
  });
});
