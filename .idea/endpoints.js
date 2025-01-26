async function registerUser() {
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