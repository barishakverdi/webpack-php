const fs = require('fs');
const path = require('path');

// Değiştirilmesi gereken dosya
const filePath = path.join(__dirname, 'src/layout/head.php');

// Watch komutunda kullanılacak içerik
const watchContent = `
<link rel="stylesheet" href="/public/assets/tailwind.css">
<link rel="stylesheet" href="/public/assets/style.css">
`;
// Build komutunda kullanılacak içerik
const buildContent = `
<link rel="stylesheet" href="/public/assets/tailwind.min.css">
<link rel="stylesheet" href="/public/assets/style.min.css">
`;

// Dosya içeriğini okuma
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Dosya okunurken hata oluştu:', err);
        return;
    }

    // Build veya Watch moduna göre içeriği güncelle
    const updatedContent = process.env.MODE === 'build'
        ? data.replace(watchContent.trim(), buildContent.trim())
        : data.replace(buildContent.trim(), watchContent.trim());

    // Dosya içeriğini güncelleme
    fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
        if (err) {
            console.error('Dosya yazılırken hata oluştu:', err);
            return;
        }
        console.log('head.php dosyası başarıyla güncellendi!');
    });
});
