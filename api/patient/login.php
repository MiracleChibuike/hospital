<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  Controller::methodNotAllowed();
  exit;
}

$inputData = json_decode(file_get_contents("php://input"), true) ?? $_POST;

if (empty($inputData)) {
  Controller::requestRespond(400, "Invalid email or password");
  exit;
} else {
  $email = $inputData['email'] ?? '';
  $password = $inputData['password'] ?? '';

  if (empty($email) || empty($password)) {
    Controller::requestRespond(400, "Email and Password are required");
    exit;
  }

  // $user = new Patient();
  $result = $user->login($email, $password);

  if ($result) {
    // Generate and store a simple token for the session, then return it in the response
    $token = bin2hex(random_bytes(16));
    $_SESSION['xToken'] = $token;
    Controller::requestRespond(200, "Login successful", array_push($result, ['token' => $token]));
    exit;
  } else {
    Controller::requestRespond(401, "Invalid email or password");
    exit;
  }
}
