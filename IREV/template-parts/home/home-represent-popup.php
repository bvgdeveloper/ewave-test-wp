<?php
/**
 * Template Part: Home Represent Popup
 */

$popup_hurry_text = get_field('popup_hurry_text') ?: 'Hurry up';
$popup_timer = get_field('popup_timer') ?: '00:15:00';
$popup_discount_text = get_field('popup_discount_text') ?: '20% discount for the first month';
$popup_title = get_field('popup_title') ?: 'Irev puts your partner program on the fast track to real growth';
$popup_video = get_field('popup_video');
$popup_video_text = get_field('popup_video_text') ?: 'Watch IREV live review now [2 min]';
$popup_testimonial = get_field('popup_testimonial') ?: 'IREV covers everything for the convenient and effective management of affiliate programs. We\'ve been very happy with the platform and support from day one.';
$popup_testimonial_avatar = get_field('popup_testimonial_avatar');
$popup_award_icon = get_field('popup_award_icon');
$popup_award_title = get_field('popup_award_title') ?: 'SIGMA Award Winner';
$popup_award_text = get_field('popup_award_text') ?: 'Best marketing solution provider 2024';
$popup_form_button = get_field('popup_form_button') ?: 'get walkthrough';
$popup_policy_text = get_field('popup_policy_text') ?: 'By signing up you agree to IREV Policy';
$popup_promo_text = get_field('popup_promo_text') ?: 'I agree to receive promotional texts';

// Modal form fields
$modal_email_placeholder = get_field('modal_email_placeholder') ?: 'Enter e-mail';
$modal_button_text = get_field('modal_button_text') ?: 'TALK TO SALES';
$modal_video = get_field('modal_video');
?>

<div class="home_popup_overlay">
    <div class="home_popup_content">
        <div class="home_popup_content_upper">
            <div class="home_popup_content_label">
                <div class="home_popup_content_label_wrapper">
                    <span><?php echo esc_html($popup_hurry_text); ?></span>
                    <span class="home_popup_content_label_wrapper_counter"><?php echo esc_html($popup_timer); ?></span>
                </div>
                <span><?php echo esc_html($popup_discount_text); ?></span>
            </div>
            <button><img src="<?php echo esc_url(get_theme_file_uri('src/icons/cancel.svg')); ?>" alt="Cancel"/></button>
        </div>
        <h2><?php echo esc_html($popup_title); ?></h2>
        <div class="home_popup_content_lower">
            <?php echo do_shortcode('[contact-form-7 id="52b3147" title="Contact form 1 POPUP"]'); ?>
            <div class="home_popup_content_lower_rightcont">
                <div class="home_popup_content_lower_rightcont_video">
                    <video width="100%" id="popupVideo">
                        <?php if ($popup_video): ?>
                            <source src="<?php echo esc_url($popup_video['url']); ?>" type="video/mp4">
                        <?php else: ?>
                            <source src="<?php echo esc_url(get_theme_file_uri('src/video/sample-15s.mp4')); ?>" type="video/mp4">
                        <?php endif; ?>
                    </video>
                    <img src="<?php echo esc_url(get_theme_file_uri('src/icons/playbutton.svg')); ?>" alt="play" />
                </div>
                <span><?php echo esc_html($popup_video_text); ?></span>
                <div class="home_popup_content_lower_rightcont_lower">
                    <div class="home_popup_content_lower_rightcont_lower_phrase">
                        <span><?php echo esc_html($popup_testimonial); ?></span>
                        <?php if ($popup_testimonial_avatar): ?>
                            <img src="<?php echo esc_url($popup_testimonial_avatar['url']); ?>" alt="<?php echo esc_attr($popup_testimonial_avatar['alt'] ?: $popup_testimonial_avatar['title'] ?: 'Testimonial'); ?>" />
                        <?php else: ?>
                            <img src="<?php echo esc_url(get_theme_file_uri('src/icons/danielgram.svg')); ?>" alt="Daniel Gram" />
                        <?php endif; ?>
                    </div>
                    <div class="home_popup_content_lower_rightcont_lower_award">
                        <?php if ($popup_award_icon): ?>
                            <img src="<?php echo esc_url($popup_award_icon['url']); ?>" alt="<?php echo esc_attr($popup_award_icon['alt'] ?: $popup_award_icon['title'] ?: $popup_award_title); ?>" />
                        <?php else: ?>
                            <img src="<?php echo esc_url(get_theme_file_uri('src/icons/award.svg')); ?>" alt="Award" />
                        <?php endif; ?>
                        <span class="home_popup_content_lower_rightcont_lower_award_title"><?php echo esc_html($popup_award_title); ?></span>
                        <span class="home_popup_content_lower_rightcont_lower_award_text"><?php echo esc_html($popup_award_text); ?></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal-overlay" id="modalOverlay">
    <div class="modal">
        <div class="modal-video">
            <video width="100%">
                <?php if ($modal_video): ?>
                    <source src="<?php echo esc_url($modal_video['url']); ?>" type="video/mp4">
                <?php else: ?>
                    <source src="<?php echo esc_url(get_theme_file_uri('src/video/sample-15s.mp4')); ?>" type="video/mp4">
                <?php endif; ?>
            </video>
            <img src="<?php echo esc_url(get_theme_file_uri('src/icons/playbutton.svg')); ?>" alt="play" />
        </div>
        <form class="modal-form">
            <input type="email" class="form-input" placeholder="<?php echo esc_attr($modal_email_placeholder); ?>">
            <button class="form-button"><?php echo esc_html($modal_button_text); ?></button>
        </form>
    </div>
</div>