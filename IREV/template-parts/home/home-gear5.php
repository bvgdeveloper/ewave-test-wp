<?php
/**
 * Template Part: Home Gear5
 */

$gear5_header_title = get_field('gear5_header_title') ?: 'GEAR 05';
$gear5_header_icon = get_field('gear5_header_icon');
$gear5_title = get_field('gear5_title') ?: 'Twin-turbo solutions for affiliate domination';
$gear5_cards = get_field('gear5_cards');
$gear5_faq_background = get_field('gear5_faq_background');
$gear5_faq_title = get_field('gear5_faq_title') ?: 'frequently asked questions';
$gear5_faq_items = get_field('gear5_faq_items');
$gear5_accordion_open_icon = get_field('gear5_accordion_open_icon');
$gear5_accordion_close_icon = get_field('gear5_accordion_close_icon');

// Fallback cards
$default_cards = [
    [
        'card_image' => '',
        'card_icon' => '',
        'card_title' => 'partner platform',
        'card_description' => 'Start or scale your partner program',
        'card_features' => [
            ['feature_number' => '[1]', 'feature_title' => 'Advanced Analytics', 'feature_description' => 'Data-driven insights, robust partner management control'],
            ['feature_number' => '[2]', 'feature_title' => 'Efficient Partner Management', 'feature_description' => 'Innovative tool for better affiliate partnerships'],
            ['feature_number' => '[3]', 'feature_title' => 'Customisation and 360° Integration', 'feature_description' => 'Customisable options for efficient scaling']
        ],
        'card_button_text' => 'learn more'
    ],
    [
        'card_image' => '',
        'card_icon' => '',
        'card_title' => 'partner platform',
        'card_description' => 'Start or scale your partner program',
        'card_features' => [
            ['feature_number' => '[1]', 'feature_title' => 'Advanced Analytics', 'feature_description' => 'Data-driven insights, robust partner management control'],
            ['feature_number' => '[2]', 'feature_title' => 'Efficient Partner Management', 'feature_description' => 'Innovative tool for better affiliate partnerships'],
            ['feature_number' => '[3]', 'feature_title' => 'Customisation and 360° Integration', 'feature_description' => 'Customisable options for efficient scaling']
        ],
        'card_button_text' => 'learn more'
    ],
    [
        'card_image' => '',
        'card_icon' => '',
        'card_title' => 'Lead Distribution',
        'card_description' => 'Start or scale your partner program',
        'card_features' => [
            ['feature_number' => '[1]', 'feature_title' => 'Advanced Analytics', 'feature_description' => 'Data-driven insights, robust partner management control'],
            ['feature_number' => '[2]', 'feature_title' => 'Efficient Partner Management', 'feature_description' => 'Innovative tool for better affiliate partnerships'],
            ['feature_number' => '[3]', 'feature_title' => 'Customisation and 360° Integration', 'feature_description' => 'Customisable options for efficient scaling']
        ],
        'card_button_text' => 'learn more'
    ]
];

// Fallback FAQ
$default_faq = [
    ['question' => 'What is IREV?', 'answer' => 'In technical terms,IREV is a SaaS platform that allows brands to create, track and optimize partner programs, manage leads, and increase ad campaigns conversion rates. But behind every technology, there is a group of devoted people. And these people are also IREV.'],
    ['question' => 'How much does IREV cost?', 'answer' => 'In technical terms,IREV is a SaaS platform that allows brands to create, track and optimize partner programs, manage leads, and increase ad campaigns conversion rates. But behind every technology, there is a group of devoted people. And these people are also IREV.'],
    ['question' => 'How can I integrate IREV with my website?', 'answer' => 'In technical terms,IREV is a SaaS platform that allows brands to create, track and optimize partner programs, manage leads, and increase ad campaigns conversion rates. But behind every technology, there is a group of devoted people. And these people are also IREV.'],
    ['question' => 'What types of business can benefit from IREV?', 'answer' => 'In technical terms,IREV is a SaaS platform that allows brands to create, track and optimize partner programs, manage leads, and increase ad campaigns conversion rates. But behind every technology, there is a group of devoted people. And these people are also IREV.'],
    ['question' => 'Why choose IREV over other platforms?', 'answer' => 'In technical terms,IREV is a SaaS platform that allows brands to create, track and optimize partner programs, manage leads, and increase ad campaigns conversion rates. But behind every technology, there is a group of devoted people. And these people are also IREV.']
];

$cards = !empty($gear5_cards) ? $gear5_cards : $default_cards;
$faq_items = !empty($gear5_faq_items) ? $gear5_faq_items : $default_faq;
?>

