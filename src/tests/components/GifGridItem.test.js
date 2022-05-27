import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem />", () => {
  const image = {
    url: "https://google.com",
    title: "Titulo de la prueba",
    id: "fddsfsdfsdfde3232",
  };
  const wrapper = shallow(<GifGridItem {...image} />);

  test("debe mostrar <GifGridItem /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe tener un parrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(image.title);
  });

  test("debe tener una imagen con src y con alt igual a los props", () => {
    const img = wrapper.find("img");
    const { src, alt } = img.props();

    expect(typeof src).toBe('string');
    expect(typeof alt).toBe('string');
    expect(src).toBe(image.url);
    expect(alt).toBe(image.title);
  });

  test("debe tener la clase animate__headShake", () => {
    const div = wrapper.find("div");
    const { className } = div.props();
    const classes = className.split(' ');
    const exist = classes.includes('animate__headShake');
    expect(exist).toBe(true);
  });
});
