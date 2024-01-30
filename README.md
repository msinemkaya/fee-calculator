# Fee Calculator

## Challenges in the project

- For this project, I decided to use TypeScript and class structure, since I came to a conclusion that it would be
more fit to separate logic using classes and since I do so, TypeScript would be better to block sending wrong type
of parameters.
- But since it was my first time using class structure this thoroughly, It was challenging to separate logic in a way that makes sense.
- I didn't use dependency injection -but I know how-. It was a decision based on the fact that I didn't implement it
by myself and if I tried it would make things complicated for me and the project itself.
- I happen to write unit tests this elaborate - and with TypeScript on top of that - for the first time, it was a personal challenge.
- The biggest challenge apart from building the structure was finding a way to access to past transactions without losing them on every instance,
I overcame that problem by creating a class called `TransactionStore` and returning the instance of that class rather than the class itself.
- I used factory like design pattern to make my code more testable, flexible and 
for abstracting how `CashIn` and `CashOut` class instances are created. This also made my code more readable as well.

## How to start

### Build Docker image

- `docker build -t fee-calculator .`

### Running application

- `docker run fee-calculator`
and there you go!

### What about tests ?

- `docker run -it fee-calculator npm run test`

### What about ESLint ? 

- `docker run -it fee-calculator npm run lint` to see ESLint errors
- `docker run -it fee-calculator npm run lint --fix` to fix them

## Reasoning

### Why didn't I use dependency injection?
As I mentioned briefly, I know what dependency injection is and how to use it, but I never wrote anything
that mimics dependency injection myself and decided that it would make everything more complicated for the project if I try to.

### Why did I use TypeScript?
To be candid, I am not an expert about TypeScript, but for this project, it made sense for me to use TypeScript because
there were a lot of parameters and I didn't want to afford the chance of sending ones in wrong type. And as I am trying to see from
a future point of view, chances of someone else who might want to add a new feature would be more comfortable as to find what they should do.

### Why did I make the project using class structure?
Because, when you want to add a new type of user or a new type of operation, it would be much easier this way. With using class structure,
I was able to separate logic in a flexible way. And with combining TypeScript I was also able to use interfaces which made things a lot easier.

### What is the point of using a factory like pattern?
First of all, as mentioned testability. It is easier to read the code. And since `CashIn` and `CashOut` classes have a bit much things going on in their constructors,
especially `CashOut`, you don't need to worry about it anymore this way. You just have to call factory methods, and they will return you a new instance without you worrying about it.


### Why do I return the instance of `TransactionStore` instead of the class itself?
I was in need of storing all the natural type users cash out transactions. But since on every new transaction, there is a new instance created,
I was struggling to store the transactions. So I thought, what would happen if I were to send the same instance every time `TransactionStore` is called
and not lose all previous data? It made sense to me, I moved forward with that approach.
