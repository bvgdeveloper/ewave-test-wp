<?php
/**
 * Template Part: Home Gear3
 */

$gear3_header_title = get_field('gear3_header_title') ?: 'GEAR 03';
$gear3_header_icon = get_field('gear3_header_icon');
$gear3_title = get_field('gear3_title') ?: 'Hear from our satisfied partners';
$gear3_background = get_field('gear3_background');
$gear3_testimonials = get_field('gear3_testimonials');
$gear3_cases_title = get_field('gear3_cases_title') ?: 'PROVEN ON THE TRACK';
$gear3_cases_background = get_field('gear3_cases_background');
$gear3_left_case = get_field('gear3_left_case');
$gear3_right_case = get_field('gear3_right_case');

// Fallback testimonials
$default_testimonials = [
    ['client_id' => 'client1', 'name' => 'Ethan Miller', 'company' => 'bulls media', 'review' => 'text 1', 'avatar' => '', 'tooltip_name' => 'Ethan Miller'],
    ['client_id' => 'client2', 'name' => 'Brandon Carter', 'company' => 'bulls media', 'review' => 'text 2', 'avatar' => '', 'tooltip_name' => 'Brandon Carter'],
    ['client_id' => 'client3', 'name' => 'Emily Clarke', 'company' => 'bulls media', 'review' => 'text 3', 'avatar' => '', 'tooltip_name' => 'Emily Clarke'],
    ['client_id' => 'client4', 'name' => 'Daniel Gram', 'company' => 'bulls media', 'review' => 'IREV covers everything for the convenient and effective management of affiliate programs. We\'ve been very happy with the platform and support from day one. What comes to Lead Distribution tool, it became a game-changer for us. You wouldn\'t find the same convenience elsewhere.', 'avatar' => '', 'tooltip_name' => 'Daniel Gram', 'selected' => true],
    ['client_id' => 'client5', 'name' => 'Chloe Bennett', 'company' => 'bulls media', 'review' => 'text4', 'avatar' => '', 'tooltip_name' => 'Chloe Bennett'],
    ['client_id' => 'client6', 'name' => 'Dylan Cooper', 'company' => 'bulls media', 'review' => 'text 5', 'avatar' => '', 'tooltip_name' => 'Dylan Cooper']
];

$testimonials = !empty($gear3_testimonials) ? $gear3_testimonials : $default_testimonials;

// Fallback case studies
$default_left_case = [
    'company_name' => 'PLAY PARTNERS',
    'company_logo' => '',
    'company_description' => 'Bigger, faster, stronger – solutions for a modern business',
    'metrics' => [
        ['label' => 'FTDS', 'value' => 'x3.5 increase in FTDs in 6 months', 'icon' => ''],
        ['label' => 'CR', 'value' => 'x6 times CR increased', 'icon' => ''],
        ['label' => 'geos', 'value' => '150% increased in GEOS', 'icon' => '']
    ],
    'button_text' => 'read full case'
];

$default_right_case = [
    'company_name' => 'PLAY PARTNERS',
    'company_logo' => '',
    'company_description' => 'IGaming partnership launched in heaven',
    'metrics' => [
        ['label' => '750 %', 'value' => 'reduction in onboarding time'],
        ['label' => '$ 1-3 MLN', 'value' => 'discrepancy losses prevented'],
        ['label' => '20 +', 'value' => 'operators covered']
    ],
    'button_text' => 'read full case'
];

$left_case = !empty($gear3_left_case) ? $gear3_left_case : $default_left_case;
$right_case = !empty($gear3_right_case) ? $gear3_right_case : $default_right_case;
?>

