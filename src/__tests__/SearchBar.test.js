import React from 'react';
import SearchBar from '../sharedComponents/searchBar';
import  {create}  from 'react-test-renderer';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Counter } from '../sharedComponents/searchBar';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



describe('My second snapshot',()=>{
it('renders the inner Counter', () => {
  const wrapper = mount(<SearchBar />);
  expect(wrapper.find(Counter).length).toEqual(1);
});
// it('passes all props to Counter', () => {
//   const wrapper = mount(<SearchBar />);
//   const counterWrapper = wrapper.find(Counter);
//   expect(counterWrapper.find('p').text()).toEqual(1);
// });
})


const countProps = {
  counter:10
}

const component = shallow(<Counter {...countProps} />)






