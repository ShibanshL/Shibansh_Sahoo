<?php
    $visitor_email=$_POST['email'];
    $message=$_POST['message'];

    $email_from='isthisneeded29@gmail.com';
    $email_subject="New Form Submission";
    $email_body="User Email:$visitor_email \n".
                    "User Message:$message";
    $to="shibansh.w@gmail.com";
    $headers= "From: $email_from \r\n";
    $headers="Reply-To:$visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);
    header("Location: hireme.html");

?>