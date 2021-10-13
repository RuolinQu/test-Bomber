
import Button from './button'
import {render,screen,fireEvent} from '@testing-library/react'
import renderer from 'react-test-renderer';

describe('Button component', () => { 
    it('should create a correct default button', () => {
        render(<Button>Click</Button>)
        const element = screen.getByText('Click')
        expect(element).toBeInTheDocument();
        expect(element).toHaveStyle(`position:relative`)
    })
})


// import Enzyme, { shallow, mount } from 'enzyme';
// // import {render,screen,fireEvent} from '@testing-library/react'
// import BTN from './btn'
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import ReactDOM from "react-dom";

// Enzyme.configure({ adapter: new Adapter() });

// describe('Button', () => {
//     it('renders a button', () => {
//         const wrapper = shallow(<BTN
//             size="lg"
//             btnType="primary"
//             disabled={false}
//         >
//           me
//         </BTN>);

//         // let containerStyle = wrapper.get(0).style;
//         // console.log(containerStyle)
//         // expect(containerStyle).to.have.property('position', 'relative');
        

//         // const elem = wrapper.find(BTN);
//         // expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('position')).toBe('relative');
        
//         expect(wrapper).toHaveStyle(`position:relative`)
//         // expect(wrapper.find('.btn').prop('style')).toHaveProperty('position', 'relative');
//         // console.log(wrapper.first().getElement().type);
//     //   expect(wrapper.find('.btn').prop('style')).toHaveProperty('backgroundSize', '100%');
//     });
//   });