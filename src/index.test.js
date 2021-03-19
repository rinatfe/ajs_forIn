import sortObject from "./index"

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
const param = ["name", "level"];
let arr = [
    {key: "name", value: "мечник"}, 
    {key: "level", value: 2}, 
    {key: "attack", value: 80}, 
    {key: "defence", value: 40}, 
    {key: "health", value: 10} 
  ]

describe('my test', () => {
    test('param test', () => {
        expect(sortObject(obj, param)).toEqual(arr);
    });
});