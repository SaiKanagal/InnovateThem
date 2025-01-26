async function registerUser() {
    const purdue_email = document.getElementById("purdue_email").value;
    const password = document.getElementById("password").value;

    console.log(purdue_email, password);
    const url = "http://127.0.0.1:5000/register";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(response);
        console.log(json);
    }
    catch (error) {
        console.error(error.message);
    }
}