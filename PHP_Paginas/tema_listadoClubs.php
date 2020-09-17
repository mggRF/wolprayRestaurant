<?php /* Template Name: ListadoClubs */ ?>

<?php



if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

get_header(); ?>

<?php if (astra_page_layout() == 'left-sidebar') : ?>

    <?php get_sidebar(); ?>

<?php endif ?>

<div id="primary" <?php astra_primary_class(); ?>>

    <?php astra_primary_content_top(); ?>

    <?php astra_content_loop(); ?>

    <?php astra_primary_content_bottom(); ?>

<h1>el listado</h1>
<?php require_once 'listadosWolpray/listadoClubs.php' ?>

</div><!-- #primary -->

<?php if (astra_page_layout() == 'right-sidebar') : ?>

    <?php get_sidebar(); ?>



<?php endif ?>

<?php get_footer(); ?>