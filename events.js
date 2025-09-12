//Javascript Events and Event Listeners
//Help make webpages more interactive and engagive to users. UX
//What are the events type;
//1)User Initiated Events - > Click, Double Click, Mouse Over, Mouse Out, Mouse Move, Key Down, Key Up, Key Press, Focus, Blur, Change, Submit
//2)Browser Initiated Events -> When a page loads the content eg image, video is loaded
//3)Network Initiated Events -> When a network request is made and completed eg An API call

//HOW Events and Event Listeners work
//Event Listeners are functions that wait for a specific event to occur and then execute a block of code in response to that event
//Event is a string
//Element is a DOM element you want to listen for an event eg button
// Element.addEventListener(event, callbackFunction)
document.addEventListener("DOMContentLoaded", () =>{
    //1)Reference the element
    const myButton = document.getElementById("myButton")
    //2)Define the function to be executed when the event occurs
    function handleClick(){
        myButton.textContent = "I was clicked!!"
        myButton.style.backgroundColor = "blue"
        myButton.style.color = "white"
        console.log("I was clicked!!")
    }
    //3)Add the event listener to the element/Button
    myButton.addEventListener("click", handleClick)
    console.log("******************")

})

//DOMContedLoaded
//Its an event.Most important event in the browser when using event listeners
//It works by first loading the HTML structure of the page before executing any JavaScript code