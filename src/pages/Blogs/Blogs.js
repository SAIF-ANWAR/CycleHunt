import React from 'react';

const Blogs = () => {
    return (
        <div class="card w-1/2 mx-auto bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title mt-2">Q-1:  How will you improve the performance of a React Application?</h2>
                <p>Ans: I would use custom hooks where ncecessary, it will decrease rerenders of same link from databaase <br /> I would like to minimize image size <br /> Organize all the components accordingly <br /> I would remove unnecesary props</p>

                <h2 class="card-title mt-2">Q-2: What are the different ways to manage a state in a React application?</h2>
                <p>Ans: 1. Local State  <br /> 2.  Global State <br /> 3. Server State <br /> 4. URL state</p>

                <h2 class="card-title mt-2">Q-3:  Why you do not set the state directly in React.?</h2>
                <p>Ans: I do not set state directly because it doesn't allow me to use data dynamically. <br /> The data of this state doesn't change immediately. <br /> It reduces the control of this state across all the components</p>

                <h2 class="card-title mt-2">Q-4:   You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>Ans: Firstly, I would decalere states to changes in input search field. <br /> Then I would set the condition of search. <br /> After that I would like to use filter method to find similar results from an array of objects</p>

                <h2 class="card-title mt-2">Q-5:  What is a unit test? Why should write unit tests?</h2>
                <p>Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly  <br /> The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed.</p>

            </div>
        </div>
    );
};

export default Blogs;