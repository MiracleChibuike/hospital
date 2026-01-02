<?php require dirname(__DIR__) . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__));
$dotenv->load();

set_error_handler('ErrorHandler::handleError');
set_exception_handler('ErrorHandler::handleException');


header("Content-type: application/json; charset=UTF-8");

$database = new Database(
    $_ENV["DB_HOST"],
    $_ENV["DB_NAME"],
    $_ENV["DB_USER"],
    $_ENV["DB_PASS"]
);



// $user = new User($database);

// $auth = new Authenticate($user);

// if (!$auth->authenticateAPIKey()) {
//     exit;
// }

// $gateway = new Gateway($database);

// $controller = new Controller($gateway);



// $controller->processRequest($_SERVER['REQUEST_METHOD']);
