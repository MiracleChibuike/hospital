<?php class Controller
{
    public function __construct(private Gateway $gateway) {}

    public static function processRequest(string $method): bool
    {
        $requestMethods = ["GET", "POST", "PUT", "DELETE"];
        if (!in_array($method, $requestMethods)) {
            return false;
        } else {
            return true;
            // switch ($method) {
            //     case "GET":
            //         // Handle GET request
            //         return true;
            //     case "POST":
            //         // Handle POST request
            //         return true;
            //     case "PUT":
            //         // Handle PUT request
            //         return true;
            //     case "DELETE":
            //         // Handle DELETE request
            //         return true;
            //     default:
            //         self::methodNotAllowed();
            //         return false;
            // }
        }
    }

    public static function methodNotAllowed(): void
    {
        http_response_code(405);
        header("Allow: Request Method Not Allowed");
    }

    public static function requestRespond(int $code, string $message, $data = null): void
    {
        // header("HTTP/1.0 " . $code . " " . $message);
        http_response_code($code);
        echo json_encode(["message" => $message, "data" => $data]);
    }
}
