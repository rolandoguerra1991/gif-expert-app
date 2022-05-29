import GifGrid from "../../components/GifGrid";
import { shallow } from "enzyme";
import useFetchGifs from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  test("debe de renderizar correctamente", () => {
    useFetchGifs.mockReturn({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={"Goku"} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
    const imgs = [{
      id: 'ABC',
      url: 'https://localhost/cualquier/cosa.jpg',
      title: 'Cualquier cosa'
    }]
    useFetchGifs.mockReturn({
      data: imgs,
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={"Goku"} />);
    expect(wrapper).toMatchSnapshot();
  });
});
