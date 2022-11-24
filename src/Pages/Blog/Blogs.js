import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:w-3/4 mx-auto'>
            <h2 className="text-3xl py-8 font-bold text-info">All Blog Question</h2>
            <div tabIndex={0} className="py-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-bold">
                    1. What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p tabIndex={0}>React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and the built-in Context API. Your choice will depend on the size of your project, your needs, and your engineers' expertise.</p>
                </div>
            </div>
            <div tabIndex={0} className="py-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-bold">
                    2. How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p tabIndex={0}>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
                </div>
            </div>
            <div tabIndex={0} className="py-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-bold">
                    3. What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p tabIndex={0}>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
            <div tabIndex={0} className="py-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-bold">
                    4.React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p tabIndex={0}>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;