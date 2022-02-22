import user from "../database/user.js";

const login = () => {
	const email =
		document.getElementById(
			"email"
		).value; // Grab the email from the email input field and stored it in a variable
	const password =
		document.getElementById(
			"password"
		).value; // Grab the password from the email input field and stored it in a variable

	// ! ERROR :  Check if the email and password are not empty
	if (
		email === "" ||
		password === ""
	) {
		alert(
			"Please provide  your email and password"
		);
		return;
	}

	user.forEach((user) => {
		if (
			user.email === email &&
			user.password === password
		) {
			localStorage.setItem(
				"isLoggedIn",
				"true"
			);
			localStorage.setItem(
				"email",
				user.email
			);
			localStorage.setItem(
				"name",
				user.name
			);
			location.pathname =
				"home.html";
			return;
		}
	});
};

document
	.getElementById("signup")
	.addEventListener("click", () => {
		console.log(
			"Signup button clicked"
		);
		location.pathname =
			"signup.html";
	});

// Login button Listener
document
	.getElementById("login")
	.addEventListener("click", login); // Add an event listener to the login button
