<?php // public assets path
$assets = '../../public/assets/';
?>
<!doctype html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Title</title>
    <meta name="description" content="Description of page" />
    <meta name="keywords" content="site, website, logo"/>
    <script>
        /* to prevent Firefox FOUC, this must be here */
        let FF_FOUC_FIX;
    </script>
    <link rel="stylesheet" href="<?= $assets ?>tailwind.css">
    <link rel="stylesheet" href="<?= $assets ?>style.css">
    <link rel="stylesheet" href="<?= $assets ?>icons.css">
    <script src="<?= $assets ?>bundle.js" type="module"></script>
    <script>
        // Helper function
        let domReady = (cb) => {
        	document.readyState === 'interactive' || document.readyState === 'complete' ? cb() : document.addEventListener('DOMContentLoaded', cb);
        };

        domReady(() => {
	        // Display body when DOM is loaded
	        document.body.style.visibility = 'visible';
        });
    </script>
</head>
<body class="group/body overflow-x-hidden" style="visibility: hidden">
<script>0</script>
