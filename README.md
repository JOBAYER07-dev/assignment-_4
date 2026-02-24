1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
  
   --->getElementById: Returns the element with the specified id; only one element can be retrieved. If many elements have the same ID, then it returns the first one. And through this, the element can be retrieved in less time.
   getelementsbyclassname: It gets all the classes of a type. It gets all the classes as an array, but they are not a complete array.
   querySelector / querySelectorAll:  querySelector and querySelectorAll do a lot of the same things; they both find elements like CSS. Here, querySelector returns the first one it finds. And querySelectorAll returns all the classes of the same        type in the form of a NodeList.
   
2. How do you create and insert a new element into the DOM?
   
   ---> To create a new element, first create any tag using .createElement, then write text inside it using .innerText. Then appendChild will insert it into the DOM.
   
3. What is Event Bubbling? And how does it work?
   
   ---> When an event occurs on a child element, it goes step by step to the parent, grandparent, body. If there is a button inside a div and you click on the button, the button will be clicked first, and then the div will be clicked.
   
4. What is Event Delegation in JavaScript? Why is it useful?

   ---> Instead of having separate events for each child, you can handle everything with one event for the parent. This improves performance, dynamic elements work, and the code is clean.

5. What is the difference between preventDefault() and stopPropagation() methods?

   ---> preventDefault() stops browsing. stopPropagation() stops event bubbling.
