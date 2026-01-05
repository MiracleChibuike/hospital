  

<?php
require dirname(__DIR__) . '/index.php';

$requestMethod = $_SERVER['REQUEST_METHOD'];

$request = isset($_GET['request']) ? $_GET['request'] : '';

$pId = $_GET['pId'] ?? '';


$user = new Patient($database);

if ($requestMethod === "POST") {
  switch ($_GET['request']) {
    case 'login':
      // Authenticate::authenticateRootAPIKey(); Authenticate Root API KEY for login
      $input = (array) json_decode(file_get_contents('php://input'), true) ?? $_POST;

      if (empty($input)) {
        Controller::requestRespond(400, "All fields are required");
        exit;
      }

      $result = $user->login($input['email'], $input['password']);
      $result ? Controller::requestRespond(200, "Login successful") : Controller::requestRespond(401, "Invalid username or password");
      break;

    case 'register':
      // Authenticate::authenticateRootAPIKey(); Authenticate Root API KEY for registration
      $input = (array) json_decode(file_get_contents('php://input'), true) ?? $_POST;
      if (empty($input)) {
        Controller::requestRespond(400, "All fields are required");
        exit;
      }
      if (!$user->checkEmailExists($input['email'])) {
        Controller::requestRespond(409, "Email already exists");
        exit;
      }

      if (!$user->checkUsernameExists($input['username'])) {
        Controller::requestRespond(409, "Username already exists");
        exit;
      }

      if (!$user->validateEmail($input['email'])) {
        Controller::requestRespond(400, "Invalid email format");
        exit;
      }

      if (!$user->passwordCheck($input['password'])) {
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
      $user->logout($pId);
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
    default:
      Controller::requestRespond(400, "Bad post Request");
  }
} elseif ($requestMethod === "GET") {
  switch ($_GET['request']) {
    case 'get_emergency_contact':
      if (isset($pId) && is_numeric($pId)) {
        $patientId = $pId;
        $data = $user->getEmergencyContact($patientId);
        !$data ? Controller::requestRespond(404, "No emergency contact found for the patient") : Controller::requestRespond(200, "Emergency contact retrieved successfully", $data);
      } else {
        Controller::requestRespond(400, "Patient ID is required");
      }
      break;
    case 'get_profile':
      if (isset($pId) && is_numeric($pId)) {
        $patientId = $pId;
        $data = $user->getPatientById($patientId);
        !$data ? Controller::requestRespond(404, "Patient not found") : Controller::requestRespond(200, "Patient profile retrieved successfully", $data);
      } else {
        Controller::requestRespond(400, "Patient ID is required");
      }
      break;
    case 'get_medical_history':
      if (isset($pId) && is_numeric($pId)) {
        $patientId = $pId;
        $data = $user->getMedicalHistory($patientId);
        !$data ? Controller::requestRespond(404, "No medical history found for the patient") : Controller::requestRespond(200, "Medical history retrieved successfully", $data);
      } else {
        Controller::requestRespond(400, "Patient ID is required");
      }
      break;
    default:
      Controller::requestRespond(400, "Bad get Request");
  }
} elseif ($requestMethod === "PUT") {
  // PUT request handling can be added here
} elseif ($requestMethod === "DELETE") {
  // DELETE request handling can be added here
} else {
  Controller::methodNotAllowed();
  exit;
}
