const fs = require('fs');
const path = require('path');

// Dosya yolları
const tailwindCssPath = path.join(__dirname, 'public/assets/tailwind.css');
const tailwindMinCssPath = path.join(__dirname, 'public/assets/tailwind.min.css');
const styleCssPath = path.join(__dirname, 'public/assets/style.css');
const styleMinCssPath = path.join(__dirname, 'public/assets/style.min.css');

// Silinecek dosyaları seç
const filesToDelete = process.env.MODE === 'build'
    ? [tailwindCssPath, styleCssPath]
    : [tailwindMinCssPath, styleMinCssPath];

// Dosya silme işlemi
filesToDelete.forEach(fileToDelete => {
    fs.unlink(fileToDelete, (err) => {
        if (err && err.code !== 'ENOENT') {
            console.error(`${fileToDelete} silinirken hata oluştu:`, err);
            return;
        }
        console.log(`${fileToDelete} başarıyla silindi veya dosya bulunamadı.`);
    });
});
