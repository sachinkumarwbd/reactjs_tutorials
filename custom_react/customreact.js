function customrender(reactElement,container) {
    // const domeElemnt = document.createElement
    // (reactElement.type)
    // domeElemnt.innerHTML= reactElement.children
    // domeElemnt.setAttribute('href',reactElement.props.href)
    // domeElemnt.setAttribute('target',reactElement.props.target)

    // container.appendChild(domeElemnt)

    const domeElemnt = document.createElement
    (reactelement.type)
    domeElemnt.innerHTML= reactelement.children

    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
       domeElemnt.setAttribute(prop,reactelement.props[prop])
              
    }
    container.appendChild(domeElemnt)
  }

const reactelement ={
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children:'click me'
}
    
const main = document.querySelector("#root")

customrender(reactelement,main)