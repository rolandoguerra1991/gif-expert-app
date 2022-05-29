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

  test('debe de llamar setCategories y limpiar la caja de texto', () => { 
    // 1. simular el inputValue
    wrapper.find('input').simulate('change', {target : { value: "Hola mundo" } });
    // 2. simular el submit
    wrapper.find('form').simulate('submit', {preventDefault(){}});
    // 3. setCategories se debe de haber llamado
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    // 4. el valor del input debe de estar ''
    expect(wrapper.find('input').prop('value')).toBe('');
  });
})
