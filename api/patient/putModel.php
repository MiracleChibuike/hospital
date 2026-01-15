<?php
require dirname(__DIR__) . '/index.php';

header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods,Content-Type, Authorization");

$_SERVER['REQUEST_METHOD'] !== 'PUT' ? Controller::notFound() : null;
!isset($request) ? Controller::notFound() : null;


switch ($request) {
  case 'update_medical_history':
    // Authenticate::authenticateUserAPIKey(); Authenticate User API KEY for updating medical history
    if (isset($pId) && is_numeric($pId)) {
      $patientId = $pId;
      $input = json_decode(file_get_contents('php://input'), true) ?? $_POST;

      if (empty($input)) {
        Controller::requestRespond(400, "All fields are required");
        exit;
      }

      $result = $user->updateMedicalHistory($patientId, $input);
      !$result ? Controller::requestRespond(500, "Failed to update medical history") : Controller::requestRespond(200, "Medical history updated successfully");
    }
    break;

  case 'update_profile':
    // Authenticate::authenticateUserAPIKey(); Authenticate User API KEY for updating profile
    if (isset($pId) && is_numeric($pId)) {
      $patientId = $pId;
      $input = json_decode(file_get_contents('php://input'), true) ?? $_POST;

      if (empty($input)) {
        Controller::requestRespond(400, "All fields are required");
        exit;
      }

      $result = $user->updateProfile($patientId, $input);
      !$result ? Controller::requestRespond(500, "Failed to update profile") : Controller::requestRespond(200, "Profile updated successfully");
    }
  default:
    Controller::requestRespond(400, "Bad put Request");
}
