<?php
/**
 * Template Part: Home Gear1
 */

$gear1_header_title = get_field('gear1_header_title') ?: 'GEAR 01';
$gear1_header_icon = get_field('gear1_header_icon');
$gear1_items = get_field('gear1_items');

// Fallback data
$default_items = [
    ['item_number' => '1', 'item_label' => 'INTEGRATION', 'item_title' => 'launch your affiliate program full throttle', 'item_description' => '<span class="home_gear1_info_text_container_text_colored">Use 160+ premium features</span>: from custom performance widgets, cohort reports, automatic CRG calculation to flexible payment models. IREV solutions will quickly become a seamless part of your marketing ecosystem without migration headache.'],
    ['item_number' => '2', 'item_label' => 'OPTIMISATION', 'item_title' => 'Get dashboard-grade insights to leave your competitors in the dust', 'item_description' => 'Define custom metrics for deeper insights into your performance, and tweak your experience with <span class="home_gear1_info_text_container_text_colored">over 50 statistics settings</span> to fine-tune your operational workflow.'],
    ['item_number' => '3', 'item_label' => 'SAFETY', 'item_title' => 'Keep your eyes on the road - we\'ll take care of the engine under the hood', 'item_description' => '<span class="home_gear1_info_text_container_text_colored">3 levels of business protection</span>: data privacy, user safety, fraud prevention with advanced security options and the latest cloud solutions. IREV allows you to focus on strategic decisions and growth.'],
    ['item_number' => '4', 'item_label' => 'MOTIVATION', 'item_title' => 'Turbocharge your partners with next-level performance boosters', 'item_description' => 'Motivate your affiliates with an advanced payout system, KPI and lead distribution assistance. These tools help IREV clients to increase <span class="home_gear1_info_text_container_text_colored">income by 30% during the first 60 days on average</span>. Break this record with us.'],
    ['item_number' => '5', 'item_label' => 'SUPPORT', 'item_title' => 'Like a pit stop at 300 km/h – our support keeps you racing', 'item_description' => 'Full onboarding, account setup, and hands-on assistance with <span class="home_gear1_info_text_container_text_colored">98% client satisfaction rate</span>. IREV is aimed on personalised service and support, fostering mutual growth.']
];

$items = !empty($gear1_items) ? $gear1_items : $default_items;
?>

<section class="home_gear1">
    <header class="home_gear_header">
        <span>[<?php echo esc_html($gear1_header_title); ?>]</span>
        <?php if ($gear1_header_icon): ?>
            <img src="<?php echo esc_url($gear1_header_icon['url']); ?>" alt="<?php echo esc_attr($gear1_header_icon['alt'] ?: $gear1_header_icon['title'] ?: $gear1_header_title); ?>" />
        <?php else: ?>
            <img src="<?php echo esc_url(get_theme_file_uri('src/icons/gear1.svg')); ?>" alt="<?php echo esc_attr($gear1_header_title); ?>" />
        <?php endif; ?>
    </header>
    <div class="home_gear1_wrapper">
        <?php foreach ($items as $index => $item): ?>
            <div class="home_gear1_info_container" data-section="<?php echo esc_attr($index + 1); ?>">
                <span class="home_gear1_info_label">[<?php echo esc_html($item['item_number']); ?>]<?php echo esc_html($item['item_label']); ?></span>
                <div class="home_gear1_info_text_container">
                    <h2><?php echo esc_html($item['item_title']); ?></h2>
                    <span class="home_gear1_info_text_container_text">
                        <?php echo wp_kses_post($item['item_description']); ?>
                    </span>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</section>
