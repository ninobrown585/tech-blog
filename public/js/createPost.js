const createPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-title').value.trim();
    const body = document.querySelector('#blog-content').value.trim();


    const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to create project');
    }

};

document.querySelector('.new-post-form').addEventListener('submit', createPost);