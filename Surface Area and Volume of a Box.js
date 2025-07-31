function getSize(width, height, depth) {
    if(width > 0 && height > 0 && depth > 0) {
        const surfaceArea = 2 * (width * height + width * depth + height * depth);
        const volume = width * height * depth;
        return [surfaceArea, volume];

    }
  
}
const [surf , vol] = getSize(1,2,3);
console.log(`surfaceArea is ${surf} and volume is ${vol}`);


