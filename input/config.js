const fs = require('fs');
const width = 1000;
const height = 1000;
const dir = __dirname;

// define object rarity based on file name
const rarity = [
    { key: '', val: 'original' },
    { key: '_r', val: 'rare' },
    { key: '_sr', val: 'super rare' },
];

// if filname includes rarirty, add value
const addRarity = (_str) => {
    let itemRarity;
    rarity.forEach((r) => {
        if (_str.includes(r.key)) {
            itemRarity = r.val;
        }
    });
    return itemRarity;
};

// clean name without defining rarity 
const cleanName = (_str) => {
    let name = _str.slice(0, -4);
    rarity.forEach((r) => {
        name = name.replace(r.key, '');
    });
    return name;
};

// create element object
const getElements = (path) => {
    return fs
        .readdirSync(path)
        .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
        .map((i, index) => {
            return {
                id: index + 1,
                name: cleanName(i),
                fileName: i,
                rarity: addRarity(i),
            };
        });
};

// define each layer of the object in correct order 
const layers = [
    {
        id: 1,
        name: 'background',
        location: `${dir}/background/`,
        elements: getElements(`${dir}/background/`),
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
    },
    {
        id: 2,
        name: 'outline',
        location: `${dir}/outline/`,
        elements: getElements(`${dir}/outline/`),
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
    },
    {
        id: 3,
        name: 'eye color',
        location: `${dir}/eye color/`,
        elements: getElements(`${dir}/eye color/`),
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
    },
    {
        id: 4,
        name: 'iris',
        location: `${dir}/iris/`,
        elements: getElements(`${dir}/iris/`),
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
    },
    {
        id: 5,
        name: 'highlight',
        location: `${dir}/highlight/`,
        elements: getElements(`${dir}/highlight/`),
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
    },
    {
        id: 6,
        name: 'mouth',
        location: `${dir}/mouth/`,
        elements: getElements(`${dir}/mouth/`),
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
    },
    {
        id: 7,
        name: 'nose',
        location: `${dir}/nose/`,
        elements: getElements(`${dir}/nose/`),
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
    },
];


module.exports = { layers, width, height };