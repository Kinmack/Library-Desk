<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

function app_config_value($name, $default)
{
    $value = getenv($name);
    if ($value !== false) {
        return $value;
    }

    if (isset($_SERVER[$name])) {
        return (string) $_SERVER[$name];
    }

    if (isset($_ENV[$name])) {
        return (string) $_ENV[$name];
    }

    return $default;
}

if (!defined('APP_URL')) {
    define('APP_URL', rtrim(app_config_value('APP_URL', '/library-system'), '/'));
}

function e($value)
{
    return htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
}

function url($path = '')
{
    return rtrim(APP_URL, '/') . ($path === '' ? '' : '/' . ltrim($path, '/'));
}

function redirect($path)
{
    header('Location: ' . url($path));
    exit;
}

function set_flash($type, $message)
{
    $_SESSION['flash'] = ['type' => $type, 'message' => $message];
}

function get_flash()
{
    if (!isset($_SESSION['flash'])) {
        return null;
    }

    $message = $_SESSION['flash'];
    unset($_SESSION['flash']);
    return $message;
}

function csrf_token()
{
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }

    return $_SESSION['csrf_token'];
}

function verify_csrf()
{
    $token = $_POST['csrf_token'] ?? '';
    if (!is_string($token) || !hash_equals(csrf_token(), $token)) {
        http_response_code(400);
        exit('Invalid form submission. Please go back and try again.');
    }
}