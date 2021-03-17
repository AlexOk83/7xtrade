<?php

	function getIP() {
        $array_ip = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        $ip = $array_ip[0];

		return $ip;
	}

	if(!in_array(
		getIP(), 
		array(
			'136.243.38.147', 
			'136.243.38.149', 
			'136.243.38.150', 
			'136.243.38.151', 
			'136.243.38.189', 
			'136.243.38.108'
		)
	)) die("Attempted hacking!");
		
	$data = $_POST;
	
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, '/api/payment/notice');
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_TIMEOUT, 10);
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	$result = trim(curl_exec($ch));
	$c_errors = curl_error($ch);
	curl_close($ch);