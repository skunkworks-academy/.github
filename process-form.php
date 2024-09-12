<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $company = filter_var($_POST['company'], FILTER_SANITIZE_STRING);
    $assessment = filter_var($_POST['assessment'], FILTER_SANITIZE_STRING);

    // Prepare the email content
    $to = "raydo@skunkworks.africa";
    $subject = "New IBM Partner Assessment Submission";
    $message = "
        <html>
        <head>
            <title>IBM Partner Assessment Submission</title>
        </head>
        <body>
            <h2>New Submission</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Company:</strong> $company</p>
            <p><strong>Assessment:</strong> $assessment</p>
        </body>
        </html>
    ";

    // Set the email headers for HTML content
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // Additional headers
    $headers .= 'From: no-reply@skunkworks.africa' . "\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Your assessment has been submitted successfully!";
    } else {
        echo "There was an error submitting your assessment. Please try again.";
    }
}
?>