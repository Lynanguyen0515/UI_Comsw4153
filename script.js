document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login request
    const token = login(username, password);
    if (token) {
        localStorage.setItem('jwt', token);
        showDashboard(username);
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    // Simulate sign-up request
    const success = signUp(username, password);
    if (success) {
        alert('Account created successfully');
        showLogin();
    } else {
        alert('Sign-up failed');
    }
});

document.getElementById('new-task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-desc').value;
    const dueDate = document.getElementById('task-date').value;

    // Simulate saving the new task
    const task = { title, description, dueDate };
    addTask(task);
    document.getElementById('task-form').classList.add('hidden');
});

function login(username, password) {
    // Simulate a login request and return a JWT token
    if (username === 'user' && password === 'password') {
        return 'fake-jwt-token';
    }
    return null;
}

function signUp(username, password) {
    // Simulate a sign-up request
    return true;
}

function showDashboard(username) {
    document.getElementById('login-page').classList.add('hidden');
    document.getElementById('signup-page').classList.add('hidden');
    document.getElementById('dashboard-page').classList.remove('hidden');
    document.getElementById('user-name').textContent = username;
}

function showLogin() {
    document.getElementById('login-page').classList.remove('hidden');
    document.getElementById('signup-page').classList.add('hidden');
    document.getElementById('dashboard-page').classList.add('hidden');
}

function showSignUp() {
    document.getElementById('login-page').classList.add('hidden');
    document.getElementById('signup-page').classList.remove('hidden');
    document.getElementById('dashboard-page').classList.add('hidden');
}

function logout() {
    localStorage.removeItem('jwt');
    showLogin();
}

function addTask(task) {
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        <h4>${task.title}</h4>
        <p>${task.description}</p>
        <p>Due Date: ${task.dueDate}</p>
    `;
    taskList.appendChild(taskItem);
}

function showTaskForm() {
    document.getElementById('task-form').classList.remove('hidden');
}

function showReminderForm() {
    document.getElementById('reminder-form').classList.remove('hidden');
}