<section class="home_gear5">
    <header class="home_gear_header">
        <span>[<?php echo esc_html($gear5_header_title); ?>]</span>
        <?php if ($gear5_header_icon): ?>
            <img src="<?php echo esc_url($gear5_header_icon['url']); ?>" alt="<?php echo esc_attr($gear5_header_icon['alt'] ?: $gear5_header_icon['title'] ?: $gear5_header_title); ?>" />
        <?php else: ?>
            <img src="<?php echo esc_url(get_theme_file_uri('src/icons/gear5.svg')); ?>" alt="<?php echo esc_attr($gear5_header_title); ?>" />
        <?php endif; ?>
    </header>
    <div class="home_gear5_container">
        <h2><?php echo esc_html($gear5_title); ?></h2>
        <div class="home_gear5_cards_container">
            <?php foreach ($cards as $index => $card): ?>
                <div class="cards_card" data-card-index="<?php echo esc_attr($index); ?>">
                    <?php if (!empty($card['card_image'])): ?>
                        <img src="<?php echo esc_url($card['card_image']['url']); ?>" alt="<?php echo esc_attr($card['card_image']['alt'] ?: $card['card_image']['title'] ?: $card['card_title']); ?>" />
                    <?php else: ?>
                        <?php
                        $default_card_images = ['card1.svg', 'card1.svg', 'card2.svg'];
                        $default_image = isset($default_card_images[$index]) ? $default_card_images[$index] : 'card1.svg';
                        ?>
                        <img src="<?php echo esc_url(get_theme_file_uri('src/icons/' . $default_image)); ?>" alt="<?php echo esc_attr($card['card_title']); ?>" />
                    <?php endif; ?>

                    <div class="card_label">
                        <div class="card_label_wrapper">
                            <?php if (!empty($card['card_icon'])): ?>
                                <img src="<?php echo esc_url($card['card_icon']['url']); ?>" alt="<?php echo esc_attr($card['card_icon']['alt'] ?: $card['card_icon']['title'] ?: $card['card_title']); ?>" />
                            <?php else: ?>
                                <?php
                                $default_icons = ['gear5partnerplatform.svg', 'gear5partnerplatform.svg', 'gear5lead.svg'];
                                $default_icon = isset($default_icons[$index]) ? $default_icons[$index] : 'gear5partnerplatform.svg';
                                ?>
                                <img src="<?php echo esc_url(get_theme_file_uri('src/icons/' . $default_icon)); ?>" alt="<?php echo esc_attr($card['card_title']); ?>" />
                            <?php endif; ?>
                            <div><?php echo esc_html($card['card_title']); ?></div>
                        </div>
                        <span><?php echo esc_html($card['card_description']); ?></span>
                    </div>
                    <ul>
                        <?php foreach ($card['card_features'] as $feature): ?>
                            <li>
                                <span class="label_list_main"><?php echo esc_html($feature['feature_number']); ?> <?php echo esc_html($feature['feature_title']); ?></span>
                                <span class="label_list_additional"><?php echo esc_html($feature['feature_description']); ?></span>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                    <button><?php echo esc_html($card['card_button_text']); ?></button>
                </div>
            <?php endforeach; ?>
        </div>
    </div>

    <div class="home_gear5_lower_container">
        <?php if ($gear5_faq_background): ?>
            <img src="<?php echo esc_url($gear5_faq_background['url']); ?>" alt="<?php echo esc_attr($gear5_faq_background['alt'] ?: $gear5_faq_background['title'] ?: $gear5_faq_title); ?>" />
        <?php else: ?>
            <img src="<?php echo esc_url(get_theme_file_uri('src/icons/gear5back.svg')); ?>" alt="<?php echo esc_attr($gear5_faq_title); ?>" />
        <?php endif; ?>

        <h2><?php echo esc_html($gear5_faq_title); ?></h2>
        <div class="home_gear5_accordion">
            <?php foreach ($faq_items as $faq): ?>
                <div class="accordion_item">
                    <span><?php echo esc_html($faq['question']); ?></span>
                    <span class="text_opened"><?php echo esc_html($faq['answer']); ?></span>
                    <button>
                        <?php if ($gear5_accordion_open_icon): ?>
                            <img class="open" src="<?php echo esc_url($gear5_accordion_open_icon['url']); ?>" alt="<?php echo esc_attr($gear5_accordion_open_icon['alt'] ?: $gear5_accordion_open_icon['title'] ?: 'Open'); ?>" />
                        <?php else: ?>
                            <img class="open" src="<?php echo esc_url(get_theme_file_uri('src/icons/accordionopen.svg')); ?>" alt="Open" />
                        <?php endif; ?>

                        <?php if ($gear5_accordion_close_icon): ?>
                            <img class="close" src="<?php echo esc_url($gear5_accordion_close_icon['url']); ?>" alt="<?php echo esc_attr($gear5_accordion_close_icon['alt'] ?: $gear5_accordion_close_icon['title'] ?: 'Close'); ?>" />
                        <?php else: ?>
                            <img class="close" src="<?php echo esc_url(get_theme_file_uri('src/icons/close.svg')); ?>" alt="Close" />
                        <?php endif; ?>
                    </button>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>