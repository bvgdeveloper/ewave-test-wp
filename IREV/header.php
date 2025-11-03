<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="header">
    <div class="header_wrapper">
        <div>
            <img class="header_logo" src="<?php echo esc_url(get_theme_file_uri('src/icons/logo.svg')); ?>"
                 alt="irev logo"/>
        </div>
        <nav class="header_nav header_nav--horizontal">
            <?php
            $header_walker = new Header_Walker();
            wp_nav_menu(array(
                'theme_location' => 'header-menu',
                'container' => false,
                'items_wrap' => '%3$s',
                'walker' => $header_walker
            ));
            echo $header_walker->get_dropdown_html();
            ?>
        </nav>
        <button class="header_signIn">
            Sign In
        </button>
        <button class="header_hamburger">
            <img src="<?php echo esc_url(get_theme_file_uri('src/icons/hamburgerIcon.svg')); ?>"
                 alt="hamburger"
            />
        </button>
    </div>
</header>