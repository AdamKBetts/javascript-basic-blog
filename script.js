const blogPosts = [
    {
        id: 1,
        title: "My First Blog Post",
        author: "Adam",
        date: "April 1, 2025",
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
        author: "Adam",
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
        author: "Adam",
        date: "April 3, 2025",
        content: `
            <p>The Document Object Model (DOM) is a programming interface for web documents. It represents the page structure as a tree of objects, where each object represents a part of the document.</p>
            <p>JavaScript can interact with the DOM to dynamically change the content, structure, and style of a web page.</p>
            <p>I practiced selecting elements using methods like <code>getElementById</code> and <code>querySelector</code>, and I learned how to manipulate their properties and attributes.</p>
        `
    },
    {
        id: 4,
        title: "Understanding Variables in JavaScript",
        author: "Adam",
        date: "April 4, 2025",
        content: `
            <p>In JavaScript, variables are used to store and manage data. They are like containers that hold different types of information.</p>
            <p>I learned about the keywords used to declare variables: <code>var</code>, <code>let</code>, and <code>const</code>. Each has its own scope and use cases.</p>
            <ul>
                <li><code>var</code> is the oldest way to declare variables and has function scope.</li>
                <li><code>let</code> was introduced in ES6 and has block scope, allowing for more predictable behavior.</li>
                <li><code>const</code> is also from ES6 and is used to declare constants – variables whose values should not be reassigned.</li>
            </ul>
            <p>Choosing the right keyword for declaring variables is important for writing clean and bug-free JavaScript code.</p>
        `
    },
    {
        id: 5,
        title: "Working with Conditional Statements",
        author: "Adam",
        date: "April 5, 2025",
        content: `
            <p>Conditional statements allow us to execute different blocks of code based on whether certain conditions are true or false. This adds logic and decision-making capabilities to our programs.</p>
            <p>The most common conditional statements in JavaScript are:</p>
            <ul>
                <li><code>if</code> statement: Executes a block of code if a condition is true.</li>
                <li><code>else if</code> statement: Allows for checking multiple conditions.</li>
                <li><code>else</code> statement: Executes a block of code if none of the preceding conditions are true.</li>
                <li><code>switch</code> statement: Provides an alternative way to perform different actions based on the value of an expression.</li>
            </ul>
            <p>Mastering conditional statements is essential for controlling the flow of execution in your JavaScript programs.</p>
        `
    },
    {
        id: 6,
        title: "Introduction to Loops in JavaScript",
        author: "Adam",
        date: "April 6, 2025",
        content: `
            <p>Loops are a fundamental concept in programming that allows us to repeat a block of code multiple times. This is incredibly useful for automating repetitive tasks.</p>
            <p>JavaScript provides several types of loops:</p>
            <ul>
                <li><code>for</code> loop: Executes a block of code a specific number of times.</li>
                <li><code>while</code> loop: Executes a block of code as long as a condition is true.</li>
                <li><code>do...while</code> loop: Similar to the <code>while</code> loop, but it executes the code block at least once before checking the condition.</li>
                <li><code>for...in</code> loop: Iterates over the properties of an object.</li>
                <li><code>for...of</code> loop: Iterates over iterable objects (like arrays and strings).</li>
            </ul>
            <p>Understanding and using loops effectively can significantly reduce the amount of code you need to write and make your programs more efficient.</p>
        `
    }
];

const postsList = document.getElementById('posts');
const singlePostSection = document.getElementById('single-post');

function createExcerpt(content, maxLength = 150) {
    const textContent = content.replace(/<[^>]*>/g, '');
    return textContent.length > maxLength ? textContent.substring(0, maxLength) + '...' : textContent;
}

function renderBlogList(posts) {
    postsList.innerHTML = '';
    posts.forEach(post => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `post-${post.id}`;
        link.textContent = post.title;

        const postMeta = document.createElement('p');
        postMeta.classList.add('post-meta');
        postMeta.textContent = `By ${post.author} on ${post.date}`;

        const excerpt = document.createElement('p');
        excerpt.classList.add('excerpt');
        excerpt.textContent = createExcerpt(post.content);

        listItem.appendChild(link);
        listItem.appendChild(postMeta);
        listItem.appendChild(excerpt);
        postsList.appendChild(listItem);
    });
}

function displaySinglePost(post) {
    singlePostSection.innerHTML = `
    <h2>${post.title}</h2>
    <p class="post-meta">By ${post.author} on ${post.date}</p>
    <div class="post-content">${post.content}</div>
    <button id="back-to-posts">Back to Posts</button>
    `;

    const backToPostsButton = document.getElementById('back-to-posts');
    backToPostsButton.addEventListener('click', () => {
        singlePostSection.innerHTML = '';
    });
}

// Initial rendering of the blog list
renderBlogList(blogPosts);

// Event listener for clicking on a blog post title
postsList.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        const postId = parseInt(event.target.getAttribute('href').split('-')[1]);
        const post = blogPosts.find(p => p.id === postId);
        if (post) {
            displaySinglePost(post);
        }
    }
});