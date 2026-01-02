<?php

switch ($requstMethod) {
  case "GET":
    // Handle GET request
    return true;
  case "POST":
    // Handle POST request
    return true;
  case "PUT":
    // Handle PUT request
    return true;
  case "DELETE":
    // Handle DELETE request
    return true;
  default:
    self::methodNotAllowed();
    return false;
}
