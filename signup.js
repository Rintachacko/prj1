<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SignUp</title>
</head>
<body>
        <button onclick="show()">SignUp</button>

    <script>
        document.addEventListener('DOMContentLoaded', function () 
        {
            const form = document.querySelector('form')
            form.addEventListener('submit', function (event) 
            {
                event.preventDefault() // Prevent the form from submitting by default

                // Validate form fields here
                const firstName = document.querySelector('input[name="first_name"]').value;
                const lastName = document.querySelector('input[name="last_name"]').value;
                const email = document.querySelector('input[name="email"]').value;
                const password = document.querySelector('input[name="password"]').value;

                // Perform your validation checks here
                if (firstName === '' || lastName === '' || email === '' || password === '')
                {
                    alert('Please fill in all required fields.')
                } 

                else
                {
                    // Submit the form if all fields are valid
                    form.submit()
                }
            })
        })
    </script>
</body>
</html>
