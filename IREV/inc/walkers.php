<?php

/**
 * Base navigation walker with common item attribute handling
 */
abstract class Base_Walker extends Walker_Nav_Menu
{
    /**
     * Extract and format menu item attributes
     */
    protected function get_item_attributes($item, $depth = 0)
    {
        $attributes = !empty($item->attr_title) ? ' title="' . esc_attr($item->attr_title) . '"' : '';
        $attributes .= !empty($item->target) ? ' target="' . esc_attr($item->target) . '"' : '';
        $attributes .= !empty($item->xfn) ? ' rel="' . esc_attr($item->xfn) . '"' : '';
        $attributes .= !empty($item->url) ? ' href="' . esc_attr($item->url) . '"' : '';

        return $attributes;
    }
}

/**
 * Header navigation walker with dropdown functionality
 */
class Header_Walker extends Base_Walker
{
    private $dropdown_items = array();

    /**
     * Pre-process menu items to identify dropdown structure
     */
    public function walk($elements, $max_depth, ...$args)
    {
        $this->collect_dropdown_items($elements);
        return parent::walk($elements, $max_depth, ...$args);
    }

    /**
     * Build dropdown item mapping for parent-child relationships
     */
    private function collect_dropdown_items($elements)
    {
        foreach ($elements as $element) {
            if ($element->menu_item_parent != 0) {
                $parent_id = $element->menu_item_parent;
                if (!isset($this->dropdown_items[$parent_id])) {
                    $this->dropdown_items[$parent_id] = array();
                }
                $this->dropdown_items[$parent_id][] = $element;
            }
        }
    }

    function start_lvl(&$output, $depth = 0, $args = null)
    {
        // Skip nested list creation for custom dropdown handling
    }

    function end_lvl(&$output, $depth = 0, $args = null)
    {
        // Skip nested list closing for custom dropdown handling
    }

    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
    {
        if ($depth > 0) return; // Process only top-level items

        $has_dropdown = isset($this->dropdown_items[$item->ID]);
        $data_trigger = $has_dropdown ? ' data-dropdown-trigger="' . sanitize_title($item->title) . '"' : '';

        $output .= '<div class="header_menu_item"' . $data_trigger . '>';

        if ($has_dropdown) {
            $output .= '<div class="header_menu_item_inner">';
            $output .= '<button>' . $item->title . '</button>';
            $output .= '<img src="' . get_theme_file_uri('src/icons/miniArrow.svg') . '" alt="arrow" class="header_menu_item_arrow_unselected" />';
            $output .= '<img src="' . get_theme_file_uri('src/icons/arrowSelected.svg') . '" alt="arrow" class="header_menu_item_arrow_selected" />';
            $output .= '</div>';
        } else {
            if (!empty($item->url)) {
                $output .= '<a' . $this->get_item_attributes($item) . '>' . $item->title . '</a>';
            } else {
                $output .= $item->title;
            }
        }

        $output .= '</div>';
    }

    function end_el(&$output, $item, $depth = 0, $args = null)
    {
        // Element already closed in start_el method
    }

    /**
     * Generate dropdown HTML structure for collected child items
     */
    public function get_dropdown_html()
    {
        $output = '<div class="nav_dropdown_container">';

        foreach ($this->dropdown_items as $parent_id => $children) {
            $parent = get_post($parent_id);
            $data_content = sanitize_title($parent->post_title);

            $output .= '<div class="nav_dropdown" data-dropdown-content="' . $data_content . '">';
            foreach ($children as $child) {
                $output .= '<a href="' . $child->url . '">' . $child->title . '</a>';
            }
            $output .= '</div>';
        }

        $output .= '</div>';
        return $output;
    }
}

/**
 * Footer navigation walker with grouped list structure
 */
class Footer_Walker extends Base_Walker
{
    function start_lvl(&$output, $depth = 0, $args = null)
    {
        if ($depth == 0) {
            $output .= '<ul class="footer_nav_list_list">';
        }
    }

    function end_lvl(&$output, $depth = 0, $args = null)
    {
        if ($depth == 0) {
            $output .= '</ul>';
        }
    }

    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
    {
        if ($depth == 0) {
            $output .= '<div class="footer_nav_list">';
            $output .= '<span class="footer_nav_list_title">' . strtoupper($item->title) . '</span>';
        } else {
            $output .= '<li><a' . $this->get_item_attributes($item) . '>' . $item->title . '</a></li>';
        }
    }

    function end_el(&$output, $item, $depth = 0, $args = null)
    {
        if ($depth == 0) {
            $output .= '</div>';
        }
    }
}

/**
 * Social media navigation walker with comma-separated inline layout
 */
class Social_Walker extends Base_Walker
{
    private $item_count = 0;
    private $total_items = 0;

    public function walk($elements, $max_depth, ...$args)
    {
        $this->total_items = count($elements);
        return parent::walk($elements, $max_depth, ...$args);
    }

    function start_lvl(&$output, $depth = 0, $args = null)
    {
        // No nested lists for social menu
    }

    function end_lvl(&$output, $depth = 0, $args = null)
    {
        // No nested lists for social menu
    }

    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
    {
        $this->item_count++;
        $is_last_item = ($this->item_count === $this->total_items);
        $separator = $is_last_item ? '' : ', ';

        $output .= '<a' . $this->get_item_attributes($item) . '>' . strtoupper($item->title) . $separator . '</a>';
    }

    function end_el(&$output, $item, $depth = 0, $args = null)
    {
        // Items are self-closing in start_el
    }
}