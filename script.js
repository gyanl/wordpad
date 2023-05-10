document.querySelectorAll('.tab').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.tab').forEach(item => {
            item.classList.remove('active');
        });
        event.target.classList.add('active');
    })
})
