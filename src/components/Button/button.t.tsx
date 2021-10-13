// import Enzyme,{ shallow } from 'enzyme';
// import Button from './btn'
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Enzyme.configure({ adapter: new Adapter() });


// describe('Button', () => {
//     it('renders a button', () => {
//         const wrapper = shallow(<Button>Click</Button>);
//         console.log(wrapper.find(Button).get(0).props);
//     //   expect(wrapper.find('.btn').prop('style')).toHaveProperty('backgroundSize', '100%');
//     });
//   });



// import Button from './button'
// import {render,screen,fireEvent} from '@testing-library/react'
// import renderer from 'react-test-renderer';

// describe('Button component', () => {

//     it('should render correctly', () => {
//         const btn = renderer.create(<Button>Click</Button>).toJSON()
//         expect(btn).toMatchSnapshot();
//     })

//     it('should create a correct default button', () => {
//         render(<Button>Click</Button>)
//         const element = screen.getByText('Click')
//         expect(element).toBeInTheDocument();
//         expect(element).toHaveClass('btn btn-default')
//         expect(element.disabled).toBeFalsy()
//     })

//     it('should run the callback once after one click', () => {
//         const handleCilck=jest.fn()
//         render(<Button onClick={handleCilck}>Click</Button>)
//         const element = screen.getByText('Click')
//         expect(handleCilck).toHaveBeenCalledTimes(0)
//         fireEvent.click(element)
//         expect(handleCilck).toHaveBeenCalledTimes(1)
//     })
// })