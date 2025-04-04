const blogPosts = [
    {
        id: 1,
        title: "My First Blog Post",
        author: "Your Name",
        date: "April 3, 2025",
        content: `
            <p>This is the content of my very first blog post! I'm so excited to start this journey into software development and share my experiences here.</p>
            <p>I've been learning JavaScript for a while now, and I'm really enjoying it. It's amazing what you can build with just a few lines of code.</p>
            <ul>
                <li>Learned about variables and data types.</li>
                <li>Practiced with loops and conditional statements.</li>
                <li>Built a simple to-do list!</li>
            </ul>
            <p>Stay tuned for more updates as I continue my learning adventure!</p>
        `
    },
    {
        id: 2,
        title: "Learning About Functions in JavaScript",
        author: "Your Name",
        date: "April 2, 2025",
        content: `
            <p>Today, I delved deeper into JavaScript functions. They are fundamental building blocks that allow us to write reusable code.</p>
            <p>I learned about function declarations, function expressions, and how to pass arguments and return values.</p>
            <pre><code>
            function greet(name) {
                return "Hello, " + name + "!";
            }

            let message = greet("Gemini");
            console.log(message); // Output: Hello, Gemini!
            </code></pre>
            <p>Understanding functions is crucial for writing more organized and maintainable JavaScript code.</p>
        `
    },
    {
        id: 3,
        title: "Exploring the DOM (Document Object Model)",
        author: "Your Name",
        date: "April 1, 2025",
        content: `
            <p>The Document Object Model (DOM) is a programming interface for web documents. It represents the page structure as a tree of objects, where each object represents a part of the document.</p>
            <p>JavaScript can interact with the DOM to dynamically change the content, structure, and style of a web page.</p>
            <p>I practiced selecting elements using methods like <code>getElementById</code> and <code>querySelector</code>, and I learned how to manipulate their properties and attributes.</p>
        `
    }
];

// Get the ul element where we'll display the posts
const postsList = document.getElementById('posts');

// Loop through the blogPosts array
blogPosts.forEach(post => {
    // Create a new list item for each post
    const listItem = document.createElement('li');

    // Create an anchor tah to make the title clickable
    const link = document.createElement('a');
    link.href = `#post-${post.id}`; // We'll use this to identify the post later
    link.textContent = post.title;

    // Append the link to the list item
    listItem.appendChild(link);

    // Append the list item to the ul element
    postsList.appendChild(listItem);
});

const singlePostSection = document.getElementById('single-post');

// Add an event listener to the ul element to handle clicks on the links
postsList.addEventListener('click', (event) => {
    // Check if the clicked element is an anchor tag
    if (event.target.tagName === 'A') {
        // Prevent the default link behavior (jumping to the fragment identifier)
        event.preventDefault();

        // Get the ID of the post from the href attribute
        const postId = parseInt(event.target.getAttribute('href').split('-')[1]);

        // Find the corresponding blog post from the array
        const post = blogPosts.find(p => p.id === postId);

        // If the post is found, dispay ts content
        if (post) {
            singlePostSection.innerHTML = `
            <h2>${post.title}</h2>
            <p>By ${post.author} on ${post.date}</p>
            <div class="post-content">${post.content}</div>
            `;
        }
    }
});