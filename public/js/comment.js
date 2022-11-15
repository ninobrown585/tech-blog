const addNewComment = async (event) => {
    event.preventDefault();

    const newComment = document.querySelector('#reader-comment').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];


    if (newComment) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ comment: newComment, post_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to leave comment.');
        }
    }
};

document
    .querySelector('.new-comment')
    .addEventListener('submit', addNewComment);