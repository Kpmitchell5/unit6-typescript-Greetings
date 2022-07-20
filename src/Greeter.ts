class Greeter {
  greeting: string;
  constructor(greeting: string) {
    this.greeting = greeting;
  }
  greet(name: string) {
    return `${this.greeting}, ${name}!`;
  }
}
const Hello: Greeter = new Greeter("Hello");
console.log(Hello.greet("Ashley"));

export { Greeter };
