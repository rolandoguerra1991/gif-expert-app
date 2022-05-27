import getGifts from "../../helpers/getGifs";

describe('Pruebas con getGifts', () => {
    test('Debe traer 50 Gifs', async () => {
        const gifs = await getGifts('Dragon Ball z');
        expect(gifs.length).toBe(10);
    });
});