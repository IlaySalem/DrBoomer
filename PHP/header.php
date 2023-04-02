<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>Dr.Boomer</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="yandex-verification" content="136e4e34e40e8d87" />
	<meta name='wmail-verification' content='f78f9551723bbb835eb41427a8019062' />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
	<meta name="description" content="Автосервис BMW и MINI, самый качественный ремонт на КМВ">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="Keywords" content="BMW, MINI, КМВ автосервис, автосервис, ремонт, авто, купить запчасти, ТО, КМВ, Ессентуки, Пятигорск, Кисловодск">
    <meta name="Author" content="Ilay Salem">


	<link rel="shortcut icon" href="favicon.png" />
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/libs/bootstrap/bootstrap-grid.min.css" />
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/libs/font-awesome/css/font-awesome.min.css" />
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/libs/linea/styles.css" />
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/libs/magnific-popup/magnific-popup.css" />
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/libs/animate/animate.min.css" />
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/fonts.css" />
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/main.css" />
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/skins/purple.css" />
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/media.css" />

	<link rel="stylesheet" href="libs/bootstrap/bootstrap-grid.min.css" />
	<link rel="stylesheet" href="libs/font-awesome/css/font-awesome.min.css" />
	<link rel="stylesheet" href="libs/linea/styles.css" />
	<link rel="stylesheet" href="libs/magnific-popup/magnific-popup.css" />
	<link rel="stylesheet" href="libs/animate/animate.min.css" />
	<link rel="stylesheet" href="css/fonts.css" />
	<link rel="stylesheet" href="css/main.css" />
	<link rel="stylesheet" href="css/skins/purple.css" />
	<link rel="stylesheet" href="css/media.css" />
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/libs/owlcarousel/owl.carousel.css" />
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/libs/owlcarousel/owl.theme.css" />
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/libs/owlcarousel/owl.transitions.css" />

<?php wp_head(); ?>

</head>
<body>
	<?php include_once("analyticstracking.php") ?>
	<div class="loader">
		<div class="loader_inner"></div>
	</div>

	<header class="main_head main_color_bg" data-parallax="scroll" data-image-src="<?php echo get_template_directory_uri(); ?>/img/bg.jpg" data-z-index="1">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="logo_container">
						<?php dynamic_sidebar('logo'); ?>
				</div>
				<button class="toggle_mnu">
					<span class="sandwich">
						<span class="sw-topper"></span>
						<span class="sw-bottom"></span>
						<span class="sw-footer"></span>
					</span>
				</button>
				<nav class="top_mnu">
					<ul>
						<li><a href="#about">О Нас</a></li>
						<li><a href="#portfolio">Наши сертификаты</a></li>
						<li><a href="#resume">Услуги</a></li>
						<li><a href="#contacts">Контакты</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
	<div class="top_wrapper">
		<div class="top_descr">
			<div class="top_centered">
				<div class="top_text">
					<h1>Dr.Boomer</h1>
					<p>Автосервис BMW / MINI</p>
				</div>
			</div>
		</div>
	</div>
</header>