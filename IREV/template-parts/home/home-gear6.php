<?php
/**
 * Template Part: Home Gear6
 */

$gear6_header_title = get_field('gear6_header_title') ?: 'GEAR 06';
$gear6_header_icon = get_field('gear6_header_icon');
$gear6_title = get_field('gear6_title') ?: 'GET YOUR MUSCLE CAR IN THE WORLD OF AFFILIATE MARKETING Rev Up';
$gear6_button_text = get_field('gear6_button_text') ?: 'RAVE UP';
$gear6_background = get_field('gear6_background');
?>

<section class="home_gear6">
    <header class="home_gear_header">
        <span>[<?php echo esc_html($gear6_header_title); ?>]</span>
        <?php if ($gear6_header_icon): ?>
            <img src="<?php echo esc_url($gear6_header_icon['url']); ?>" alt="<?php echo esc_attr($gear6_header_icon['alt'] ?: $gear6_header_icon['title'] ?: $gear6_header_title); ?>" />
        <?php else: ?>
            <img src="<?php echo esc_url(get_theme_file_uri('src/icons/gear6.svg')); ?>" alt="<?php echo esc_attr($gear6_header_title); ?>" />
        <?php endif; ?>
    </header>
    <div class="home_gear6_container">
        <h2><?php echo esc_html($gear6_title); ?></h2>
        <button class="open_modal"><?php echo esc_html($gear6_button_text); ?></button>
        <?php if ($gear6_background): ?>
            <img src="<?php echo esc_url($gear6_background['url']); ?>" alt="<?php echo esc_attr($gear6_background['alt'] ?: $gear6_background['title'] ?: $gear6_title); ?>" />
        <?php else: ?>
            <img src="<?php echo esc_url(get_theme_file_uri('src/icons/gear6back.svg')); ?>" alt="<?php echo esc_attr($gear6_title); ?>" />
        <?php endif; ?>
    </div>
</section>