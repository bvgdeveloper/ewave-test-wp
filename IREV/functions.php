<?php
require_once get_template_directory() . '/inc/assets.php';
require_once get_template_directory() . '/inc/walkers.php';

//Temporally
add_filter('wpcf7_autop_or_not', '__return_false');


add_action('after_setup_theme', static function () {
    add_theme_support('menus');
    register_nav_menus(array(
        'header-menu' => __('Header'),
        'footer-menu' => __('Footer'),
        'social-menu' => __('Social Media')
    ));
});