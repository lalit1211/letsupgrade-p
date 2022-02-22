const logged = localStorage.getItem(
  'isLoggedIn'
);

if (!logged) {
  location.pathname !== 'index.html'
    ? (location.pathname = 'index.html')
    : null;
} else {
  location.pathname !== '/home.html'
    ? (location.pathname = 'home.html')
    : null;
}