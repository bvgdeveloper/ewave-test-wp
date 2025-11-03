<?php
/**
 * Template Part: Home Gear2
 */

$gear2_header_title = get_field('gear2_header_title') ?: 'GEAR 02';
$gear2_header_icon = get_field('gear2_header_icon');
$gear2_title = get_field('gear2_title') ?: 'Global growth in the fast lane';
$gear2_partners = get_field('gear2_partners');
$gear2_background_image = get_field('gear2_background_image');
$gear2_nitro_image = get_field('gear2_nitro_image');
$gear2_bottom_text = get_field('gear2_bottom_text') ?: 'IT UP WITH IREV';
$gear2_button_text = get_field('gear2_button_text') ?: 'HIT GAS';

// Fallback partners
$default_partners = [
    ['partner_name' => 'Rainmaker'],
    ['partner_name' => 'OX Tech'],
    ['partner_name' => 'Scale Final'],
    ['partner_name' => 'Exness'],
    ['partner_name' => 'Bulls Media'],
    ['partner_name' => 'Play Partners']
];

$partners = !empty($gear2_partners) ? $gear2_partners : $default_partners;
?>

<section class="home_gear2">
    <header class="home_gear_header">
        <span>[<?php echo esc_html($gear2_header_title); ?>]</span>
        <?php if ($gear2_header_icon): ?>
            <img src="<?php echo esc_url($gear2_header_icon['url']); ?>" alt="<?php echo esc_attr($gear2_header_icon['alt'] ?: $gear2_header_icon['title'] ?: $gear2_header_title); ?>" />
        <?php else: ?>
            <img src="<?php echo esc_url(get_theme_file_uri('src/icons/gear2.svg')); ?>" alt="<?php echo esc_attr($gear2_header_title); ?>" />
        <?php endif; ?>
    </header>
    <div class="home_gear2_upper_container">
        <h2><?php echo esc_html($gear2_title); ?></h2>
        <div class="home_gear2_upper_back">
            <div class="home_gear2_upper_credits">
                <div class="credits_scroll">
                    <div class="credits_track">
                        <div class="credits_group">
                            <?php foreach ($partners as $partner): ?>
                                <span><?php echo esc_html($partner['partner_name']); ?></span>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>
            <?php if ($gear2_background_image): ?>
                <img src="<?php echo esc_url($gear2_background_image['url']); ?>" alt="<?php echo esc_attr($gear2_background_image['alt'] ?: $gear2_background_image['title'] ?: $gear2_title); ?>" />
            <?php else: ?>
                <img src="<?php echo esc_url(get_theme_file_uri('src/icons/homegear2back.svg')); ?>" alt="<?php echo esc_attr($gear2_title); ?>" />
            <?php endif; ?>
        </div>
    </div>
    <div class="home_gear2_lower_container">
        <div class="home_gear2_lower_container_nitro">
            <div class="nitro-effect">
                <?php if ($gear2_nitro_image): ?>
                    <img src="<?php echo esc_url($gear2_nitro_image['url']); ?>" alt="<?php echo esc_attr($gear2_nitro_image['alt'] ?: $gear2_nitro_image['title'] ?: 'Nitro effect'); ?>" />
                <?php else: ?>
                    <img src="<?php echo esc_url(get_theme_file_uri('src/icons/nitro.png')); ?>" alt="Nitro effect" />
                <?php endif; ?>
            </div>
            <span class="home_gear2_lower_container_rev">R-R-REV</span>
        </div>
        <div class="home_gear2_lower_container_lower_wrapper">
            <span><?php echo esc_html($gear2_bottom_text); ?></span>
            <button><?php echo esc_html($gear2_button_text); ?></button>
        </div>
    </div>
</section>