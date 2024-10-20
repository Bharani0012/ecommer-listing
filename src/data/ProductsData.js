import plant1 from "../assets/plant1.png";
import plant2 from "../assets/plant2.png";
import plant3 from "../assets/plant3.png";

const products = Array.from({ length: 200 }, (_, index) => {
    const imageIndex = index % 3;
    const images = [plant1, plant2, plant3];
    return {
        id: index + 1,
        name: 'Monstera',
        price: 299,
        image: images[imageIndex],
    };
});

export default products;