<section class="home_gear3">
    <header class="home_gear_header">
        <span>[<?php echo esc_html($gear3_header_title); ?>]</span>
        <?php if ($gear3_header_icon): ?>
            <img src="<?php echo esc_url($gear3_header_icon['url']); ?>" alt="<?php echo esc_attr($gear3_header_icon['alt'] ?: $gear3_header_icon['title'] ?: $gear3_header_title); ?>" />
        <?php else: ?>
            <img src="<?php echo esc_url(get_theme_file_uri('src/icons/gear3.svg')); ?>" alt="<?php echo esc_attr($gear3_header_title); ?>" />
        <?php endif; ?>
    </header>
    <div class="home_gear3_container">
        <h2><?php echo esc_html($gear3_title); ?></h2>
        <?php if ($gear3_background): ?>
            <img class="home_gear3_background" src="<?php echo esc_url($gear3_background['url']); ?>" alt="<?php echo esc_attr($gear3_background['alt'] ?: $gear3_background['title'] ?: $gear3_title); ?>" />
        <?php else: ?>
            <img class="home_gear3_background" src="<?php echo esc_url(get_theme_file_uri('src/icons/gear3back.svg')); ?>" alt="<?php echo esc_attr($gear3_title); ?>" />
        <?php endif; ?>

        <div class="home_gear3_clients">
            <div class="home_gear3_clients_avatar">
                <?php foreach ($testimonials as $index => $testimonial): ?>
                    <div class="avatar-item <?php echo !empty($testimonial['selected']) ? 'selected' : ''; ?>">
                        <button data-trigger="<?php echo esc_attr($testimonial['client_id'] ?: 'client' . ($index + 1)); ?>">
                            <?php if (!empty($testimonial['avatar'])): ?>
                                <img src="<?php echo esc_url($testimonial['avatar']['url']); ?>" alt="<?php echo esc_attr($testimonial['avatar']['alt'] ?: $testimonial['avatar']['title'] ?: $testimonial['name']); ?>" />
                            <?php else: ?>
                                <img src="<?php echo esc_url(get_theme_file_uri('src/icons/avatar' . ($index + 1) . '.svg')); ?>" alt="<?php echo esc_attr($testimonial['name']); ?>" />
                            <?php endif; ?>
                        </button>
                        <div class="tooltip"><?php echo esc_html($testimonial['tooltip_name'] ?: $testimonial['name']); ?></div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>

        <div class="home_gear3_reviews">
            <?php foreach ($testimonials as $index => $testimonial): ?>
                <div class="home_gear3_reviews_review <?php echo !empty($testimonial['selected']) ? 'selected' : ''; ?>" data-client="<?php echo esc_attr($testimonial['client_id'] ?: 'client' . ($index + 1)); ?>">
                    <span><?php echo esc_html($testimonial['review']); ?></span>
                    <div class="client">
                        <?php if (!empty($testimonial['avatar'])): ?>
                            <img src="<?php echo esc_url($testimonial['avatar']['url']); ?>" alt="<?php echo esc_attr($testimonial['avatar']['alt'] ?: $testimonial['avatar']['title'] ?: $testimonial['name']); ?>" />
                        <?php else: ?>
                            <img src="<?php echo esc_url(get_theme_file_uri('src/icons/avatar4.svg')); ?>" alt="<?php echo esc_attr($testimonial['name']); ?>" />
                        <?php endif; ?>
                        <div class="client_info">
                            <span class="client_name"><?php echo esc_html($testimonial['name']); ?></span>
                            <span class="client_additional"><?php echo esc_html($testimonial['company']); ?></span>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>

    <div class="home_gear3_lower_container">
        <h2><?php echo esc_html($gear3_cases_title); ?></h2>
        <?php if ($gear3_cases_background): ?>
            <img class="back" src="<?php echo esc_url($gear3_cases_background['url']); ?>" alt="<?php echo esc_attr($gear3_cases_background['alt'] ?: $gear3_cases_background['title'] ?: $gear3_cases_title); ?>" />
        <?php else: ?>
            <img class="back" src="<?php echo esc_url(get_theme_file_uri('src/icons/gear3back2.svg')); ?>" alt="<?php echo esc_attr($gear3_cases_title); ?>" />
        <?php endif; ?>
        <div class="dashed_vertical"></div>
        <div class="dashed_horizontal"></div>
        <div class="lower_wrapper">
            <div class="home_gear3_lower_left">
                <div class="dashed_vertical"></div>
                <div class="label">
                    <?php /**
                     * @param $left_case
                     * @return mixed
                     */
                    function render_company_logo($left_case)
                    {
                        if (!empty($left_case['company_logo'])): ?>
                            <img src="<?php echo esc_url($left_case['company_logo']['url']); ?>"
                                 alt="<?php echo esc_attr($left_case['company_logo']['alt'] ?: $left_case['company_logo']['title'] ?: $left_case['company_name']); ?>"/>
                        <?php else: ?>
                            <img src="<?php echo esc_url(get_theme_file_uri('src/icons/playpartnersicon.svg')); ?>"
                                 alt="<?php echo esc_attr($left_case['company_name']); ?>"/>
                        <?php endif;
                        return $left_case;
                    }

                    $left_case = render_company_logo($left_case); ?>
                    <div><?php echo esc_html($left_case['company_name']); ?></div>
                </div>
                <span><?php echo esc_html($left_case['company_description']); ?></span>
                <div class="cases_wraper">
                    <?php foreach ($left_case['metrics'] as $metric): ?>
                        <div class="case">
                            <div class="dashed_vertical"></div>
                            <div class="case_label">
                                <?php if (!empty($metric['icon'])): ?>
                                    <img src="<?php echo esc_url($metric['icon']['url']); ?>" alt="<?php echo esc_attr($metric['icon']['alt'] ?: $metric['icon']['title'] ?: $metric['label']); ?>" />
                                <?php else: ?>
                                    <img src="<?php echo esc_url(get_theme_file_uri('src/icons/' . strtolower($metric['label']) . '.svg')); ?>" alt="<?php echo esc_attr($metric['label']); ?>" />
                                <?php endif; ?>
                                <span><?php echo esc_html($metric['label']); ?></span>
                            </div>
                            <span><?php echo esc_html($metric['value']); ?></span>
                        </div>
                    <?php endforeach; ?>
                </div>
                <button><?php echo esc_html($left_case['button_text']); ?></button>
            </div>
            <div class="home_gear3_lower_right">
                <div class="dashed_vertical"></div>
                <div class="label">
                    <?php $right_case = render_company_logo($right_case); ?>
                    <div><?php echo esc_html($right_case['company_name']); ?></div>
                </div>
                <span><?php echo esc_html($right_case['company_description']); ?></span>
            </div>
        </div>

        <div class="right_bottom">
            <div class="right_cases_wrapper">
                <?php foreach ($right_case['metrics'] as $metric): ?>
                    <div class="case">
                        <div class="dashed_vertical"></div>
                        <div class="case_label">
                            <span><?php echo esc_html($metric['label']); ?></span>
                        </div>
                        <span><?php echo esc_html($metric['value']); ?></span>
                    </div>
                <?php endforeach; ?>
            </div>
            <button><?php echo esc_html($right_case['button_text']); ?></button>
        </div>
    </div>
</section>