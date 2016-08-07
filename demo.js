function person() {
    this.name = 'mark'
}

let person1 = new person();//生成实例

person1.age = 20;// 添加属性

console.log(person1);
//person { name: 'mark', age: 20 }
