<?php class Controller
{
    public function __construct() {}

    public static function processRequest(string $method): bool
    {
        $requestMethods = ["GET", "POST", "PUT", "DELETE"];

        if (!in_array($method, $requestMethods)) {
            return false;
        } else {
            return true;
        }
    }

    public static function methodNotAllowed(): void
    {
        http_response_code(405);
        echo json_encode(["message" => "Request Method Not Allowed"]);
    }

    public static function requestRespond(int $code, string $message, $data = null): void
    {
        // header("HTTP/1.0 " . $code . " " . $message);
        http_response_code($code);
        echo $data === null ? json_encode(["message" => $message]) : json_encode(["message" => $message, "data" => $data]);
    }
}
