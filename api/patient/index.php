<?php require dirname(__DIR__) . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__));
$dotenv->load();
set_error_handler('ErrorHandler::handleError');
set_exception_handler('ErrorHandler::handleException');
header("Content-type: application/json; charset=UTF-8");

$requstMethod = $_SERVER['REQUEST_METHOD'];

$request = $_GET['request'] ?? '';

if (Controller::processRequest($requstMethod)) {
  new Database(
    $_ENV["DB_HOST"],
    $_ENV["DB_NAME"],
    $_ENV["DB_USER"],
    $_ENV["DB_PASS"]
  );

  $user = new Patient();

  if ($request === "login" || $request === "register") {
    Authenticate::authenticateRootAPIKey() && require $request . '.php';
  } else {
    Authenticate::authenticateUserAPIKey() && require $request . '.php';
  }
} else {
  Controller::methodNotAllowed();
}
