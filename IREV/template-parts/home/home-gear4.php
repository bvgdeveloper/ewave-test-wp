<?php
/**
 * Template Part: Home Gear4
 */

$gear4_header_title = get_field('gear4_header_title') ?: 'GEAR 04';
$gear4_header_icon = get_field('gear4_header_icon');
$gear4_award_stars = get_field('gear4_award_stars');
$gear4_award_icon = get_field('gear4_award_icon');
$gear4_award_title = get_field('gear4_award_title') ?: 'SIGMA Award Winner';
$gear4_award_subtitle = get_field('gear4_award_subtitle') ?: 'Best marketing solution provider 2024';
$gear4_industries_title = get_field('gear4_industries_title') ?: 'Built for high-performance industries';
$gear4_industries = get_field('gear4_industries');
$gear4_background = get_field('gear4_background');
$gear4_bottom_logo = get_field('gear4_bottom_logo');

// Fallback industries
$default_industries = [
    ['industry_upper' => 'IGAMING', 'industry_number' => '[1]', 'industry_lower' => 'COINS', 'industry_lower_number' => '[2]'],
    ['industry_upper' => 'FINANCE', 'industry_number' => '[3]', 'industry_lower' => 'E-COMMERCE', 'industry_lower_number' => '[4]'],
    ['industry_upper' => 'DATING', 'industry_number' => '[5]', 'industry_lower' => '', 'industry_lower_number' => '', 'is_last' => true]
];

$industries = !empty($gear4_industries) ? $gear4_industries : $default_industries;

// Default 4 stars
$stars_count = !empty($gear4_award_stars) ? intval($gear4_award_stars) : 4;
?>

<section class="home_gear4">
    <header class="home_gear_header">
        <span>[<?php echo esc_html($gear4_header_title); ?>]</span>
        <?php if ($gear4_header_icon): ?>
            <img src="<?php echo esc_url($gear4_header_icon['url']); ?>"
                 alt="<?php echo esc_attr($gear4_header_icon['alt'] ?: $gear4_header_icon['title'] ?: $gear4_header_title); ?>"/>
        <?php else: ?>
            <img src="<?php echo esc_url(get_theme_file_uri('src/icons/gear4.svg')); ?>"
                 alt="<?php echo esc_attr($gear4_header_title); ?>"/>
        <?php endif; ?>
    </header>
    <div class="home_gear4_container">
        <?php for ($i = 1; $i <= $stars_count; $i++): ?>
            <img class="star<?php echo $i; ?>"
                 src="<?php echo esc_url(get_theme_file_uri('src/icons/gear4star.svg')); ?>" alt="Award star"/>
        <?php endfor; ?>

        <?php if ($gear4_award_icon): ?>
            <img src="<?php echo esc_url($gear4_award_icon['url']); ?>"
                 alt="<?php echo esc_attr($gear4_award_icon['alt'] ?: $gear4_award_icon['title'] ?: $gear4_award_title); ?>"/>
        <?php else: ?>
            <img src="<?php echo esc_url(get_theme_file_uri('src/icons/gear4award.svg')); ?>"
                 alt="<?php echo esc_attr($gear4_award_title); ?>"/>
        <?php endif; ?>

        <div class="text_wrapper">
            <span class="text_main"><?php echo esc_html($gear4_award_title); ?></span>
            <span class="text_additional"><?php echo esc_html($gear4_award_subtitle); ?></span>
        </div>
    </div>

    <div class="home_gear4_lower_container">
        <h2><?php echo esc_html($gear4_industries_title); ?></h2>
        <div class="home_gear4_lower_label_wrapper">
            <?php foreach ($industries as $index => $industry): ?>
                <?php if ($index > 0): ?>
                    <div class="border_link"></div>
                <?php endif; ?>

                <div class="label <?php echo !empty($industry['is_last']) ? 'third' : ''; ?>">
                    <div class="label_upper"><?php echo esc_html($industry['industry_upper']); ?><?php echo esc_html($industry['industry_number']); ?></div>
                    <div class="border">
                        <?php if ($index == 0): ?>
                            <div class="border_vertical">
                                <div class="upper_circle circle1"></div>
                                <div class="lower_circle circle2"></div>
                            </div>
                            <div class="border_horizontal"></div>
                        <?php elseif ($index == 1): ?>
                            <div class="border_horizontal"></div>
                            <div class="border_vertical second">
                                <div class="upper_circle circle3"></div>
                                <div class="lower_circle circle4"></div>
                            </div>
                            <div class="border_horizontal"></div>
                        <?php else: ?>
                            <div class="border_horizontal"></div>
                            <div class="border_vertical second">
                                <div class="upper_circle circle5"></div>
                            </div>
                        <?php endif; ?>
                    </div>
                    <div class="label_lower <?php echo !empty($industry['is_last']) ? 'last' : ''; ?>">
                        <?php if (!empty($industry['is_last'])): ?>
                            <?php if ($gear4_bottom_logo): ?>
                                <img src="<?php echo esc_url($gear4_bottom_logo['url']); ?>"
                                     alt="<?php echo esc_attr($gear4_bottom_logo['alt'] ?: $gear4_bottom_logo['title'] ?: 'Logo'); ?>"/>
                            <?php else: ?>
                                <img src="<?php echo esc_url(get_theme_file_uri('src/icons/gear4logo.svg')); ?>"
                                     alt="Logo"/>
                            <?php endif; ?>
                        <?php else: ?>
                            <?php echo esc_html($industry['industry_lower']); ?><?php echo esc_html($industry['industry_lower_number']); ?>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <?php if ($gear4_background): ?>
            <img class="gear4back" src="<?php echo esc_url($gear4_background['url']); ?>"
                 alt="<?php echo esc_attr($gear4_background['alt'] ?: $gear4_background['title'] ?: $gear4_industries_title); ?>"/>
        <?php else: ?>
            <img class="gear4back" src="<?php echo esc_url(get_theme_file_uri('src/icons/gear4back.svg')); ?>"
                 alt="<?php echo esc_attr($gear4_industries_title); ?>"/>
        <?php endif; ?>
    </div>
</section>