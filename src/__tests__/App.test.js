import React from 'react';
import App from '../App';
import Header from '../sharedComponents/header';
import  {create}  from 'react-test-renderer';
import renderer from 'react-test-renderer'
 
// describe('My first snapshot',()=>{
//     test('testing App', () => {
//     let tree = create(<App />)
//     expect(tree.toJSON()).toMatchSnapshot();
//   })
// })
        // it('renders correctly', () => {
        //     const tree = renderer
        //       .create(<App />)
        //       .toJSON();
        //     expect(tree).toMatchSnapshot();
        //   });



        describe('My first snapshot',()=>{
    test('testing App', () => {
    let tree = create(<Header />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})