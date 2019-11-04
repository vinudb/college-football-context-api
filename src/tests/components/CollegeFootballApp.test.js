import React from 'react';
import ReactDOM from 'react-dom';
import CollegeFootballApp from '../../components/CollegeFootballApp';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
  
  const setUp = () => {
      configure({ adapter: new Adapter() });
      const wrapper = shallow(<CollegeFootballApp />);
      return wrapper;
  };
  
  let wrapper;
  beforeEach(() => {
      wrapper = setUp();
  });



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CollegeFootballApp />, div);
  ReactDOM.unmountComponentAtNode(div);
  expect(wrapper.length).toBe(1);
});

test('on hamburger menu click, open state value is set',  ()=>{
    wrapper.instance().handleClick();
    expect(wrapper.state('open')).toBe(true);
  })


