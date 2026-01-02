<?php
class Authenticate
{
    public function __construct() {}

    // API Key authentication for regular users (patients, doctors, admins, etc.)
    public static function authenticateUserAPIKey(): bool
    {

        if (empty($_SERVER['HTTP_X_API_KEY'])) {
            Controller::requestRespond(400, "missing api key");
            return false;
        }

        $api_key = $_SERVER['HTTP_X_API_KEY'];

        if (User::getByAPIKey($api_key) === false) {
            Controller::requestRespond(401, "invalid API key");
            return false;
        } else {
            return true;
        }
    }

    // Use this method to authenticate root API key when a new user is sending a createaccount request
    public static function authenticateRootAPIKey(): bool
    {

        if (empty($_SERVER['HTTP_X_API_KEY'])) {
            Controller::requestRespond(400, "missing api key");
            return false;
        }

        $api_key = $_SERVER['HTTP_X_API_KEY'];

        if ($_ENV['ROOT_KEY'] !== $api_key) {
            Controller::requestRespond(401, "invalid API key");
            return false;
        } else {
            return true;
        }
    }
}
