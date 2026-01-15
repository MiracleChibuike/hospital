<?php
require dirname(__DIR__) . '/index.php';

header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods,Content-Type, Authorization");

$_SERVER['REQUEST_METHOD'] !== 'GET' ? Controller::notFound() : null;
!isset($request) ? Controller::notFound() : null;


switch ($request) {
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
