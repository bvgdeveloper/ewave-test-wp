<?php
/**
 * Template Part: Home Represent
 */

$represent_timer = get_field('represent_timer') ?: '00:03,00';
$represent_timer_dots = get_field('represent_timer_dots');
$represent_go_text = get_field('represent_go_text') ?: 'let`s Go!';
$represent_slogan = get_field('represent_slogan') ?: 'launch affiliate marketing that runs like a finely tuned machine';
$represent_email_placeholder = get_field('represent_email_placeholder') ?: 'Enter e-mail';
$represent_button_text = get_field('represent_button_text') ?: 'test-drive';
$represent_slots_text = get_field('represent_slots_text') ?: '[Only 5 slots left this month]';
$represent_avatars = get_field('represent_avatars');
$represent_rating_image = get_field('represent_rating_image');
$represent_rating_text = get_field('represent_rating_text') ?: '5/5 from 439 affiliate business owner';
$represent_bottom_text = get_field('represent_bottom_text') ?: 'No click speed limits. No CR ceiling. Just pure revenue acceleration software.';
$represent_video = get_field('represent_video');
$represent_video_duration = get_field('represent_video_duration') ?: '00:30';
$represent_background = get_field('represent_background');

// Default avatars
$default_avatars = [
    ['avatar' => '', 'name' => 'Avatar 1'],
    ['avatar' => '', 'name' => 'Avatar 2'],
    ['avatar' => '', 'name' => 'Avatar 3'],
    ['avatar' => '', 'name' => 'Avatar 4'],
    ['avatar' => '', 'name' => 'Avatar 5'],
    ['avatar' => '', 'name' => 'Avatar 6']
];

$avatars = !empty($represent_avatars) ? $represent_avatars : $default_avatars;
?>

<section class="home_represent">
    <div class="home_represent_upperWrapper">
        <div class="home_represent_counter">
            <span class="home_represent_counter_timer"><?php echo esc_html($represent_timer); ?></span>
            <img class="home_represent_counter_red" src="<?php echo esc_url(get_theme_file_uri('src/icons/dot.svg')); ?>" alt="Red dot" />
            <img class="home_represent_counter_yellow" src="<?php echo esc_url(get_theme_file_uri('src/icons/yellowDot.svg')); ?>" alt="Yellow dot" />
            <img class="home_represent_counter_green" src="<?php echo esc_url(get_theme_file_uri('src/icons/greenDot.svg')); ?>" alt="Green dot" />
            <span class="home_represent_counter_go"><?php echo esc_html($represent_go_text); ?></span>
        </div>
        <div class="home_represent_general">
            <h1 class="home_represent_general_slogan"><?php echo esc_html($represent_slogan); ?></h1>
            <div class="home_represent_form_container">
                <form class="home_represent_form">
                    <input type="email" placeholder="<?php echo esc_attr($represent_email_placeholder); ?>" class="home_represent_form_container_input" />
                    <button class="home_represent_form_container_button" type="submit"><?php echo esc_html($represent_button_text); ?></button>
                </form>
                <span><?php echo esc_html($represent_slots_text); ?></span>
            </div>
        </div>
    </div>
    <div class="home_represent_rate">
        <div class="home_represent_rate_avatars">
            <?php foreach ($avatars as $index => $avatar): ?>
                <?php if (!empty($avatar['avatar'])): ?>
                    <img src="<?php echo esc_url($avatar['avatar']['url']); ?>" alt="<?php echo esc_attr($avatar['avatar']['alt'] ?: $avatar['avatar']['title'] ?: $avatar['name']); ?>" />
                <?php else: ?>
                    <img src="<?php echo esc_url(get_theme_file_uri('src/icons/avatar' . ($index + 1) . '.svg')); ?>" alt="<?php echo esc_attr($avatar['name']); ?>" />
                <?php endif; ?>
            <?php endforeach; ?>
        </div>
        <?php if ($represent_rating_image): ?>
            <img class="home_represent_rate_rating" src="<?php echo esc_url($represent_rating_image['url']); ?>" alt="<?php echo esc_attr($represent_rating_image['alt'] ?: $represent_rating_image['title'] ?: 'Rating'); ?>" />
        <?php else: ?>
            <img class="home_represent_rate_rating" src="<?php echo esc_url(get_theme_file_uri('src/icons/stars.svg')); ?>" alt="Rating" />
        <?php endif; ?>
        <span><?php echo esc_html($represent_rating_text); ?></span>
    </div>
    <div class="home_represent_lowerWrapper">
        <span class="home_represent_lowerWrapper_text"><?php echo esc_html($represent_bottom_text); ?></span>
        <div class="home_represent_lowerWrapper_video">
            <div class="video_cont">
                <video width="100%">
                    <?php if ($represent_video): ?>
                        <source src="<?php echo esc_url($represent_video['url']); ?>" type="video/mp4">
                    <?php else: ?>
                        <source src="<?php echo esc_url(get_theme_file_uri('src/video/sample-15s.mp4')); ?>" type="video/mp4">
                    <?php endif; ?>
                </video>
                <img src="<?php echo esc_url(get_theme_file_uri('src/icons/playbutton.svg')); ?>" alt="play" />
            </div>
            <div class="video_player">
                <span><?php echo esc_html($represent_video_duration); ?></span>
                <button><img src="<?php echo esc_url(get_theme_file_uri('src/icons/play.svg')); ?>" alt="Play" /></button>
            </div>
        </div>
    </div>
    <?php if ($represent_background): ?>
        <img class="home_represent_backgroundImg" src="<?php echo esc_url($represent_background['url']); ?>" alt="<?php echo esc_attr($represent_background['alt'] ?: $represent_background['title'] ?: 'Background'); ?>" />
    <?php else: ?>
        <img class="home_represent_backgroundImg" src="<?php echo esc_url(get_theme_file_uri('src/icons/gradientGlobes.svg')); ?>" alt="Background" />
    <?php endif; ?>
</section>