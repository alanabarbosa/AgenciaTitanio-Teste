<?php
$host = 'teste_mysql'; 
$port = '3306';
$db   = 'teste_dev';
$user = 'root';
$pass = 'root';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $nome = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $website = $_POST['site'] ?? '';

    $sql = "INSERT INTO leads (first_name, email, phone, website) 
            VALUES (:first_name, :email, :phone, :website)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':first_name' => $nome,
        ':email' => $email,
        ':phone' => $phone,
        ':website' => $website
    ]);

    echo "✅ Dados salvos com sucesso!";
} catch (PDOException $e) {
    echo "❌ Erro: " . $e->getMessage();
}
?>
