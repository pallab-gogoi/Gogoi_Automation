const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    // Add more users if needed
  ];
  
  const loginForm = document.getElementById('login-form');
  
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to avoid page reload
  
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const username = usernameInput.value;
    const password = passwordInput.value;
  
    const authenticatedUser = users.find(user => user.username === username && user.password === password);
  
    if (authenticatedUser) {
      // Save the authenticated user in session storage
      sessionStorage.setItem('authenticatedUser', authenticatedUser.username);
      // Redirect to home page after successful login
      window.location.href = 'home.html';
    } else {
      alert('Invalid credentials. Please try again.');
    }
  });
