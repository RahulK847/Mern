// Custom implementation of React's rendering mechanism
function customRender(reactElement, container) {
    // Create a DOM element based on the type (e.g., 'div', 'h1')
    const domElement = document.createElement(reactElement.type)
    
    // Add all attributes from props to the DOM element
    if(reactElement.props){
        for(let prop in reactElement.props){
            domElement.setAttribute(prop, reactElement.props[prop])
        }
    }
    
    // Handle different types of children
    if(typeof reactElement.children === 'string'){
        // For text content, set innerHTML directly
        domElement.innerHTML = reactElement.children
    } else if(Array.isArray(reactElement.children)){
        // For arrays of children, recursively render each child
        reactElement.children.forEach(elemnt => {
            customRender(elemnt, domElement)
        })
    }
    
    // Append the created element to the container
    container.appendChild(domElement)
}

// Virtual DOM representation (similar to React's createElement output)
const reactElement = {
    type: 'div',
    props: {
        id: "root"
    },
    children: [
        // Heading element
        {
            type: "h1",
            props: {
                title: "Custom React"
            },
            children: "MY TODO LIST"
        },
        // List container with nested list items
        {
            type: "ul",
            props: {
                id: "list"
            },
            children: [
                {
                    type: "li",
                    props: {id: "1"},
                    children: "Task 1: Javascript (Done)"
                },
                {
                    type: "li",
                    props: {id: "2"},
                    children: "Task 2: React (Pending)"
                },
                {
                    type: "li",
                    props: {id: "3"},
                    children: "Task 3: Nodejs (Pending)"
                }
            ]
        }
    ]
}

// Get the root container from the DOM
const mainContainer = document.querySelector("#root")

// Render the virtual DOM into the actual DOM
customRender(reactElement, mainContainer)