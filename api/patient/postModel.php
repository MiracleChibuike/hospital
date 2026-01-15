<?php
require dirname(__DIR__) . '/index.php';

header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods,Content-Type, Authorization");

$_SERVER['REQUEST_METHOD'] !== 'POST' ? Controller::notFound() : null;
!isset($request) ? Controller::notFound() : null;

switch ($request) {
  case 'login':
    // Authenticate::authenticateRootAPIKey(); Authenticate Root API KEY for login

    if (isset($_SESSION['patient_id'])) {
      Controller::requestRespond(200, "Patient already logged in");
      exit;
    }

    $input =  json_decode(file_get_contents('php://input'), true) ?? $_POST;

    if (empty($input)) {
      Controller::requestRespond(400, "All fields are required");
      exit;
    }

    $result = $user->login($input['email'], $input['password']);
    $result ? Controller::requestRespond(200, "Login successful", $result) : Controller::requestRespond(401, "Invalid username or password");
    $result ? $_SESSION['patient_id'] = $result['patient_id'] : null;
    $result ? $_SESSION['xToken'] = $result['xToken'] : null;
    break;

  case 'register':
    // Authenticate::authenticateRootAPIKey(); Authenticate Root API KEY for registration
    $input = json_decode(file_get_contents('php://input'), true) ?? $_POST;
    if (empty($input)) {
      Controller::requestRespond(400, "All fields are required");
      exit;
    }
    if ($user->checkEmailExists($input['email'])) {
      Controller::requestRespond(409, "Email already exists");
      exit;
    }

    // if ($user->checkUsernameExists($input['username'])) {
    //   Controller::requestRespond(409, "Username already exists");
    //   exit;
    // }

    if (!$user->validateEmail($input['email'])) {
      Controller::requestRespond(400, "Invalid email format");
      exit;
    }

    if ($user->passwordCheck($input['password'])) {
      Controller::requestRespond(400, "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character");
      exit;
    }

    if (!$user->passwordMatch($input['password'], $input['confirm_password'])) {
      Controller::requestRespond(400, "Passwords do not match");
      exit;
    }

    $result = $user->register($input);
    $result ? Controller::requestRespond(201, "Patient registered successfully") : Controller::requestRespond(500, "Registration failed");
    break;

  case 'logout':
    $user->logout($_SESSION['patient_id']);
    Controller::requestRespond(200, "Logout successful");
    break;

  case 'add_medical_history':
    // Authenticate::authenticateUserAPIKey(); Authenticate User API KEY for adding medical history
    if (isset($pId) && is_numeric($pId)) {
      $patientId = $pId;
      $input = (array) json_decode(file_get_contents('php://input'), true) ?? $_POST;

      if (empty($input)) {
        Controller::requestRespond(400, "All fields are required");
        exit;
      }

      $result = $user->addMedicalHistory($patientId, $input);
      !$result ? Controller::requestRespond(500, "Failed to add medical history") : Controller::requestRespond(201, "Medical history added successfully");
    }
    break;

  case 'add_emergency_contact':
    // Authenticate::authenticateUserAPIKey(); Authenticate User API KEY for adding emergency contact
    if (isset($pId) && is_numeric($pId)) {
      $patientId = $pId;
      $input = (array) json_decode(file_get_contents('php://input'), true) ?? $_POST;

      if (empty($input) || !isset($input['emergency_contact_id'])) {
        Controller::requestRespond(400, "All fields are required");
        exit;
      }

      $result = $user->assignEmergencyContactId($patientId, $input['emergency_contact_id']);
      !$result ? Controller::requestRespond(500, "Failed to add emergency contact") : Controller::requestRespond(201, "Emergency contact added successfully");
    }
    break;
  case 'set_otp':
    $input = (array) json_decode(file_get_contents('php://input'), true) ?? $_POST;
    if (empty($input) || !isset($input['email']) || !isset($input['otp'])) {
      Controller::requestRespond(400, "Email and OTP are required");
      exit;
    }

    $result = $user->setTempOTP($input['email'], $input['otp']);
    !$result ? Controller::requestRespond(500, "Failed to set OTP") : Controller::requestRespond(200, "OTP set successfully");
    break;
  default:
    Controller::requestRespond(400, "Bad post Request");
}
