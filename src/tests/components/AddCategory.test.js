import AddCategory from '../../components/AddCategory.js'
import { shallow } from 'enzyme'


describe('Pruebas en <AddCateogry />', () => {
  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories}/>);

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
})
