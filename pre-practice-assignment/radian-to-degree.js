function radianToDegree(radian) {
    const result = parseFloat((radian * 57.2957795).toFixed(2));
    return result;
}

const degree = radianToDegree(20);
console.log(degree);