<?php require dirname(__DIR__, 2) . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__, 2));
$dotenv->load();
set_error_handler('ErrorHandler::handleError');
set_exception_handler('ErrorHandler::handleException');
header("Content-type: application/json; charset=UTF-8");

$requstMethod = $_SERVER['REQUEST_METHOD'];

$request = $_GET['request'] ?? '';

$database = new Database(
  $_ENV["DB_HOST"],
  $_ENV["DB_NAME"],
  $_ENV["DB_USER"],
  $_ENV["DB_PASS"]
);

if (Controller::processRequest($requstMethod)) {

  $user = new Patient($database);
  if ($request === "" || $request === null) {
    Controller::requestRespond(400, "No endpoint specified");
    exit;
  }

  if ($request === "login" || $request === "register") {
    Authenticate::authenticateRootAPIKey() && require $request . '.php';
  } else {
    Authenticate::authenticateUserAPIKey() && require $request . '.php';
  }
} else {
  Controller::methodNotAllowed();
}
