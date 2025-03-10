function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    if(reactElement.props){
        for(let prop in reactElement.props){
            domElement.setAttribute(prop, reactElement.props[prop])
        }
    }
    if(typeof reactElement.children === 'string'){
        domElement.innerHTML = reactElement.children
    } else if(Array.isArray(reactElement.children)){
        reactElement.children.forEach(elemnt => {
            customRender(elemnt, domElement)
        })
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'div',
    props: {
        id: "root"
    },
    children: [
        {
            type: "h1",
            props: {
                title: "Custom React"
            },
            children: "MY TODO LIST"
        },
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

const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)