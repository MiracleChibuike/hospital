<?php
class Authenticate
{
    public function __construct(private User $user) {}

    public function authenticateAPIKey(): bool
    {

        if (empty($_SERVER['HTTP_X_API_KEY'])) {
            http_response_code(400);
            echo json_encode(["message" => "missing api key"]);
            return false;
        }

        $api_key = $_SERVER['HTTP_X_API_KEY'];

        $user = $this->user->getByAPIKey($api_key);

        if ($user === false) {

            http_response_code(401);
            echo json_encode(["message" => "invalid API key"]);
            return false;
        }


        return true;
    }
}
