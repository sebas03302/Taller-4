
var directorioImagenes = '../recursos/imagenes/'


function createNode(nodeType) {
    var node = document.createElement(nodeType);
    return node;
}

function createNodeWithLink(nodeType, nodeText, quantity) {
    var node = document.createElement(nodeType);

    for (var i = 0; i < quantity; i++) {
        var newChild = document.createElement('a');
        newChild.href = '#';
        newChild.textContent = nodeText;
        node.appendChild(newChild);
    }

    return node;
}

function createImageNode(imageName) {
    var node = createNode("img");
    node.src = imageDirectory + imageName;
    return node;
}

function appendNodeToBody(node) {
    document.body.appendChild(node);
}

function appendNodeToContainer(node, container) {
    container.appendChild(node);
}

function createNodeWithText(nodeType, nodeText, quantity) {
    var node = document.createElement(nodeType);

    for (var i = 0; i < quantity; i++) {
        var newText = document.createTextNode(nodeText)
        var newChild = document.createElement(nodeType)
        newChild.appendChild(newText)
        node.appendChild(newChild)
    }
    return node
}




