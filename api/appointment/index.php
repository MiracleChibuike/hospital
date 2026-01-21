  <!-- Entery point for Appointment request  -->

  <?php
  require dirname(__DIR__) . '/index.php';
  session_start();

  $requestMethod = $_SERVER['REQUEST_METHOD'];

  $pId = $_GET['pId'] ?? '';
  $adminId = $_GET['adminId'] ?? '';

  $request = isset($_GET['request']) ? $_GET['request'] : '';

  $appointment = new Appointment($database);

  switch ($requestMethod) {
    case 'POST':
      require_once dirname(__DIR__) . '/appointment/postModel.php';
      break;
    case 'GET':
      require_once dirname(__DIR__) . '/appointment/getModel.php';
      break;
    case 'PUT':
      require_once dirname(__DIR__) . '/appointment/putModel.php';
      break;
    case 'DELETE':
      require_once dirname(__DIR__) . '/appointment/deleteModel.php';
      break;
    default:
      Controller::methodNotAllowed();
      exit;
  }
