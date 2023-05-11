document.querySelectorAll('.tab').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.tab').forEach(item => {
            item.classList.remove('active');
        });
        event.target.classList.add('active');
    })
})

document.getElementById("bold").addEventListener("click", function() {
    var editor = document.getElementById("editor");
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);

    var newNode = document.createElement("b");
    newNode.appendChild(range.extractContents());
    range.insertNode(newNode);

    selection.removeAllRanges();
    selection.addRange(range);
  });








