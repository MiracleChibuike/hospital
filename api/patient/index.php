  

<?php
require dirname(__DIR__) . '/index.php';
session_start();

$requestMethod = $_SERVER['REQUEST_METHOD'];

$pId = $_GET['pId'] ?? '';
$request = isset($_GET['request']) ? $_GET['request'] : '';

$user = new Patient($database);

switch ($requestMethod) {
  case 'POST':
    require_once dirname(__DIR__) . '/patient/postModel.php';
    break;
  case 'GET':
    require_once dirname(__DIR__) . '/patient/getModel.php';
    break;
  case 'PUT':
    require_once dirname(__DIR__) . '/patient/putModel.php';
    break;
  case 'DELETE':
    require_once dirname(__DIR__) . '/patient/deleteModel.php';
    break;
  default:
    Controller::methodNotAllowed();
    exit;
}
