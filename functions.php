
function haogang_enqueue_styles() {
    $css_version = filemtime(get_template_directory() . '/style.css');
    wp_enqueue_style('haogang-style', get_template_directory_uri() . '/style.css', array(), $css_version);
}
add_action('wp_enqueue_scripts', 'haogang_enqueue_styles');