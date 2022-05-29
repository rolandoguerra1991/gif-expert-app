import AddCategory from '../../components/AddCategory.js'
import { shallow } from 'enzyme'


describe('Pruebas en <AddCateogry />', () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  })

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';
    const event = { target: { value } };
    input.simulate('change', event);
    const inputValue = wrapper.find('input').prop('value');
    expect(inputValue).toBe(value);
  });

  test('NO debe de postear la informacion con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });
})
