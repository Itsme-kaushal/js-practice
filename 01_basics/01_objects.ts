const profile = {
    name: 'John',
    age: 30,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age : number): void {
        this.age = age;
    }
};
const { age }: { age: number } = profile;
const { 
    coords: { lat, lng } }: 
{ 
    coords: { lat: number; lng: number } } =
    profile;
console.log(age);
console.log(lat);
console.log(lng);