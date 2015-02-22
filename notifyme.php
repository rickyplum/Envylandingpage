<?php
	if ( isset( $_POST['notify_me'] ) ) {
		// Initialize error array
		$notify_errors = array();

		// Check email input field
		if ( trim( $_POST['cpEmail'] ) === '' )
			$notify_errors[] = 'Email address is required';
		else
			$user_email = trim( $_POST['cpEmail'] );

		// Send email if no input errors
		if ( empty( $notify_errors ) ) {
			$email_to = "opportunities@envybranding.com"; // Change to your own email address
			$headers = 'From:'. $user_email;
			$subject = "Notify me at launch";
			$body = $user_email . " wants to be notified at launch."."\r\n";
			mail( $email_to, $subject, $body, $headers );
			echo 'Thank you for subscribing!';
		} else {
			echo 'Please go back and correct the following errors:<br />';
			foreach ( $notify_errors as $error ) {
				echo $error . '<br />';
			}
		}
	}
?>