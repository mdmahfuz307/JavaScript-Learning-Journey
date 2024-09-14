/* JavaScript Execution Context: Detailed Breakdown

1. Everything in JavaScript Happens Inside an Execution Context

* All JavaScript code runs within an execution context, which provides an environment for the code execution.

2. Global Execution Context (GEC) :

* When JavaScript code runs, it first creates a Global Execution Context (GEC).
* The GEC acts like a container with two main components:
    => Memory Component (Variable Environment)
    => Code Component (Thread of Execution)

3. Phases of Execution Context Creation :

* The GEC undergoes two phases:
    => Creation Phase (Memory Creation Phase)
    => Execution Phase (Code Execution Phase)

4. Memory Creation Phase :

* JavaScript code is processed line by line.
* During the Memory Creation Phase, it allocates memory for  variables and functions:
* Variables are stored as key-value pairs.
* Initially, variables are assigned a value of undefined.
* Functions are stored in their entirety, including their code.

5. Execution Phase
* In this phase, the actual code executes line by line.
* Variables are assigned their actual values, replacing undefined.

6. Function Execution Context : 

* When a function is invoked (called), a new execution context is created within the GEC.
* This new context undergoes the same phases:
    => Memory Creation Phase : Allocates memory for parameters and local variables, initially setting them to undefined.

    => Execution Phase : Executes the function code line by line, assigning actual values to variables.

* Once the function completes execution, its context is removed, and control returns to the GEC.

7. Call Stack : 

* The Call Stack manages the order of execution contexts.
* The GEC is the first entry in the Call Stack.
* When a new execution context is created (e.g., a function is called), it is added to the top of the Call Stack.
* Once execution is completed, the context is removed from the stack, and control returns to the previous context.
* When the entire program completes, the Call Stack becomes empty.

8. Different Names for the Call Stack :
* The Call Stack, a LIFO (Last In, First Out) data structure, is also known as:
    => Call Stack
    => Execution Context Stack
    => Program Stack
    => Machine Stack
    => Control Stack

9. JavaScript Code Analysis :

* Before execution, JavaScript code is analyzed and broken into parts known as tokens (tokenization).
* An Abstract Syntax Tree (AST) is created from these tokens.
* The JavaScript engine uses the AST to convert the code into machine code.

10. Global Execution Context Without Code : 

* Even if no code is present, JavaScript still creates a Global Execution Context.
* The initial state of the GEC contains:
    => window (Global Object)
    => this keyword, which refers to the global object in the global context
* console.log(window === this); 
    =>  Output : true

*/