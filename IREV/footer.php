<?php wp_footer(); ?>
<footer>
    <div class="footer_wrapper">
        <section class="footer_nav__cf7">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'footer-menu',
                'container' => false,
                'walker' => new Footer_Walker()
            ));
            ?>
        </section>
        <div class="footer_lower">
            <span class="footer_lower_copyrighting">
                Copyrighting © 2025 IREV. All rights reserved.
            </span>
            <div>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'social-menu',
                    'walker' => new Social_Walker(),
                    'container' => false,
                    'items_wrap' => '%3$s'
                ));
                ?>
            </div>
        </div>
        <img class="footer_logo" src="<?php echo esc_url(get_theme_file_uri('src/icons/IREV.svg')); ?>"
             alt="irev" />
    </div>
</footer>
</body>
</html>